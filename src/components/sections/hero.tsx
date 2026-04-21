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

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-300 max-w-3xl">
          Bitcoin is the hardest monetary asset ever created - finite, decentralizing,
          and hardening on a fixed schedule while central banks globally are forced into
          permanent currency debasement. Japan has closed every escape valve except
          monetary debasement. Metaplanet sits at the exact intersection of Bitcoin's
          absolute scarcity and Japan's structural capital migration.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-ink-400">
          <div>
            <span className="text-ink-500 font-medium">Last Updated</span>{" "}
            <span className="text-ink-300">{SITE.lastUpdated}</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <HeroStat label="Bitcoin S2F" value="~122" detail="2x gold's ratio" />
          <HeroStat label="Japan Cash Pool" value="$7.4T" detail="49.1% of household assets" />
          <HeroStat label="Metaplanet BTC" value="40,177" detail="+1,684% BSE return" />
          <HeroStat label="STRC Proof" value="$8.5B" detail="9.5% BTC Yield YTD" />
        </div>
      </div>
    </SectionWrapper>
  );
}

function HeroStat({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="border-t border-ink-700 pt-3">
      <div className="text-[0.625rem] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </div>
      <div className="mt-1 font-mono text-xl font-bold text-white tabular-nums">
        {value}
      </div>
      <div className="mt-0.5 text-xs text-ink-500">{detail}</div>
    </div>
  );
}
