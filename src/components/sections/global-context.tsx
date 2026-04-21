import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";

export function GlobalContext() {
  return (
    <SectionWrapper id="global-context">
      <div className="max-w-3xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          The Global Context
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Every Central Bank on the Same Path
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          Japan is not an outlier. It is the leading indicator. Every major central bank
          is converging on the same policy endpoint that the BOJ reached years ago. Japan
          simply arrived first, and shows us what the endgame looks like.
        </p>
      </div>

      {/* US-Japan Parallel */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The US-Japan Parallel: 15-20 Years Behind
        </h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>Japan</th>
                <th>United States</th>
                <th className="num">Lag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Asset bubble burst</td>
                <td>1990</td>
                <td>2008</td>
                <td className="num">18 years</td>
              </tr>
              <tr>
                <td className="label">ZIRP adopted</td>
                <td>1999</td>
                <td>2008 (sustained 2020-22)</td>
                <td className="num">~10-20 years</td>
              </tr>
              <tr>
                <td className="label">QE launched</td>
                <td>2001</td>
                <td>2008</td>
                <td className="num">7 years</td>
              </tr>
              <tr>
                <td className="label">Debt/GDP crosses 100%</td>
                <td>~1997</td>
                <td>~2020</td>
                <td className="num">~23 years</td>
              </tr>
              <tr>
                <td className="label">Fertility below replacement</td>
                <td>1975</td>
                <td>~2007-2010</td>
                <td className="num">~32 years</td>
              </tr>
              <tr>
                <td className="label">First failed QT</td>
                <td>2006 (reversed)</td>
                <td>2018-19 (reversed)</td>
                <td className="num">~12 years</td>
              </tr>
              <tr>
                <td className="label">Yield curve control</td>
                <td>2016 (explicit)</td>
                <td>Not yet (de facto?)</td>
                <td className="num">TBD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Source: Historical data compiled from <a href="https://fred.stlouisfed.org/series/GFDEGDQ188S" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">FRED</a>, <a href="https://www.cbo.gov/publication/60870" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">CBO</a>, <a href="https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2025/index.htm" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">BOJ</a>, <a href="https://www.federalreserve.gov/releases/h41/current/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Federal Reserve</a>
        </p>
      </div>

      {/* US Stats */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Where the United States Stands Today
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard label="Debt/GDP" value="~123%" sublabel="Q4 2025, gross federal" />
          <StatCard label="FY2025 Deficit" value="$1.8T" sublabel="Structural, both parties" />
          <StatCard label="Interest on Debt" value="$970B" sublabel="Exceeds defense ($917B)" />
          <StatCard label="Fertility Rate" value="1.60" sublabel="Record low, 23% below 2007" />
        </div>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            Social Security combined trust funds projected depletion: <strong className="text-ink-800">2034</strong> (2025 Trustees Report). Treasury&apos;s 75-year unfunded social insurance obligations: <strong className="text-ink-800">$88.4 trillion</strong>. Broader unfunded federal obligations exceed $175 trillion (4.8x the official national debt).
          </p>

          <p>
            The Federal Reserve expanded its balance sheet from $0.9T pre-2008 to $8.9T at peak (2022) - a 10x expansion. QT has unwound only ~25% of the peak. The pattern mirrors the BOJ exactly: announce normalization, execute partially, slow the pace, pause.
          </p>
          <p className="mt-2 text-xs text-ink-400">
            Sources: <a href="https://fred.stlouisfed.org/series/GFDEGDQ188S" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">FRED</a>, <a href="https://www.cbo.gov/publication/60870" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">CBO Budget Outlook 2025-2035</a>, <a href="https://budget.house.gov/press-release/interest-costs-surpass-national-defense-and-medicare-spending" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">House Budget Committee</a>, <a href="https://www.cdc.gov/nchs/products/databriefs/db535.htm" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">CDC NCHS Data Brief 535</a>
          </p>
        </div>
      </div>

      {/* Fed Balance Sheet */}
      <div className="max-w-5xl mx-auto mt-8">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th className="num">Fed Balance Sheet</th>
                <th>Context</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Pre-2008</td>
                <td className="num">~$0.9T</td>
                <td>Pre-crisis baseline</td>
              </tr>
              <tr>
                <td className="label">2014 (post-QE3)</td>
                <td className="num">~$4.5T</td>
                <td>First QE cycle peak</td>
              </tr>
              <tr>
                <td className="label">2022 (peak)</td>
                <td className="num">~$8.9T</td>
                <td>COVID-era QE peak</td>
              </tr>
              <tr className="highlight">
                <td className="label">April 2026</td>
                <td className="num">~$6.7T</td>
                <td>Post-QT (paused)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.federalreserve.gov/releases/h41/current/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Federal Reserve H.4.1</a>, <a href="https://fred.stlouisfed.org/series/WALCL" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">FRED WALCL</a>, <a href="https://www.statista.com/statistics/1121448/fed-balance-sheet-timeline/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Statista</a>
        </p>
      </div>

      {/* CB Convergence */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Global Central Bank Convergence
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">ECB:</strong> Main refinancing rate at 2.15%. European sovereign debt ranges from ~95% (UK) to 138% (Italy) to 151% (Greece). The ECB cannot allow Italian yields to blow out without triggering an existential eurozone crisis.
          </p>
          <p>
            <strong className="text-ink-800">PBOC:</strong> Shifted to &quot;appropriately loose&quot; stance in September 2024 - first change in 14 years. Deployed a $1.4T local government debt relief package. China&apos;s fertility rate at 1.09 (worse than Japan), population shrank by 3.39M in 2025.
          </p>
          <p>
            <strong className="text-ink-800">BOE:</strong> UK debt/GDP at ~93-95%. Same structural constraints. Same direction: easing.
          </p>
          <p>
            Every central bank that attempts tightening discovers the same thing the BOJ discovered: the debt load makes sustained real tightening impossible. The ratchet only turns one direction.
          </p>
        </div>
      </div>

      {/* Global M2 */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Global M2: The Scale Mismatch
        </h3>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <StatCard label="Global M2" value="~$100T" sublabel="And growing" />
          <StatCard label="Bitcoin Market Cap" value="~$2T" sublabel="1/50th of M2" accent />
        </div>

        <p className="text-base leading-relaxed text-ink-600">
          A 1% reallocation from global M2 = $1T (half of Bitcoin&apos;s market cap). A 2% reallocation = Bitcoin&apos;s entire current market cap. The reallocation pressure is structural and accelerating - every major central bank is in the same debasement trap. What happens in Japan today is a preview of what will happen in the US, Europe, and eventually China.
        </p>
        <p className="mt-2 text-xs text-ink-400">
          Source: <a href="https://en.macromicro.me/series/4675/global-money-supply-m2" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">MacroMicro Global M2</a>
        </p>
      </div>
    </SectionWrapper>
  );
}
