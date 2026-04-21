import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";

export function BitcoinFoundation() {
  return (
    <SectionWrapper id="bitcoin-foundation" variant="muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          The Foundation
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Bitcoin: The Hardest Asset Ever Created
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          Raoul Pal&apos;s Everything Code framework (Global Macro Investor / Real Vision)
          predicts capital migration out of debasing currencies
          into scarce assets. But &quot;scarce&quot; does a lot of work in that sentence. Real estate
          is scarce. Gold is scarce. Fine art is scarce. The question is: why Bitcoin above
          all of them?
        </p>

        <Callout>
          Bitcoin isn't scarce. Bitcoin is finite. That distinction is the entire foundation.
        </Callout>
      </div>

      {/* Absolute vs Relative Scarcity */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Absolute vs. Relative Scarcity
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">Gold:</strong> When prices rise, marginal mines become profitable, exploration budgets increase, and supply expands. Above-ground gold stock grows ~1.5-1.7% per year (3,672 tonnes mined in 2025 alone - a record high). Over a century, gold&apos;s supply has roughly quintupled.
          </p>
          <p>
            <strong className="text-ink-800">Real estate:</strong> When property values rise, developers build. Zoning changes. Vertical expansion adds supply on the same footprint. Land is fixed, but usable real estate is not.
          </p>
          <p>
            <strong className="text-ink-800">Equities:</strong> Companies issue shares. Stock splits happen. New IPOs expand the total supply of equity. Even individual companies can dilute at will.
          </p>
          <p>
            <strong className="text-ink-800">Bitcoin:</strong> 21,000,000. Ever. The supply cap was set on January 3, 2009 and has executed with mathematical precision for 17 years. No CEO can issue more. No board can vote to dilute. No government can mandate expansion. No miner can cheat the protocol. It has never been altered. It almost certainly never will.
          </p>
        </div>
      </div>

      {/* Stock to Flow */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Stock-to-Flow: The Scissors Opening
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-base leading-relaxed text-ink-600">
              Stock-to-flow measures existing supply divided by new annual production.
              Higher ratio equals harder money. Bitcoin is already double gold&apos;s hardness
              by this metric - and it gets harder on a fixed, immutable schedule.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Gold S2F" value="~60" sublabel="219,891t / 3,672t annual" />
            <StatCard label="Bitcoin S2F" value="~122" sublabel="20.02M / 164K annual" accent />
          </div>
          <p className="mt-2 text-xs text-ink-400">
            Sources: <a href="https://www.gold.org/goldhub/data/how-much-gold" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">World Gold Council</a>, <a href="https://charts.bitbo.io/stock-to-flow/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Bitbo Stock-to-Flow Chart</a>
          </p>
        </div>

        {/* Halving Schedule Table */}
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Halving</th>
                <th>Date</th>
                <th className="num">Block Reward</th>
                <th className="num">Daily Issuance</th>
                <th className="num">Inflation Rate</th>
                <th className="num">S2F Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">2nd</td>
                <td>July 9, 2016</td>
                <td className="num">12.5 BTC</td>
                <td className="num">~1,800</td>
                <td className="num">~4.0%</td>
                <td className="num">~25</td>
              </tr>
              <tr>
                <td className="label">3rd</td>
                <td>May 11, 2020</td>
                <td className="num">6.25 BTC</td>
                <td className="num">~900</td>
                <td className="num">~1.7%</td>
                <td className="num">~56</td>
              </tr>
              <tr className="highlight">
                <td className="label">4th (current)</td>
                <td>April 20, 2024</td>
                <td className="num">3.125 BTC</td>
                <td className="num">~450</td>
                <td className="num">~0.83%</td>
                <td className="num">~122</td>
              </tr>
              <tr>
                <td className="label">5th (est.)</td>
                <td>~April 2028</td>
                <td className="num">1.5625 BTC</td>
                <td className="num">~225</td>
                <td className="num">~0.40%</td>
                <td className="num">~250</td>
              </tr>
              <tr>
                <td className="label">6th (est.)</td>
                <td>~2032</td>
                <td className="num">0.78125 BTC</td>
                <td className="num">~113</td>
                <td className="num">~0.20%</td>
                <td className="num">~500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.swanbitcoin.com/education/bitcoin-halving-dates/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Swan Bitcoin</a>, <a href="https://www.coinwarz.com/bitcoin-halving" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">CoinWarz</a>, <a href="https://www.cnbc.com/2024/04/19/bitcoin-network-completes-fourth-ever-halving-of-rewards-to-miners.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">CNBC (April 2024)</a>
        </p>
      </div>

      {/* Game Theory */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Game Theory: The One-Way Adoption Door
        </h3>

        <div className="space-y-6">
          <AdoptionTier title="Nation-State Level">
            <ul className="space-y-2 text-sm text-ink-600">
              <li><strong>United States:</strong> Strategic Bitcoin Reserve signed March 6, 2025 (~200,000 BTC from forfeiture). BITCOIN Act (S.954) proposes 1M BTC acquisition.</li>
              <li><strong>El Salvador:</strong> First legal tender adoption (Sep 2021). Holds ~6,100-7,565 BTC.</li>
              <li><strong>Bhutan:</strong> ~12,062 BTC via hydroelectric mining (~40% of GDP).</li>
              <li><strong>US States:</strong> New Hampshire, Texas, Arizona signed Bitcoin reserve legislation.</li>
            </ul>
          </AdoptionTier>

          <AdoptionTier title="Corporate Treasury">
            <ul className="space-y-2 text-sm text-ink-600">
              <li><strong>Strategy (MSTR):</strong> 815,061 BTC (~$61.6B at cost). World's largest corporate holder.</li>
              <li><strong>Metaplanet (3350):</strong> 40,177 BTC (~$4.18B at cost). Asia's leading BTC treasury company.</li>
            </ul>
          </AdoptionTier>

          <AdoptionTier title="Institutional">
            <ul className="space-y-2 text-sm text-ink-600">
              <li><strong>BlackRock IBIT:</strong> Fastest-growing ETF in history. ~$63B cumulative inflows.</li>
              <li><strong>Total US Spot BTC ETFs:</strong> ~$55-58B across 11 products (approved Jan 10, 2024). Trading volume surpassed $2T.</li>
              <li><strong>Pension funds:</strong> Wisconsin SWIB (~$340M), Michigan pension fund entered via ARKB.</li>
            </ul>
          </AdoptionTier>
        </div>

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          The Nash equilibrium: the cost of holding 1-5% BTC and being wrong equals modest portfolio drag. The cost of holding 0% BTC and being wrong about a paradigm shift in global money equals career-defining miss, fiduciary risk, and permanent underperformance versus peers who allocated. The ratchet does not turn backward.
        </p>
        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.whitehouse.gov/fact-sheets/2025/03/fact-sheet-president-donald-j-trump-establishes-the-strategic-bitcoin-reserve-and-u-s-digital-asset-stockpile/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">White House (March 2025)</a>, <a href="https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">SEC (January 2024)</a>, <a href="https://fortune.com/crypto/2025/06/09/blackrock-bitcoin-etf-fastest-70-billion/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Fortune</a>, <a href="https://www.congress.gov/bill/119th-congress/senate-bill/954" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Congress.gov</a>
        </p>
      </div>

      {/* Volatility Compression */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Volatility Compression Across Cycles
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Annualized Realized Volatility
            </h4>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th className="num">Vol</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="label">2012</td><td className="num">&gt;200%</td></tr>
                <tr><td className="label">2020</td><td className="num">~80%</td></tr>
                <tr><td className="label">2024</td><td className="num">~50%</td></tr>
                <tr className="highlight"><td className="label">2025</td><td className="num">~42-50%</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Bear Market Drawdowns
            </h4>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cycle</th>
                  <th className="num">Peak-to-Trough</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="label">2011</td><td className="num">-93%</td></tr>
                <tr><td className="label">2014-15</td><td className="num">-86%</td></tr>
                <tr><td className="label">2017-18</td><td className="num">-84%</td></tr>
                <tr className="highlight"><td className="label">2021-22</td><td className="num">-77%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.ishares.com/us/insights/bitcoin-volatility-trends" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">BlackRock/iShares</a>, <a href="https://www.fidelitydigitalassets.com/research-and-insights/closer-look-bitcoins-volatility" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Fidelity Digital Assets</a>, <a href="https://www.nydig.com/research/charting-drawdowns-during-up-cycles" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">NYDIG</a>
        </p>
      </div>

      {/* Gold Comparison */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Why Not Just Gold?
        </h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Gold</th>
                <th>Bitcoin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Supply response to price</td>
                <td>Mining increases (record 3,672t in 2025)</td>
                <td>None (protocol-enforced cap)</td>
              </tr>
              <tr>
                <td className="label">Stock-to-flow</td>
                <td className="num">~60</td>
                <td className="num">~122 (doubling every 4 years)</td>
              </tr>
              <tr>
                <td className="label">Moving $100M across border</td>
                <td>Extremely difficult, heavily regulated</td>
                <td>Trivial (minutes)</td>
              </tr>
              <tr>
                <td className="label">Verification</td>
                <td>Physical assay required; counterfeits exist</td>
                <td>Mathematical, instant, trustless</td>
              </tr>
              <tr>
                <td className="label">Settlement speed</td>
                <td>Days (physical); T+2 (paper)</td>
                <td>Minutes (on-chain); seconds (Lightning)</td>
              </tr>
              <tr>
                <td className="label">NISA access for Japanese retail</td>
                <td>Limited (no pure-play proxy)</td>
                <td>Metaplanet (TSE: 3350)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.gold.org/goldhub/data/how-much-gold" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">World Gold Council</a>, <a href="https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-gold.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">USGS Gold Mineral Commodity Summary 2025</a>
        </p>
      </div>
    </SectionWrapper>
  );
}

function AdoptionTier({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-ink-100 rounded-sm p-5">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        {title}
      </h4>
      {children}
    </div>
  );
}
