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

      {/* Flywheel Mechanics */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          The BTC Treasury Company Flywheel
        </h3>
        <p className="text-sm text-ink-500 mb-6">
          The single-raise scenarios above understate the thesis because they
          model one event in isolation. The real power is the flywheel - a
          self-reinforcing cycle where each capital raise enables the next.
          Understanding the mechanics requires understanding BTC Yield and how
          different instruments produce it.
        </p>

        {/* BTC Yield Definition */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          BTC Yield: The Core Metric
        </h4>
        <div className="border border-ink-100 rounded-sm p-5 bg-white mb-8">
          <p className="text-sm leading-relaxed text-ink-600">
            <strong className="text-ink-800">BTC Yield</strong> measures the percentage
            change in Bitcoin-per-share over a period. The formula:
          </p>
          <p className="mt-3 font-mono text-sm text-ink-800 bg-ink-50 px-4 py-2 rounded-sm">
            BTC Yield = (BTC/Share_end - BTC/Share_start) / BTC/Share_start
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Positive BTC Yield means each share controls more Bitcoin than before.
            The denominator uses <strong className="text-ink-800">assumed diluted
            shares</strong> - all basic shares plus all shares from assumed conversion
            of convertible notes, convertible preferred, and options. This is
            intentionally conservative (larger denominator), meaning any positive BTC
            Yield clears a high bar.
          </p>
        </div>

        {/* Two Instruments */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          How Each Instrument Produces BTC Yield
        </h4>
        <div className="space-y-4 mb-8">
          <div className="border border-ink-100 rounded-sm p-5 bg-white">
            <h5 className="text-sm font-semibold text-ink-800 mb-2">
              Preferred Equity (MARS / STRC) - Always Accretive
            </h5>
            <p className="text-sm leading-relaxed text-ink-600">
              Non-convertible preferred raises capital without issuing common shares.
              The numerator (BTC) increases while the denominator (diluted shares) stays
              flat. Every dollar raised translates directly to BTC-per-share growth.
              The cost is the annual dividend obligation - but no dilution occurs.
              This works at any mNAV level, even below 1.0x.
            </p>
          </div>
          <div className="border border-ink-100 rounded-sm p-5 bg-white">
            <h5 className="text-sm font-semibold text-ink-800 mb-2">
              Common Equity (ATM / Moving Strike Warrants) - Accretive Above 1.0x mNAV
            </h5>
            <p className="text-sm leading-relaxed text-ink-600">
              When the stock trades above BTC NAV per share (mNAV &gt; 1.0x), equity
              raises are accretive. The math: if shares trade at 1.5x NAV and the company
              raises $1B, it issues fewer shares than the BTC those proceeds purchase.
              BTC grows faster than the share count, so BTC-per-share increases despite
              dilution. The higher the mNAV premium, the more accretive each share issued.
              At mNAV = 1.0x, equity raises are neutral. Below 1.0x, they are dilutive -
              which is why Metaplanet&apos;s newer warrant series include a &ge;1.01x mNAV clause
              preventing exercise below NAV.
            </p>
          </div>
        </div>

        {/* The Flywheel Loop */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          The Flywheel Sequence
        </h4>
        <div className="space-y-3 mb-8">
          <FlywheelStep number="1" title="Preferred raise (MARS)">
            Non-dilutive capital enters. All proceeds buy BTC. BTC-per-share jumps
            immediately. Leverage ratio increases slightly but remains well within
            capacity (Metaplanet at 13% vs Strategy at 35%).
          </FlywheelStep>
          <FlywheelStep number="2" title="BTC Yield attracts capital">
            Positive BTC Yield and growing BTC reserves attract equity investors
            who want leveraged BTC exposure through the common stock. Demand pushes
            the share price higher. mNAV expands above 1.0x.
          </FlywheelStep>
          <FlywheelStep number="3" title="Equity raise at mNAV premium">
            With mNAV above 1.0x, Metaplanet exercises moving strike warrants (or
            Strategy uses ATM). Shares are sold at a premium to BTC backing.
            Proceeds buy BTC. BTC-per-share increases again despite the dilution,
            because the premium means BTC grows faster than share count.
          </FlywheelStep>
          <FlywheelStep number="4" title="Expanded NAV enables next cycle">
            The larger BTC reserve creates capacity for additional MARS issuance
            (leverage ratio resets lower after equity raise). The flywheel returns
            to Step 1, but with a larger base - making each successive cycle more
            impactful in absolute terms.
          </FlywheelStep>
        </div>

        {/* Instrument Selection */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          Instrument Selection by mNAV Level
        </h4>
        <div className="overflow-x-auto mb-8">
          <table className="data-table">
            <thead>
              <tr>
                <th>mNAV Level</th>
                <th>Primary Instrument</th>
                <th>Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">&gt; 2.0x</td>
                <td>Aggressive equity issuance + preferred</td>
                <td>Maximum BTC Yield per share issued. Premium is large enough that each share sold funds far more BTC than the dilution costs.</td>
              </tr>
              <tr>
                <td className="label">1.0x - 2.0x</td>
                <td>Moderate equity + preferred</td>
                <td>Equity issuance still accretive but lower quality. Preferred supplements to maintain BTC Yield momentum.</td>
              </tr>
              <tr className="highlight">
                <td className="label">&lt; 1.0x</td>
                <td>Preferred only</td>
                <td>Equity issuance would be dilutive (selling shares below BTC backing). Preferred still produces positive BTC Yield because the denominator doesn&apos;t change. This is the &quot;expensive fuel&quot; - it always works but loads fixed dividend costs.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* What Strategy Proved */}
        <div className="space-y-3 text-sm leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">What Strategy proved:</strong> Strategy
            operated this flywheel across multiple mNAV regimes. When mNAV was above
            2.0x (late 2024-early 2025), they aggressively issued common equity via ATM,
            producing BTC Yield of 74.3% in 2024. When mNAV compressed toward 1.0x in
            late 2025, they pivoted to preferred (STRC/STRF/STRD), maintaining positive
            BTC Yield through non-dilutive raises. The result across both regimes:
            815,061 BTC, 9.5% BTC Yield YTD in 2026, $61.6B in reserves.
          </p>
          <p>
            <strong className="text-ink-800">Metaplanet&apos;s equivalent:</strong> Metaplanet
            uses moving strike warrants (stock acquisition rights, through the 27th
            series) as its equity instrument - the Japanese corporate law equivalent
            of an ATM program. These warrants are issued to a counterparty (EVO Fund)
            with exercise prices that reset to recent trading levels. Newer series
            include a &ge;1.01x mNAV floor, preventing exercise when the stock trades
            below BTC NAV. MARS (pending TSE approval) will serve as the preferred
            instrument - the non-dilutive fuel that works at any mNAV level.
          </p>
          <p>
            <strong className="text-ink-800">The compounding asymmetry:</strong> Preferred
            raises carry zero dilution. Equity raises at mNAV premium produce
            accretion that exceeds dilution. The combination means BTC holdings can
            grow substantially faster than the share count. Metaplanet&apos;s 2025 results
            demonstrate this: BTC grew from 1,762 to 35,102 (+1,893%) while diluted
            shares grew from 453M to 1.46B (+222%). BTC growth outpaced share growth
            by roughly 8:1, producing massive BTC Yield across every quarter.
          </p>
        </div>

        <p className="mt-4 text-xs text-ink-400">
          Sources: <a href="https://www.strategy.com/notes" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">strategy.com/notes</a> (BTC Yield definition), <a href="https://www.strategy.com/shares" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">strategy.com/shares</a> (diluted share calculation), <a href="https://analytics.metaplanet.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">analytics.metaplanet.jp</a> (Metaplanet metrics)
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

function FlywheelStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-none mt-0.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-800 text-[0.625rem] font-bold text-white">
          {number}
        </div>
      </div>
      <div>
        <span className="font-semibold text-ink-800 text-sm">{title}.</span>{" "}
        <span className="text-sm leading-relaxed text-ink-600">{children}</span>
      </div>
    </div>
  );
}
