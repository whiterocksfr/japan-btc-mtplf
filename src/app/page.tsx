import { Hero } from "@/components/sections/hero";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { EverythingCode } from "@/components/sections/everything-code";
import { BitcoinFoundation } from "@/components/sections/bitcoin-foundation";
import { GlobalContext } from "@/components/sections/global-context";
import { PillarDemographics } from "@/components/sections/pillar-demographics";
import { PillarImmigration } from "@/components/sections/pillar-immigration";
import { PillarMonetary } from "@/components/sections/pillar-monetary";
import { PillarSavings } from "@/components/sections/pillar-savings";
import { Synthesis } from "@/components/sections/synthesis";
import { MetaplanetThesis } from "@/components/sections/metaplanet-thesis";
import { CapitalStructure } from "@/components/sections/capital-structure";
import { BtcYieldEngine } from "@/components/sections/btc-yield-engine";
import { ScenarioAnalysis } from "@/components/sections/scenario-analysis";
import { RisksCatalysts } from "@/components/sections/risks-catalysts";
import { SourceAppendix } from "@/components/sections/source-appendix";
import { TocSidebar } from "@/components/layout/toc-sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SubscribeForm } from "@/components/layout/subscribe-form";
import { Disclaimer } from "@/components/layout/disclaimer";

export default function Home() {
  return (
    <>
      <TocSidebar />
      <MobileNav />
      <div className="xl:ml-52">
        <Hero />
        <ExecutiveSummary />
        <EverythingCode />
        <BitcoinFoundation />
        <GlobalContext />
        <PillarDemographics />
        <PillarImmigration />
        <PillarMonetary />
        <PillarSavings />
        <Synthesis />
        <MetaplanetThesis />
        <CapitalStructure />
        <BtcYieldEngine />
        <ScenarioAnalysis />
        <RisksCatalysts />
        <SourceAppendix />
        <SubscribeForm />
        <Disclaimer />
      </div>
    </>
  );
}
