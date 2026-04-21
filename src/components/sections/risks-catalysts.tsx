import { SectionWrapper } from "@/components/ui/section-wrapper";

export function RisksCatalysts() {
  return (
    <SectionWrapper id="risks-catalysts" variant="white">
      <div className="max-w-3xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Risk Assessment
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Risks &amp; Catalysts
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />
      </div>

      {/* Risk Scenarios */}
      <div className="max-w-3xl mx-auto mt-12 space-y-8">

        {/* Primary Risk */}
        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-red-600 mb-2">
            Primary Risk
          </div>
          <h3 className="font-serif text-lg font-semibold text-ink-900 mb-3">
            Genuine BOJ Hawkishness
          </h3>
          <ul className="space-y-2 text-base leading-relaxed text-ink-600">
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Requires sustained 4%+ inflation creating political toxicity</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Even then, Takaichi&apos;s policy stance is dovish</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>High debt/GDP limits how far rates can rise before budget crisis</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span><strong className="text-ink-800">Base rate probability: Low</strong></span>
            </li>
          </ul>
        </div>

        {/* Secondary Risk */}
        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Secondary Risk
          </div>
          <h3 className="font-serif text-lg font-semibold text-ink-900 mb-3">
            Global Risk-Off / Carry Trade Unwind
          </h3>
          <ul className="space-y-2 text-base leading-relaxed text-ink-600">
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>August 2024 unwind was a preview</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Structural pin: BOJ can&apos;t normalize meaningfully without destabilizing</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Carry trade liquidity spigot stays open longer than most expect</span>
            </li>
          </ul>
        </div>

        {/* Tertiary Risk */}
        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-amber-600 mb-2">
            Tertiary Risk
          </div>
          <h3 className="font-serif text-lg font-semibold text-ink-900 mb-3">
            Takaichi Loses Power
          </h3>
          <ul className="space-y-2 text-base leading-relaxed text-ink-600">
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Currently 60%+ approval</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>LDP-Ishin coalition stable into 2026 election</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Opposition (CDPJ + Komeitō Centrist Reform Alliance) not monetarily hawkish either</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Even regime change unlikely to produce fundamentally different monetary posture given structural constraints</span>
            </li>
          </ul>
        </div>

        {/* Idiosyncratic Risks */}
        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-ink-400 mb-2">
            Idiosyncratic
          </div>
          <h3 className="font-serif text-lg font-semibold text-ink-900 mb-3">
            Metaplanet-Specific Risks
          </h3>
          <ul className="space-y-2 text-base leading-relaxed text-ink-600">
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>mNAV compression if BTC treasury model becomes commoditized (other TSE issuers entering space)</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Regulatory changes to crypto tax treatment (could cut either way - 20% lower would reduce Metaplanet&apos;s arbitrage advantage)</span>
            </li>
            <li className="flex gap-2">
              <span className="flex-none text-ink-300">-</span>
              <span>Governance/execution risk on continued capital raises at premium</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Catalysts */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-8">
          Catalysts to Watch
        </h3>

        {/* Bullish Catalysts */}
        <div className="rounded-lg border border-green-200 bg-green-50/50 p-6 mb-8">
          <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-green-700 mb-4">
            Bullish Signals (Increase Conviction)
          </div>
          <ul className="space-y-3 text-base leading-relaxed text-ink-600">
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span><strong className="text-ink-800">TSE approval of MARS</strong> (highest-conviction near-term catalyst - unlocks the non-dilutive BTC Yield engine proven by STRC at $8.5B scale)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>First MARS issuance and capital deployment into BTC (proves the model works in Japan)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>BOJ slowing QT further beyond April 2026 plan</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>New supplementary budget announcements from Takaichi</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>NISA inflow data (quarterly)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>Yen weakness through 160 without aggressive intervention</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>BOJ explicit capitulation on 2026 rate hike expectations</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>Continued Sanseito polling strength (reinforces immigration ceiling)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>Additional corporate Japan BTC treasury adoptions</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-green-300 bg-white" />
              <span>Metaplanet mNAV expanding above 1.0x (currently 0.89x market cap / 1.02x EV - near or below NAV)</span>
            </li>
          </ul>
        </div>

        {/* Bearish Signals */}
        <div className="rounded-lg border border-red-200 bg-red-50/50 p-6">
          <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-red-700 mb-4">
            Bearish Signals (Reduce Conviction / Adjust Sizing)
          </div>
          <ul className="space-y-3 text-base leading-relaxed text-ink-600">
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-red-300 bg-white" />
              <span>BOJ balance sheet contraction accelerating beyond 5% annualized</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-red-300 bg-white" />
              <span>Genuine BOJ forward guidance toward hawkishness</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-red-300 bg-white" />
              <span>Takaichi approval collapse on inflation concerns</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-red-300 bg-white" />
              <span>Yen strengthening through 140 sustainably</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-red-300 bg-white" />
              <span>MOF intervention to strengthen yen</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-red-300 bg-white" />
              <span>JGB market dislocation forcing emergency action</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-none mt-0.5 w-5 h-5 rounded border border-red-300 bg-white" />
              <span>Crypto-specific tax treatment changes that neutralize Metaplanet&apos;s arbitrage</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
