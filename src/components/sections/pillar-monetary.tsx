import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";

export function PillarMonetary() {
  return (
    <SectionWrapper id="pillar-monetary" variant="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Pillar 3
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Monetary Policy - Words vs Actions
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          The gap between what Japan&apos;s central bank says and what it actually does is the
          clearest window into fiscal dominance in the developed world. The BOJ speaks the language
          of normalization. Its balance sheet tells a different story entirely.
        </p>
      </div>

      {/* Takaichi's Track Record */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Takaichi&apos;s Track Record
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Rhetoric (Historical Stance)
            </h4>
            <ul className="space-y-2 text-sm text-ink-600">
              <li>Called BOJ&apos;s rate hikes &quot;stupid&quot;</li>
              <li>Longtime Abenomics apostle: loose money, fiscal spending, structural reforms</li>
              <li>During 2024 LDP leadership race, criticized BOJ&apos;s plan to raise rates</li>
              <li>As PM: favors continued loose monetary policy</li>
              <li>Characterizes current inflation as &quot;cost-push&quot; (import costs, weak yen) rather than &quot;demand-pull&quot; - justifies keeping rates low</li>
              <li>Asserted &quot;ultimate responsibility lies with the government&quot; for monetary policy</li>
              <li>Told parliament Japan has &quot;not achieved sustainable inflation&quot;</li>
            </ul>
          </div>
          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Fiscal Reality (What She&apos;s Actually Doing)
            </h4>
            <ul className="space-y-2 text-sm text-ink-600">
              <li>¥21.3T stimulus package (~$137B)</li>
              <li>¥18.3T supplementary budget with <strong>¥11.7T financed through new bond issuance</strong></li>
              <li>Subsidies for electricity/gas, gasoline tax cuts, rice vouchers, cash handouts</li>
              <li>Japan Growth Strategy Council for &quot;crisis-management investment&quot;</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-ink-100">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-2">
                Market Reaction
              </h4>
              <ul className="space-y-1 text-sm text-ink-600">
                <li>&quot;Takaichi trade&quot;: Nikkei 225 to record highs, yen past 150</li>
                <li>10Y JGB yield hit 1.950% (Dec 5, 2025) - highest since July 2007</li>
                <li>Japan economy contracted -1.8% annualized Q3 2025</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.cnbc.com/2025/11/07/japanese-real-wages-takaichi-abenomics-inflation-boj-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">CNBC</a>, <a href="https://english.news.cn/20251207/7fa184aacf1e4074a3951fddc89e55c5/c.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Xinhua</a>, <a href="https://japan.kantei.go.jp/104/statement/202511/21kaiken.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">PM&apos;s Office Japan</a>
        </p>
      </div>

      {/* BOJ SAYS vs DOES */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          What the BOJ Says vs What It Does
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              What They Say
            </h4>
            <ul className="space-y-2 text-sm text-ink-600">
              <li>Policy rate at 0.5-0.75% (highest since 1995)</li>
              <li>Tapering JGB purchases on published schedule</li>
              <li>Language about &quot;normalization&quot; and market-determined yields</li>
              <li>Governor Ueda: &quot;not behind the curve&quot;</li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Balance Sheet" value="¥695T" sublabel="$4.62T current size" accent />
              <StatCard label="BOJ QT Rate" value="3.1%" sublabel="vs Fed Year 1: 10.4%" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th className="num">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">BOJ balance sheet Q3 2025 decline</td>
                <td className="num">¥22.3T ($148B)</td>
              </tr>
              <tr>
                <td className="label">Cumulative decline from Q1 2024 peak</td>
                <td className="num">¥61.2T ($407B) / 8.1%</td>
              </tr>
              <tr className="highlight">
                <td className="label">Current balance sheet size</td>
                <td className="num">¥695T ($4.62T)</td>
              </tr>
              <tr>
                <td className="label">BOJ JGB reduction rate (Jul 2024 - May 2025, annualized)</td>
                <td className="num">3.1%</td>
              </tr>
              <tr>
                <td className="label">Fed QT rate (Year 1)</td>
                <td className="num">10.4%</td>
              </tr>
              <tr>
                <td className="label">Fed QT rate (Year 2)</td>
                <td className="num">13.7%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://wolfstreet.com/2025/10/07/bank-of-japan-balance-sheet-qt-accelerates-148-billion-in-q3-407-billion-from-peak-will-sell-etfs-reits-sold-all-bank-stocks/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Wolf Street</a>, <a href="https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2025/index.htm" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">BOJ Monetary Policy Releases 2025</a>, <a href="https://www.boj.or.jp/en/statistics/sj/sjexp.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">BOJ Statistics</a>
        </p>

        <Callout>
          The BOJ decelerated QT - halving JGB purchase reduction from ¥400B/quarter to
          ¥200B/quarter starting April 2026. Their own stated justification: &quot;to create room
          for future quantitative expansion.&quot; This is institutional language admitting it
          isn&apos;t normalization - it&apos;s creating capacity to print again.
        </Callout>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">Stealth liquidity support:</strong>{" "}The Ministry of
            Finance is conducting buy-back auctions of low-yield ultra-long JGBs - the first
            20-year JGB buy-back since September 2008, and the first 30-year JGB buy-back since
            October 2008.
          </p>
        </div>
      </div>

      {/* Fiscal Dominance Box */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The Fiscal Dominance Box
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            Takaichi is demanding BOJ compliance to keep the nominal rate below the nominal growth
            rate - a key condition for managing the debt pile via inflation. When nominal growth
            exceeds nominal rates, debt shrinks in real terms. Given the current conditions:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <StatCard label="Debt-to-GDP" value="~260%" sublabel="Highest in developed world" />
          <StatCard label="Inflation" value="41+" sublabel="Consecutive months above target" />
          <StatCard label="Real Wages" value="9+" sublabel="Consecutive months declining" />
          <StatCard label="30Y JGB Yield" value="3.50%" sublabel="40Y briefly hit 3.6%" />
        </div>

        <div className="mt-8 border border-ink-100 rounded-sm p-6 bg-white">
          <p className="text-base leading-relaxed text-ink-600">
            The central bank is caught between its inflation mandate, political pressure for loose
            policy, fiscal dominance (the government cannot afford meaningfully higher rates), and
            market reality (yields rising anyway). <strong className="text-ink-800">There is no
            mathematical path forward except continued currency debasement.</strong>
          </p>
        </div>
      </div>

      {/* Two-Step Deception */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The &quot;Two-Step Deception&quot; Pattern
        </h3>

        <p className="text-base leading-relaxed text-ink-600 mb-6">
          Raoul Pal&apos;s framework identifies a recurring pattern in how central banks manage the
          transition from tightening rhetoric to permanent accommodation:
        </p>

        <div className="space-y-4">
          <DeceptionPhase phase="1" status="complete" title="Announce Tightening">
            Calm inflation narrative with hawkish language and initial rate moves.
          </DeceptionPhase>
          <DeceptionPhase phase="2" status="complete" title="Execute at 1/3 Needed Pace">
            Tighten at a fraction of the rate required for real normalization; slow further as
            conditions tighten.
          </DeceptionPhase>
          <DeceptionPhase phase="3" status="coming" title="&quot;Temporary&quot; Reversal">
            When the next crisis hits (recession, JGB dislocation, banking stress),
            &quot;temporarily&quot; reverse course.
          </DeceptionPhase>
          <DeceptionPhase phase="4" status="coming" title="Permanent Expansion">
            The reversal becomes permanent. The balance sheet resumes expansion. The cycle resets
            at a higher base.
          </DeceptionPhase>
        </div>

        <Callout>
          The BOJ has explicitly telegraphed Phase 4 in their own statements. &quot;Creating room
          for future quantitative expansion&quot; is not the language of a central bank normalizing.
          It is the language of a central bank reloading.
        </Callout>
      </div>
    </SectionWrapper>
  );
}

function DeceptionPhase({
  phase,
  status,
  title,
  children,
}: {
  phase: string;
  status: "complete" | "coming";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex-none">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-xs font-semibold text-ink-500">
          {phase}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-serif text-base font-semibold text-ink-900">{title}</h4>
          <span className={`text-[0.625rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
            status === "complete"
              ? "bg-ink-100 text-ink-500"
              : "border border-accent text-accent"
          }`}>
            {status === "complete" ? "Complete" : "Coming"}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-ink-600">{children}</p>
      </div>
    </div>
  );
}
