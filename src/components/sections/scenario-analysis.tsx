import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";

// Current Metaplanet metrics (April 21, 2026 - analytics.metaplanet.jp)
const CURRENT = {
  btc: 40177,
  btcPrice: 75947,
  basicShares: 1274171340,
  dilutedShares: 1624499175,
  mercuryDividend: 7.26, // $M annual
  currentDebt: 247, // $M
  currentPreferred: 148.21, // $M
};

// MARS scenarios
const MARS_SCENARIOS = [
  {
    label: "Conservative",
    raise: 250,
    rate: 3.0,
    btcPrice: 75000,
  },
  {
    label: "Base",
    raise: 500,
    rate: 5.0,
    btcPrice: 85000,
  },
  {
    label: "Aggressive",
    raise: 1000,
    rate: 5.0,
    btcPrice: 100000,
  },
  {
    label: "Full Scale",
    raise: 2000,
    rate: 6.0,
    btcPrice: 100000,
  },
];

// mNAV sensitivity
const BTC_PRICES = [75000, 100000, 150000, 200000, 250000];
const MNAV_MULTIPLES = [0.75, 1.0, 1.25, 1.5, 2.0, 3.0];

function formatB(n: number): string {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}T`;
  return `$${n.toFixed(1)}B`;
}

function formatPrice(n: number): string {
  return `$${n.toFixed(2)}`;
}

export function ScenarioAnalysis() {
  return (
    <SectionWrapper id="scenario-analysis" variant="muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Quantitative Framework
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Scenario Analysis
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          The following models use Metaplanet&apos;s current metrics as the baseline
          and apply straightforward arithmetic to project outcomes under different
          assumptions. No complex modeling or subjective inputs - just the math
          of capital raises, BTC accumulation, and market valuation.
        </p>
      </div>

      {/* Current Baseline */}
      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Current Baseline (April 21, 2026)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard label="BTC Holdings" value="40,177" sublabel="$3.05B NAV at current price" />
          <StatCard label="Diluted Shares" value="1.62B" sublabel="Basic: 1.27B" />
          <StatCard label="Sats/Diluted Share" value="2,473" sublabel="BTC per share exposure" />
          <StatCard label="Annual Div Obligation" value="$7.26M" sublabel="MERCURY only (current)" />
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Source: <a href="https://analytics.metaplanet.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">analytics.metaplanet.jp</a> (April 21, 2026)
        </p>
      </div>

      {/* MARS BTC Yield Scenarios */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          MARS BTC Yield Scenario Analysis
        </h3>
        <p className="text-sm text-ink-500 mb-6">
          What happens to BTC-per-share when MARS raises capital at different scales?
          MARS is a non-dilutive preferred instrument - common shares outstanding
          do not increase. All proceeds are deployed into BTC.
        </p>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th className="num">MARS Raise</th>
                <th className="num">Div Rate</th>
                <th className="num">BTC Price</th>
                <th className="num">BTC Added</th>
                <th className="num">New Total BTC</th>
                <th className="num">BTC Yield</th>
                <th className="num">New Annual Div</th>
                <th className="num">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {MARS_SCENARIOS.map((s) => {
                const btcAdded = (s.raise * 1e6) / s.btcPrice;
                const newTotal = CURRENT.btc + btcAdded;
                const btcYield = (btcAdded / CURRENT.btc) * 100;
                const newAnnualDiv = CURRENT.mercuryDividend + (s.raise * s.rate) / 100;
                const newBtcNav = newTotal * s.btcPrice;
                const coverage = newBtcNav / (newAnnualDiv * 1e6);
                const isBase = s.label === "Base";

                return (
                  <tr key={s.label} className={isBase ? "highlight" : ""}>
                    <td className="label">{s.label}</td>
                    <td className="num">${s.raise}M</td>
                    <td className="num">{s.rate}%</td>
                    <td className="num">${(s.btcPrice / 1000).toFixed(0)}K</td>
                    <td className="num">{btcAdded.toFixed(0)}</td>
                    <td className="num">{newTotal.toFixed(0)}</td>
                    <td className="num">+{btcYield.toFixed(1)}%</td>
                    <td className="num">${newAnnualDiv.toFixed(1)}M</td>
                    <td className="num">{coverage.toFixed(0)} yr</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">Key takeaway:</strong> Even in the
            Full Scale scenario ($2B raise at 6%), MARS adds ~20,000 BTC (+49.8%
            BTC Yield) while coverage remains over 100 years. Compare to STRC&apos;s
            11.50% dividend rate - MARS at 5-6% delivers the same BTC accumulation
            engine at roughly half the cost of capital.
          </p>
          <p>
            These are non-dilutive to common shareholders. Diluted shares do not
            increase from preferred issuance. BTC-per-share grows by the full BTC
            Yield percentage shown.
          </p>
        </div>

        <p className="mt-2 text-xs text-ink-400">
          Model inputs: Current holdings from analytics.metaplanet.jp. MARS dividend range (1-8%) from Metaplanet AGM 2026. BTC prices are scenario assumptions.
        </p>
      </div>

      {/* Flywheel Scenario */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          The Capital Flywheel: Multi-Cycle Compounding
        </h3>
        <p className="text-sm text-ink-500 mb-6">
          The single-raise scenarios above understate the thesis because they
          model one event in isolation. The real power is the flywheel - each
          capital raise enables the next, and mNAV expansion unlocks accretive
          equity raises that compound BTC-per-share. This is the cycle Strategy
          has demonstrated through its moving strike warrant program and ATM
          preferred issuance.
        </p>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Cycle</th>
                <th>Action</th>
                <th className="num">Capital</th>
                <th className="num">BTC Added</th>
                <th className="num">Total BTC</th>
                <th className="num">Shares</th>
                <th className="num">Sats/Share</th>
                <th className="num">BTC Yield</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Baseline</td>
                <td>Current state</td>
                <td className="num">-</td>
                <td className="num">-</td>
                <td className="num">40,177</td>
                <td className="num">1.27B</td>
                <td className="num">3,153</td>
                <td className="num">-</td>
              </tr>
              <tr>
                <td className="label">Cycle 1</td>
                <td>MARS raise (preferred, non-dilutive)</td>
                <td className="num">$500M</td>
                <td className="num">5,882</td>
                <td className="num">46,059</td>
                <td className="num">1.27B</td>
                <td className="num">3,616</td>
                <td className="num">+14.7%</td>
              </tr>
              <tr>
                <td className="label">Cycle 2</td>
                <td>mNAV expands to 1.5x; equity raise via warrants at premium</td>
                <td className="num">$300M</td>
                <td className="num">3,529</td>
                <td className="num">49,588</td>
                <td className="num">1.33B</td>
                <td className="num">3,722</td>
                <td className="num">+2.9%</td>
              </tr>
              <tr>
                <td className="label">Cycle 3</td>
                <td>Expanded NAV enables second MARS raise</td>
                <td className="num">$750M</td>
                <td className="num">8,824</td>
                <td className="num">58,412</td>
                <td className="num">1.33B</td>
                <td className="num">4,384</td>
                <td className="num">+17.8%</td>
              </tr>
              <tr>
                <td className="label">Cycle 4</td>
                <td>Further mNAV expansion; second equity raise at higher premium</td>
                <td className="num">$500M</td>
                <td className="num">5,882</td>
                <td className="num">64,294</td>
                <td className="num">1.40B</td>
                <td className="num">4,585</td>
                <td className="num">+4.6%</td>
              </tr>
              <tr className="highlight">
                <td className="label">Cumulative</td>
                <td>4 cycles, alternating preferred + equity</td>
                <td className="num">$2.05B</td>
                <td className="num">24,117</td>
                <td className="num">64,294</td>
                <td className="num">1.40B</td>
                <td className="num">4,585</td>
                <td className="num">+45.4%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-3 text-sm leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">How the flywheel works:</strong> MARS
            raises are non-dilutive (preferred shares, no common share increase).
            This grows BTC-per-share directly. As BTC-per-share grows and/or BTC
            price appreciates, mNAV can expand above 1.0x. When mNAV exceeds 1.0x,
            equity raises through the moving strike warrant program become
            BTC-per-share accretive - because the equity is sold at a premium to
            NAV, meaning more BTC is purchased per share issued than the dilution
            costs. The expanded NAV from both raises then creates capacity for the
            next, larger MARS issuance (leverage ratio stays low). Each cycle feeds
            the next.
          </p>
          <p>
            <strong className="text-ink-800">Strategy proved this at scale.</strong>{" "}
            Strategy&apos;s moving strike warrant program and ATM preferred issuance
            operated this exact flywheel - alternating between equity raises at
            mNAV premium and STRC preferred raises, each cycle growing BTC holdings
            while maintaining acceptable leverage. The result: 815,061 BTC accumulated,
            9.5% BTC Yield YTD, $61.6B in reserves.
          </p>
          <p>
            <strong className="text-ink-800">The compounding asymmetry:</strong> In
            the illustrative scenario above, 4 cycles of alternating preferred and
            equity raises produce +45.4% cumulative BTC Yield with only a 10%
            increase in share count. The BTC growth rate (60%) far outpaces
            dilution (10%) because preferred raises carry zero dilution and equity
            raises are done at mNAV premiums. This is the engine that the Everything
            Code thesis and Japan&apos;s structural capital migration are designed to fuel.
          </p>
        </div>

        <p className="mt-2 text-xs text-ink-400">
          Illustrative scenario using $85K BTC price assumption. Equity raise in Cycle 2 assumes mNAV 1.5x (shares issued at premium). Actual results depend on market conditions, BTC price, mNAV at time of issuance, and TSE approval of MARS.
        </p>
      </div>

      {/* mNAV / BTC Price Sensitivity */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          Valuation Sensitivity: BTC Price x mNAV Multiple
        </h3>
        <p className="text-sm text-ink-500 mb-6">
          Metaplanet&apos;s market cap is a function of two variables: the price of
          Bitcoin (which determines BTC NAV) and the mNAV multiple the market
          assigns (which reflects premium or discount to NAV). Current mNAV: 0.89x
          market cap, 1.02x enterprise value. Strategy trades at 1.26x.
        </p>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>BTC Price</th>
                <th className="num">BTC NAV</th>
                {MNAV_MULTIPLES.map((m) => (
                  <th key={m} className="num">
                    {m}x mNAV
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BTC_PRICES.map((price) => {
                const nav = (CURRENT.btc * price) / 1e9;
                return (
                  <tr
                    key={price}
                    className={price === 100000 ? "highlight" : ""}
                  >
                    <td className="label">
                      ${(price / 1000).toFixed(0)}K
                    </td>
                    <td className="num">{formatB(nav)}</td>
                    {MNAV_MULTIPLES.map((m) => {
                      const mktCap = nav * m;
                      return (
                        <td key={m} className="num">
                          {formatB(mktCap)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-xs text-ink-400 mb-8">
          Current market cap: $2.71B. Current BTC NAV: $3.05B. Based on 40,177 BTC held.
        </p>

        {/* Share Price Sensitivity */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          Implied Share Price (Basic Shares: 1.27B)
        </h4>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>BTC Price</th>
                {MNAV_MULTIPLES.map((m) => (
                  <th key={m} className="num">
                    {m}x mNAV
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BTC_PRICES.map((price) => {
                const nav = (CURRENT.btc * price) / 1e9;
                return (
                  <tr
                    key={price}
                    className={price === 100000 ? "highlight" : ""}
                  >
                    <td className="label">
                      ${(price / 1000).toFixed(0)}K
                    </td>
                    {MNAV_MULTIPLES.map((m) => {
                      const mktCap = nav * m;
                      const sharePrice =
                        (mktCap * 1e9) / CURRENT.basicShares;
                      return (
                        <td key={m} className="num">
                          {formatPrice(sharePrice)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-xs text-ink-400 mb-6">
          Current share price: $2.13. Does not account for additional BTC accumulation from MARS or other capital raises, which would increase NAV and BTC-per-share.
        </p>

        <div className="text-sm leading-relaxed text-ink-600 space-y-3">
          <p>
            <strong className="text-ink-800">Reading the matrix:</strong> If BTC
            reaches $150K and the market assigns a 1.5x mNAV multiple (below
            Strategy&apos;s current 1.26x, which itself is below Strategy&apos;s historical
            highs above 3.0x), Metaplanet&apos;s market cap would be approximately $9.0B
            with an implied share price of ~$7.10 - roughly 3.3x the current price.
            This does not factor in additional BTC accumulated through MARS, which
            would further increase NAV.
          </p>
          <p>
            <strong className="text-ink-800">The asymmetry:</strong> BTC price
            appreciation and mNAV expansion are multiplicative, not additive. A 2x
            move in BTC price combined with mNAV expanding from 1.0x to 2.0x
            produces a 4x move in market cap. This is the leverage that the
            Everything Code thesis and MARS capital structure are designed to capture.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
