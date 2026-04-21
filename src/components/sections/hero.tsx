import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <SectionWrapper id="hero" variant="hero" className="min-h-[85vh] flex items-center">
      <div className="flex flex-col justify-center">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ink-400 mb-6">
          Investment Thesis
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white max-w-4xl">
          Japan as the Purest Everything Code Case Study
        </h1>

        <div className="mt-4 h-px w-16 bg-accent" />

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-300 max-w-4xl">
          Bitcoin is the hardest monetary asset ever created - finite, decentralizing,
          and hardening on a fixed schedule while central banks globally are forced into
          permanent currency debasement. Japan has closed every escape valve except
          monetary debasement. Metaplanet sits at the exact intersection of Bitcoin's
          absolute scarcity and Japan's structural capital migration.
        </p>

        <p className="mt-6 font-serif text-xl md:text-2xl italic text-accent/90 max-w-2xl">
          One of the most asymmetric macro setups of the decade.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-ink-400">
          <div>
            <span className="text-ink-500 font-medium">Last Updated</span>{" "}
            <span className="text-ink-300">{SITE.lastUpdated}</span>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
