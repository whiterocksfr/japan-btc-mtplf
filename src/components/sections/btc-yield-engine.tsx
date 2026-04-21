import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";
import { BtcYieldChart } from "@/components/charts/btc-yield-chart";

export function BtcYieldEngine() {
  return (
    <SectionWrapper id="btc-yield-engine" variant="muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          The Non-Dilutive BTC Yield Engine
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          STRC in Action
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          This is the single most important mechanism in the BTC treasury company
          model, and STRC has now proven it at scale. The data from Strategy&apos;s
          purchase history demonstrates the engine.
        </p>
      </div>

      {/* 2026 Purchase History Table */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Strategy&apos;s 2026 BTC Purchases - The STRC Acceleration
        </h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th className="num">BTC Bought</th>
                <th className="num">Cost</th>
                <th className="num">Total Holdings</th>
                <th className="num">Diluted Shares</th>
                <th className="num">BTC Yield YTD</th>
                <th>8-K Filing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">1/5/2026</td>
                <td className="num">1,283</td>
                <td className="num">$116M</td>
                <td className="num">673,783</td>
                <td className="num">345,632K</td>
                <td className="num">0.0%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/bltd1697ee0df7f31c7/695bb32419f3d4640d94619b/form-8-k_01-05-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">2/2/2026</td>
                <td className="num">855</td>
                <td className="num">$75M</td>
                <td className="num">713,502</td>
                <td className="num">364,845K</td>
                <td className="num">0.3%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/blte7ee5418df528bb8/697ffb2f02f45c7e5618ccef/form-8-k_02-02-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">3/2/2026</td>
                <td className="num">3,015</td>
                <td className="num">$204M</td>
                <td className="num">720,737</td>
                <td className="num">368,154K</td>
                <td className="num">0.4%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/blta1e8189e6fc9fe35/69a51d14716ab880524425f1/form-8-k_03-02-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">3/9/2026</td>
                <td className="num">17,994</td>
                <td className="num">$1,277M</td>
                <td className="num">738,731</td>
                <td className="num">374,506K</td>
                <td className="num">1.2%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/blt2c86418156848741/69ae1f6acb63a70008936b50/form-8-k_03-09-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">3/16/2026</td>
                <td className="num">22,337</td>
                <td className="num">$1,568M</td>
                <td className="num">761,068</td>
                <td className="num">377,340K</td>
                <td className="num">3.4%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/blt8021396b97d4846e/69b7814667be9e856f70b020/form-8-k_03-16-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr>
                <td className="label">3/23/2026</td>
                <td className="num">1,031</td>
                <td className="num">$77M</td>
                <td className="num">762,099</td>
                <td className="num">377,847K</td>
                <td className="num">3.4%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/bltddc68ec67ae13dae/69c0a061e335e7ae80542071/form-8-k_03-23-2026_filing-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr className="highlight">
                <td className="label">4/6/2026</td>
                <td className="num">4,871</td>
                <td className="num">$330M</td>
                <td className="num">766,970</td>
                <td className="num">379,425K</td>
                <td className="num">3.7%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/bltfccad63f1d04ff93/69d333062c747bee51577037/form-8-k_04-06-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr className="highlight">
                <td className="label">4/13/2026</td>
                <td className="num">13,927</td>
                <td className="num">$1,001M</td>
                <td className="num">780,897</td>
                <td className="num">379,423K</td>
                <td className="num">5.6%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/blt3d42b5dfaeefd97a/69dc6fdaa22d2281611ded4f/form-8-k_04-13-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
              <tr className="highlight">
                <td className="label">4/20/2026</td>
                <td className="num">34,164</td>
                <td className="num">$2,542M</td>
                <td className="num">815,061</td>
                <td className="num">381,588K</td>
                <td className="num">9.5%</td>
                <td>
                  <a
                    href="https://assets.contentstack.io/v3/assets/bltf8d808d9b8cebd37/bltef96f8fa042d2a1c/69e59e3c4a14ca473532c6ce/form-8-k_04-20-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    8-K
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Source: <a href="https://www.strategy.com/purchases" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">strategy.com/purchases</a> (each date links to its SEC 8-K filing)
        </p>

        <BtcYieldChart />
      </div>

      {/* The Math Callout */}
      <div className="max-w-4xl mx-auto mt-12">
        <Callout>
          In the two weeks ending April 20, 2026, Strategy purchased 48,091 BTC for
          $3,543M. Diluted shares outstanding increased by just 2,163 - a 0.6% increase.
          BTC holdings increased by 6.3% in that same period - $3.5 billion in
          two weeks, documented in SEC 8-K filings, producing 6.2% BTC Yield in a
          single quarter, with 0.6% dilution.
        </Callout>
      </div>

      {/* YTD Summary */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Year-to-Date Summary (Jan 1 - Apr 20, 2026)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard label="BTC Growth" value="+21.2%" sublabel="672,500 to 815,061 (+142,561)" accent />
          <StatCard label="Share Growth" value="+10.6%" sublabel="344,897K to 381,588K" />
          <StatCard label="BTC Yield YTD" value="9.5%" sublabel="BTC grew 2x faster than shares" accent />
          <StatCard label="BTC $ Gain YTD" value="$4,972M" sublabel="64,191 BTC accreted" />
        </div>

        <p className="text-base leading-relaxed text-ink-600">
          Where did the $3.5B come from in two weeks? Not from common share issuance
          (shares barely moved). The capital came overwhelmingly from <strong className="text-ink-800">STRC
          preferred equity</strong> and debt instruments. STRC holders receive their 11.50%
          annual dividend. Common shareholders receive BTC Yield accretion. The preferred
          absorbs capital from yield-seeking investors and converts it into BTC
          accumulation - without diluting common shareholders&apos; BTC-per-share exposure.
        </p>
      </div>

      {/* The Reflexive Loop */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The Reflexive Loop (Updated with MARS Engine)
        </h3>

        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">1</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">BOJ forced to continue accommodative policy (fiscal dominance, no exit)</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">2</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Yen continues to weaken (persistent inflation, real rates deeply negative)</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">3</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Japanese savings seek non-yen assets ($7.4T cash pool mobilized, NISA as channel)</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">4</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Bitcoin yen price rises faster than BTC/USD (debasement compounding)</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">5</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Metaplanet&apos;s BTC NAV grows in yen terms, increasing coverage ratios</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-sm font-bold text-accent">6</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Stronger coverage enables MARS preferred issuances at favorable rates</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-sm font-bold text-accent">7</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1"><strong className="text-ink-800">MARS capital funds BTC accumulation WITHOUT diluting common shares</strong></span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-sm font-bold text-accent">8</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1"><strong className="text-ink-800">BTC Yield accretes to common shareholders</strong> (BTC-per-share grows)</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">9</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Rising BTC Yield attracts more common equity demand, mNAV premium expands</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">10</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Premium enables additional equity/warrant raises at favorable terms</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">11</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Each cycle increases BTC holdings, improves coverage, reduces risk of next issuance</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-none w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center font-mono text-sm font-bold text-ink-600">12</span>
            <span className="text-base leading-relaxed text-ink-600 pt-1">Return to step 1 - with a larger BTC reserve and more capital structure capacity</span>
          </li>
        </ol>

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          <strong className="text-ink-800">The critical insight:</strong> Steps 6-8 are
          the STRC-proven innovation that transforms this from a simple &quot;buy and hold
          BTC&quot; story into a compounding engine. Strategy demonstrated that preferred
          equity can fund $3.5B in BTC purchases in two weeks with 0.6% common share
          dilution, producing 9.5% BTC Yield YTD. MARS brings this engine to Japan -
          where yield-starved capital, NISA tax incentives, and structural yen
          debasement create the most favorable conditions in the world for a BTC-backed
          preferred instrument.
        </p>
      </div>
    </SectionWrapper>
  );
}
