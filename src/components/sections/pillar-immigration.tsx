import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";

export function PillarImmigration() {
  return (
    <SectionWrapper id="pillar-immigration" variant="muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Pillar 2
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Immigration Politically Sealed Shut
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          Japan has quietly run the largest immigration program in its history over the past decade,
          adding ~1.24 million foreign residents in five years - a 43% increase - while the native
          population collapsed. But the political backlash has arrived with force. The immigration
          escape valve is now effectively sealed by democratic mandate.
        </p>
      </div>

      {/* Foreign Residents Table */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The Stealth Migration Program (Last 10 Years)
        </h3>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Year</th>
                <th className="num">Foreign Residents</th>
                <th className="num">% of Population</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">2015</td>
                <td className="num">~2.23M</td>
                <td className="num">~1.75%</td>
              </tr>
              <tr>
                <td className="label">2020</td>
                <td className="num">2,887,116</td>
                <td className="num">~2.3%</td>
              </tr>
              <tr>
                <td className="label">2024 (Dec)</td>
                <td className="num">3,768,977</td>
                <td className="num">3.04%</td>
              </tr>
              <tr>
                <td className="label">2025 (Jun)</td>
                <td className="num">3,956,619 (+5.0% YoY)</td>
                <td className="num">-</td>
              </tr>
              <tr className="highlight">
                <td className="label">2025 (Dec)</td>
                <td className="num">4,125,395 (+9.5% YoY)</td>
                <td className="num">3.36%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">Key flow data (2024):</strong> 177,000 new long-term
            and permanent immigrants (+8.6% YoY), with 63% classified as labor migrants. The
            government issued 167K student permits, 102K temporary/seasonal labor permits, and
            165K trainee permits.
          </p>
          <p>
            <strong className="text-ink-800">Top source countries (2025):</strong> China 22.8%,
            Vietnam 16.7%, South Korea 10.4%, Nepal 6.9% (+17.2% growth), Indonesia (+15.4% growth).
          </p>
          <p>
            <strong className="text-ink-800">The scale of the gap:</strong> Japan would need ~6.74
            million foreign workers by 2040 (4x the 2020 level) just to hit 1.24% GDP growth. The
            projected labor shortage exceeds 11 million workers by 2040.
          </p>
        </div>
      </div>

      {/* 2025 Political Inflection */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The 2025 Political Inflection Point
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Sanseito Seats" value="14" sublabel="Of 124 contested (Upper House)" accent />
          <StatCard label="National Vote" value="12.6%" sublabel="3rd highest of any party" />
          <StatCard label="NHK Poll" value="79%" sublabel="Support stronger measures" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              July 2025 Upper House Election
            </h4>
            <ul className="space-y-2 text-sm text-ink-600">
              <li>
                <strong>Sanseito</strong> (&quot;Japanese First&quot; far-right populist party) won
                14 of 124 contested seats with 12.6% of the national vote - the 3rd highest of any
                party.
              </li>
              <li>
                Gained <strong>5.6 million additional proportional votes</strong> from 2022 to 2025.
              </li>
              <li>
                Called for limiting foreign residents to a maximum of 5% in each municipality.
              </li>
            </ul>
          </div>

          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Public Opinion (Late 2025)
            </h4>
            <ul className="space-y-2 text-sm text-ink-600">
              <li>
                <strong>NHK poll:</strong> 79% support &quot;stronger administrative measures
                against foreigners&quot;
              </li>
              <li>
                <strong>Asahi Shimbun (Nov 2025):</strong> 56% believe Japan needs fewer
                visitors/immigrants; 66% back PM Takaichi&apos;s tougher stance
              </li>
              <li>
                <strong>Yomiuri Shimbun (Dec 2025):</strong> 59% oppose foreign laborers
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Government Response */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Government Response
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">Coalition shift:</strong> Takaichi dissolved the
            LDP-Komeito alliance and formed a new coalition with Ishin no Kai (conservative),
            moving the governing center rightward on immigration.
          </p>
          <p>
            <strong className="text-ink-800">May 2025:</strong> Launched the &quot;Zero Illegal
            Immigrants Plan for the Safety and Security of the People.&quot;
          </p>
          <p>
            <strong className="text-ink-800">July 2025:</strong> Cabinet Secretariat established the
            &quot;Office for a Society of Well-Ordered and Harmonious Coexistence with Foreign
            Nationals.&quot;
          </p>
          <p>
            <strong className="text-ink-800">FY26 budget:</strong> Single-entry visa fees proposed
            to rise from ¥3,000 to ¥15,000 (a 5x increase).
          </p>
          <p>
            <strong className="text-ink-800">New requirements:</strong> Japanese language proficiency
            test proposed for permanent residency.
          </p>
          <p>
            <strong className="text-ink-800">Enforcement:</strong> Deportations at government expense
            doubled in June-August 2025.
          </p>
        </div>

        <Callout>
          Every LDP move toward immigration liberalization now bleeds votes to Sanseito. Takaichi
          governs from the right on this issue with 60%+ approval. This eliminates immigration as a
          solution to demographic pressure. The escape valve is politically sealed.
        </Callout>
      </div>
    </SectionWrapper>
  );
}
