import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ExecutiveSummary() {
  return (
    <SectionWrapper id="executive-summary" narrow>
      <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
        Executive Summary
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
        Three Layers, One Thesis
      </h2>
      <div className="mt-2 h-px w-12 bg-accent" />

      <div className="mt-8 border border-ink-100 rounded-sm p-5 bg-ink-50/50">
        <p className="text-sm leading-relaxed text-ink-600">
          This thesis is built on{" "}
          <strong className="text-ink-800">The Everything Code</strong>, a macro
          framework developed by{" "}
          <a
            href="https://www.realvision.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline"
          >
            Raoul Pal
          </a>
          , founder of{" "}
          <a
            href="https://www.globalmacroinvestor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline"
          >
            Global Macro Investor
          </a>{" "}
          (GMI) and co-founder of{" "}
          <a
            href="https://www.realvision.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline"
          >
            Real Vision
          </a>
          . The Everything Code posits that when sovereign debt passes a critical
          threshold, central banks are structurally forced into permanent currency
          debasement - and that scarce assets, particularly Bitcoin, capture the
          resulting capital flows. The analysis below applies this framework to Japan
          as the most advanced case study and to Metaplanet as its optimal capture vehicle.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <Layer
          number="1"
          title="The Asset"
          description="Bitcoin is the first monetary asset in human history with absolute, mathematically enforced scarcity. Its supply issuance rate (0.83% annually post-2024 halving) is already less than half of gold's, and it halves again in 2028. Every four years, new Bitcoin supply gets cut in half while central bank balance sheets expand. These two lines are diverging on a fixed, predictable schedule - and the divergence is accelerating."
        />

        <Layer
          number="2"
          title="The Global Backdrop"
          description="Every major central bank is converging on the same policy endpoint: permanent accommodation. The US (debt/GDP ~123%, $970B annual interest payments exceeding defense spending, fertility at 1.60), Europe (ECB easing, Italy at 138% debt/GDP), and China (fertility 1.09, $1.4T stimulus packages) are all on Japan's trajectory - just 10-20 years behind. This is not a Japan-specific phenomenon. It is a structural feature of late-stage sovereign debt economies. Japan simply arrived first."
        />

        <Layer
          number="3"
          title="The Purest Expression"
          description="Japan has closed every escape valve except monetary debasement. Demographics can't recover (705K births, lowest since 1899). Immigration is politically sealed (79% public support for restrictions, Sanseito at 12.6% national vote). The BOJ is executing QT at one-third the Fed's pace and already slowing further - explicitly to 'create room for future quantitative expansion.' Meanwhile, $7.4T in Japanese household cash is losing ~$200B+ in purchasing power annually to persistent inflation. Metaplanet (TSE: 3350) is the only TSE-listed, pure-play Bitcoin treasury company available to Japanese investors - with favorable tax treatment (20% vs 55% for direct crypto), NISA eligibility, and a capital structure engine designed to compound BTC-per-share without dilution."
        />
      </div>
    </SectionWrapper>
  );
}

function Layer({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-none">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-xs font-semibold text-ink-500">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-serif text-xl font-semibold text-ink-900">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-ink-600">
          {description}
        </p>
      </div>
    </div>
  );
}
