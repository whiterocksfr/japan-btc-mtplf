import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Synthesis() {
  return (
    <SectionWrapper id="synthesis" variant="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          The Synthesis
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Why the Full Stack Matters
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          Each layer of this thesis reinforces every other layer. The foundation
          (Bitcoin&apos;s properties) is necessary for the framework (Everything Code)
          to have a capture mechanism. The framework is necessary for the Japan case
          to be more than an isolated curiosity. And the Japan case is necessary to
          demonstrate that the framework actually plays out in practice - with receipts.
        </p>
      </div>

      {/* Full-Stack Flow Diagram */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="space-y-0">
          {/* Step 1 */}
          <div className="rounded-t-lg border border-ink-200 bg-white p-6">
            <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-accent mb-1">
              Layer 1 - The Asset
            </div>
            <div className="font-serif text-lg font-semibold text-ink-900">
              Bitcoin
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              21M cap, S2F doubling gold&apos;s, pristine collateral, game-theoretic
              adoption ratchet across nations, institutions, and retail
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center -my-px">
            <div className="w-px h-6 bg-ink-300" />
          </div>
          <div className="flex justify-center -mt-1 mb-0">
            <svg width="12" height="8" viewBox="0 0 12 8" className="text-ink-300">
              <path d="M6 8L0 0h12z" fill="currentColor" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="border border-ink-200 bg-white p-6">
            <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-accent mb-1">
              Layer 2 - The Macro Backdrop
            </div>
            <div className="font-serif text-lg font-semibold text-ink-900">
              Global Debasement
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              Every major CB converging on permanent accommodation; US, EU, China
              all on Japan&apos;s trajectory 10-20 years behind
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center -my-px">
            <div className="w-px h-6 bg-ink-300" />
          </div>
          <div className="flex justify-center -mt-1 mb-0">
            <svg width="12" height="8" viewBox="0 0 12 8" className="text-ink-300">
              <path d="M6 8L0 0h12z" fill="currentColor" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="border border-ink-200 bg-white p-6">
            <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-accent mb-1">
              Layer 3 - Proof of Concept
            </div>
            <div className="font-serif text-lg font-semibold text-ink-900">
              Japan
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              All escape valves closed (demographics irreversible, immigration
              politically sealed, BOJ trapped in fiscal dominance)
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center -my-px">
            <div className="w-px h-6 bg-ink-300" />
          </div>
          <div className="flex justify-center -mt-1 mb-0">
            <svg width="12" height="8" viewBox="0 0 12 8" className="text-ink-300">
              <path d="M6 8L0 0h12z" fill="currentColor" />
            </svg>
          </div>

          {/* Step 4 */}
          <div className="border border-ink-200 bg-white p-6">
            <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-accent mb-1">
              Layer 4 - The Flow
            </div>
            <div className="font-serif text-lg font-semibold text-ink-900">
              Capital Mobilization
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              $7.4T forced out of cash by persistent inflation; NISA provides the
              tax-advantaged channel
            </p>
          </div>

          {/* Arrow */}
          <div className="flex justify-center -my-px">
            <div className="w-px h-6 bg-ink-300" />
          </div>
          <div className="flex justify-center -mt-1 mb-0">
            <svg width="12" height="8" viewBox="0 0 12 8" className="text-ink-300">
              <path d="M6 8L0 0h12z" fill="currentColor" />
            </svg>
          </div>

          {/* Step 5 */}
          <div className="rounded-b-lg border border-accent bg-accent/5 p-6">
            <div className="text-[0.6875rem] font-semibold uppercase tracking-wider text-accent mb-1">
              Layer 5 - The Vehicle
            </div>
            <div className="font-serif text-lg font-semibold text-ink-900">
              Metaplanet
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              Regulatory-tax-demographic arbitrage vehicle; only clean capture
              mechanism for Japanese retail BTC exposure
            </p>
          </div>
        </div>
      </div>

      {/* Concluding paragraph */}
      <div className="max-w-4xl mx-auto mt-12">
        <p className="text-base leading-relaxed text-ink-600">
          Each layer requires the one below it. Metaplanet requires the Japanese
          capital flow. The capital flow requires the closed escape valves. The
          closed escape valves require the global debasement framework to explain
          why they cannot be reopened. And the global debasement framework requires
          an asset with Bitcoin&apos;s properties - absolute scarcity, no supply
          response to price, no political override - to have somewhere for the
          flows to land.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-600">
          The thesis is not that any single pillar will drive Metaplanet&apos;s
          performance. It is that the entire stack is self-reinforcing, and Japan
          is the jurisdiction where every layer is most advanced.
        </p>
      </div>
    </SectionWrapper>
  );
}
