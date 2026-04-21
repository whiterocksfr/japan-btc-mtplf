import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";
import { JapanBirthsChart } from "@/components/charts/japan-births-chart";

export function PillarDemographics() {
  return (
    <SectionWrapper id="pillar-demographics" variant="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Pillar 1
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Demographic Collapse - The Forcing Function
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          Japan&apos;s demographic decline is accelerating beyond every official projection.
          The 2025 numbers confirm that the population spiral has reached a pace that
          no policy intervention can reverse on any timeline relevant to fiscal planning
          or monetary policy.
        </p>

        <Callout>
          Natural population decline of ~900K per year is irreversible on policy-relevant
          timescales. Even a fertility miracle today wouldn&apos;t affect the workforce for 20+ years.
        </Callout>
      </div>

      {/* Key 2025 Numbers */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The 2025 Numbers
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard label="2025 Births" value="705,809" sublabel="Down 15,179 YoY" accent />
          <StatCard label="Natural Decline" value="899,845" sublabel="Record high" />
          <StatCard label="Fertility Rate" value="1.20-1.37" sublabel="vs 2.1 replacement" />
          <StatCard label="Marriages" value="505,656" sublabel="Historically low" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">705,809 births in 2025</strong> - the lowest total since
            records began in 1899, and the 10th consecutive year of decline. Natural population
            decline hit a record 899,845, meaning Japan lost nearly one million more people than it
            gained through births alone. Marriages remained at historically depressed levels at 505,656,
            despite a small year-over-year bump.
          </p>
          <p>
            The fertility rate sits at approximately 1.20-1.37, ranging from 43% to 35% below the
            2.1 replacement rate needed to maintain population. The cost of raising children
            exceeds the perceived return, and the cohort of women of childbearing age is
            itself shrinking with each passing year - compounding the decline structurally.
          </p>
          <p className="mt-2 text-xs text-ink-400">
            Sources: <a href="https://www.nippon.com/en/japan-data/h02717/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Nippon.com (Feb 2026)</a>, <a href="https://asia.nikkei.com/economy/demography/japan-s-number-of-babies-born-marks-record-low-for-10th-straight-year" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Nikkei Asia</a>
          </p>
        </div>
      </div>

      {/* Historical Trajectory */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Historical Trajectory
        </h3>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Period</th>
                <th className="num">Annual Births</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">First baby boom (1947-49)</td>
                <td className="num">2,500,000</td>
              </tr>
              <tr>
                <td className="label">Second baby boom (1971-74)</td>
                <td className="num">2,000,000+</td>
              </tr>
              <tr>
                <td className="label">2007</td>
                <td className="num">Deaths exceeded births for first time</td>
              </tr>
              <tr>
                <td className="label">2022</td>
                <td className="num">Below 800,000 for first time since 1899</td>
              </tr>
              <tr>
                <td className="label">2024</td>
                <td className="num">686,061 (below 700,000 first time)</td>
              </tr>
              <tr className="highlight">
                <td className="label">2025</td>
                <td className="num">705,809 (preliminary, includes foreigners)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.macrotrends.net/global-metrics/countries/jpn/japan/birth-rate" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Macrotrends Japan Birth Rate</a>, <a href="https://www.nippon.com/en/japan-data/h02522/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Nippon.com</a>
        </p>

        <JapanBirthsChart />

        <p className="mt-6 text-sm text-ink-500">
          Note: The 2025 figure of 705,809 is preliminary and includes births to foreign residents.
          The 2024 figure of 686,061 represents Japanese nationals only. The trajectory is unambiguous
          regardless of counting methodology.
        </p>
      </div>

      {/* Why This Matters */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Why This Matters for the Thesis
        </h3>

        <div className="space-y-4">
          <ThesisPoint>
            <strong className="text-ink-800">Shrinking workforce = shrinking tax base.</strong>{" "}
            Fewer workers generating income means less revenue to service sovereign debt, fund
            social programs, and maintain infrastructure.
          </ThesisPoint>
          <ThesisPoint>
            <strong className="text-ink-800">Exploding elderly dependency = exploding social
            security obligations.</strong>{" "}
            The ratio of retirees to workers is accelerating in the wrong direction, creating
            fiscal pressure that compounds annually.
          </ThesisPoint>
          <ThesisPoint>
            <strong className="text-ink-800">Natural population decline of ~900K per year is
            irreversible on policy-relevant timescales.</strong>{" "}
            No combination of subsidies, childcare programs, or incentives can produce results
            faster than the demographic math is deteriorating.
          </ThesisPoint>
          <ThesisPoint>
            <strong className="text-ink-800">Even a fertility miracle today wouldn&apos;t affect the
            workforce for 20+ years.</strong>{" "}
            A baby born today does not enter the labor force until the mid-2040s. The fiscal
            pressure is now.
          </ThesisPoint>
        </div>

        <Callout>
          This eliminates demographic recovery as a solution. The forcing function is locked in.
          Japan must finance an expanding elderly population with a contracting tax base - and the
          only tool that scales is monetary.
        </Callout>
      </div>
    </SectionWrapper>
  );
}

function ThesisPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-ink-100 rounded-sm p-5">
      <p className="text-sm text-ink-600 leading-relaxed">{children}</p>
    </div>
  );
}
