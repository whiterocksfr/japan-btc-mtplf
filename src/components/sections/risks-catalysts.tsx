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
                  <strong className="text-ink-800">Tax arbitrage narrows (now underway).</strong>{" "}
                  Japan&apos;s Cabinet approved a FIEA amendment on April 10, 2026
                  that reclassifies 105 crypto assets as financial instruments and
                  applies a flat 20% capital-gains rate (15% national + 5% local)
                  on &quot;specified&quot; assets held on FSA-registered exchanges,
                  with a 3-year loss carryforward starting in the 2026 tax year.
                  Pending National Diet passage; effective FY2027.
                </td>
                <td>Cuts both ways and is a net positive in our view. The pure tax-rate arbitrage (55% → 20% for direct BTC) compresses, but Metaplanet&apos;s other structural advantages persist: NISA eligibility, ability to offset losses against other equities, operational business layer (BTC Income Generation, Project NOVA), and access via standard brokerage accounts for investors who would never self-custody. The reform also massively expands the addressable retail demand pool.</td>
                <td className="num">Moderate</td>
              </tr>
              <tr>
                <td className="label">Idiosyncratic</td>
                <td>
                  <strong className="text-ink-800">TOPIX exclusion / index-flow risk.</strong>{" "}
                  Japan Exchange Group opened a consultation in early April 2026
                  proposing to block or remove firms with greater than 50% of
                  assets in crypto from TOPIX and related JPX indices.
                  Metaplanet&apos;s scheduled October 2026 TOPIX inclusion would be
                  directly affected.
                </td>
                <td>Real and material: a TOPIX exclusion would cut off passive flows from index-tracking funds and pensions benchmarked to TOPIX, and could trigger forced selling by index-tracking funds already holding. Mitigants: (i) Metaplanet is publicly engaging the consultation rather than resisting it, framing Project NOVA and its operating subsidiaries as evidence the company is not a pure asset vehicle; (ii) 216,000+ Japanese shareholders have joined the cap table, giving the company direct retail support independent of index flows; (iii) the company is already in the FTSE Japan Index and FTSE All-World Index (October 2025 upgrade), which are unaffected; (iv) final JPX decision timeline unclear — consultation is open.</td>
                <td className="num">Moderate-High</td>
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
              <CatalystItem>
                FIEA crypto reclassification passing the National Diet - brings institutional-grade market rules (insider-trading ban, mandatory disclosures) and unlocks institutional crypto allocation
              </CatalystItem>
              <CatalystItem>
                20% flat tax on specified crypto assets taking effect - expands Japanese retail demand, including indirectly via BTC-linked TSE equity
              </CatalystItem>
              <CatalystItem>
                JPX dropping or softening the proposed 50%-crypto TOPIX exclusion rule, keeping Metaplanet&apos;s October 2026 TOPIX inclusion on track
              </CatalystItem>
              <CatalystItem>
                JPYC and other licensed yen-stablecoin rails scaling (Project Pax, JPYSC) - validates Metaplanet Ventures&apos; infrastructure thesis
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
                JPX finalizing the 50%-crypto TOPIX exclusion rule and applying it to block Metaplanet&apos;s October 2026 inclusion (or trigger removal from other JPX indices)
              </CatalystItem>
              <CatalystItem>
                FIEA amendment passes but with restrictive scope that excludes BTC from the &quot;specified crypto&quot; list qualifying for 20% tax treatment
              </CatalystItem>
              <CatalystItem>
                A high-profile Japanese exchange hack or enforcement action against a stablecoin issuer, triggering a political backlash that delays the tax and regulatory reforms
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
