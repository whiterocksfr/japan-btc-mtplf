import { SectionWrapper } from "@/components/ui/section-wrapper";

export function RisksCatalysts() {
  return (
    <SectionWrapper id="risks-catalysts" variant="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Risk Assessment
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Risks &amp; Catalysts
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />
      </div>

      {/* Risk Scenarios */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Scenario</th>
                <th>Assessment</th>
                <th>Probability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Primary</td>
                <td>
                  <strong className="text-ink-800">Genuine BOJ hawkishness.</strong>{" "}
                  Requires sustained 4%+ inflation creating political toxicity.
                  Takaichi&apos;s stance is dovish. Debt/GDP limits rate ceiling.
                </td>
                <td>Self-limiting. BOJ cannot sustain real tightening at 260% debt/GDP without triggering budget crisis.</td>
                <td className="num">Low</td>
              </tr>
              <tr>
                <td className="label">Secondary</td>
                <td>
                  <strong className="text-ink-800">Carry trade unwind.</strong>{" "}
                  August 2024 was a preview. Leveraged yen positions unwind,
                  risk assets sell off.
                </td>
                <td>Creates drawdowns, not trend changes. Every unwind in 20 years has been followed by resumed accommodation. Entry point, not refutation.</td>
                <td className="num">Moderate</td>
              </tr>
              <tr>
                <td className="label">Tertiary</td>
                <td>
                  <strong className="text-ink-800">Takaichi loses power.</strong>{" "}
                  Currently 60%+ approval. LDP-Ishin coalition stable into 2026.
                </td>
                <td>Opposition (CDPJ + Komeitō Reform Alliance) is not monetarily hawkish either. Structural constraints override political leadership.</td>
                <td className="num">Low</td>
              </tr>
              <tr>
                <td className="label">Idiosyncratic</td>
                <td>
                  <strong className="text-ink-800">mNAV compression.</strong>{" "}
                  Other TSE-listed BTC treasury companies enter the space,
                  commoditizing the model.
                </td>
                <td>More corporate adoption validates the thesis and expands addressable capital. Scale and execution matter - Strategy&apos;s premium persisted despite US imitators.</td>
                <td className="num">Moderate</td>
              </tr>
              <tr>
                <td className="label">Idiosyncratic</td>
                <td>
                  <strong className="text-ink-800">Tax arbitrage neutralized.</strong>{" "}
                  Japan reclassifies crypto from 55% miscellaneous to 20% capital gains.
                </td>
                <td>Cuts both ways. Reduces Metaplanet&apos;s structural advantage but massively expands BTC demand from 126M Japanese retail. Net portfolio impact may be positive.</td>
                <td className="num">Moderate</td>
              </tr>
              <tr>
                <td className="label">Idiosyncratic</td>
                <td>
                  <strong className="text-ink-800">Governance / execution risk.</strong>{" "}
                  Capital raises fail or execute at unfavorable terms.
                </td>
                <td>Mitigated by current 8.1% leverage ratio (vs Strategy&apos;s 35%) and 420-year coverage multiple. Substantial headroom for execution variance.</td>
                <td className="num">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Catalysts */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-8">
          Catalysts to Watch
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bullish */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b-2 border-ink-200">
              Bullish Signals (Increase Conviction)
            </h4>
            <ul className="space-y-3">
              <CatalystItem emphasis>
                TSE approval of MARS - unlocks the non-dilutive BTC Yield engine proven by STRC at $8.5B scale
              </CatalystItem>
              <CatalystItem>
                First MARS issuance and capital deployment into BTC
              </CatalystItem>
              <CatalystItem>
                BOJ slowing QT further beyond April 2026 plan
              </CatalystItem>
              <CatalystItem>
                New supplementary budget announcements from Takaichi
              </CatalystItem>
              <CatalystItem>
                NISA inflow data acceleration (quarterly reports)
              </CatalystItem>
              <CatalystItem>
                Yen weakness through 160 without aggressive intervention
              </CatalystItem>
              <CatalystItem>
                BOJ capitulation on 2026 rate hike expectations
              </CatalystItem>
              <CatalystItem>
                Continued Sanseito polling strength (reinforces immigration ceiling)
              </CatalystItem>
              <CatalystItem>
                Additional corporate Japan BTC treasury adoptions
              </CatalystItem>
              <CatalystItem>
                Metaplanet mNAV expanding above 1.0x (currently 0.89x / 1.02x EV)
              </CatalystItem>
            </ul>
          </div>

          {/* Bearish */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b-2 border-ink-200">
              Bearish Signals (Reduce Conviction)
            </h4>
            <ul className="space-y-3">
              <CatalystItem>
                BOJ balance sheet contraction accelerating beyond 5% annualized
              </CatalystItem>
              <CatalystItem>
                Genuine BOJ forward guidance toward hawkishness
              </CatalystItem>
              <CatalystItem>
                Takaichi approval collapse on inflation concerns
              </CatalystItem>
              <CatalystItem>
                Yen strengthening through 140 sustainably
              </CatalystItem>
              <CatalystItem>
                MOF intervention to strengthen yen
              </CatalystItem>
              <CatalystItem>
                JGB market dislocation forcing emergency action
              </CatalystItem>
              <CatalystItem>
                Crypto-specific tax changes neutralizing Metaplanet&apos;s arbitrage
              </CatalystItem>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function CatalystItem({
  children,
  emphasis,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <li className="flex gap-3 items-start text-sm leading-relaxed text-ink-600">
      <span className="flex-none mt-1.5 w-1.5 h-1.5 rounded-full bg-ink-300" />
      <span className={emphasis ? "font-medium text-ink-800" : ""}>
        {children}
      </span>
    </li>
  );
}
