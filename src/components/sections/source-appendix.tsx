import { SectionWrapper } from "@/components/ui/section-wrapper";

const SOURCE_CATEGORIES = [
  {
    title: "Framework Attribution",
    sources: [
      { label: "Raoul Pal - The Everything Code (Global Macro Investor)", url: "https://www.globalmacroinvestor.com" },
      { label: "Real Vision - Macro Research & Financial Media", url: "https://www.realvision.com" },
      { label: "Raoul Pal on X (primary Everything Code discussion)", url: "https://x.com/RaoulGMI" },
      { label: "The Exponential Age - Real Vision Show Series", url: "https://www.realvision.com/shows/the-exponential-age" },
      { label: "The Fourth Paradigm Shift: Metaverse 2.0 (Real Vision)", url: "https://www.realvision.com/shows/the-exponential-age/videos/the-fourth-paradigm-shift-metaverse-2-0-drgE" },
      { label: "Resource Abundance Will Transform Macro and Human Life (Real Vision)", url: "https://www.realvision.com/shows/the-exponential-age/videos/resource-abundance-will-transform-macro-and-human-life-vx3r" },
      { label: "A Framework for the Future: Identifying Tech's Trailblazers (Real Vision)", url: "https://www.realvision.com/shows/the-exponential-age/videos/a-framework-for-the-future-identifying-techs-trailblazers-EL2O" },
    ],
  },
  {
    title: "Bitcoin - Protocol & Supply",
    sources: [
      { label: "Bitcoin Whitepaper - Satoshi Nakamoto (2008)", url: "https://bitcoin.org/bitcoin.pdf" },
      { label: "River - Can Bitcoin's Hard Cap Be Changed?", url: "https://river.com/learn/can-bitcoins-hard-cap-of-21-million-be-changed/" },
      { label: "Blockchain.com - Total Circulating Bitcoin", url: "https://www.blockchain.com/charts/total-bitcoins" },
      { label: "CoinDesk - Bitcoin Halving Cycle Halfway Point (Apr 2026)", url: "https://www.coindesk.com/markets/2026/04/14/bitcoin-passes-halfway-point-in-halving-cycle-as-price-gains-trail-prior-cycles" },
      { label: "World Gold Council - How Much Gold Has Been Mined", url: "https://www.gold.org/goldhub/data/how-much-gold" },
      { label: "USGS - Gold Mineral Commodity Summary 2025", url: "https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-gold.pdf" },
      { label: "Bitbo - Bitcoin Stock-to-Flow Chart", url: "https://charts.bitbo.io/stock-to-flow/" },
      { label: "CNBC - Bitcoin Completes Fourth Halving (Apr 2024)", url: "https://www.cnbc.com/2024/04/19/bitcoin-network-completes-fourth-ever-halving-of-rewards-to-miners.html" },
    ],
  },
  {
    title: "Bitcoin - Nation-State & Institutional Adoption",
    sources: [
      { label: "White House - Strategic Bitcoin Reserve Executive Order (Mar 2025)", url: "https://www.whitehouse.gov/fact-sheets/2025/03/fact-sheet-president-donald-j-trump-establishes-the-strategic-bitcoin-reserve-and-u-s-digital-asset-stockpile/" },
      { label: "Congress.gov - BITCOIN Act S.954 (2025)", url: "https://www.congress.gov/bill/119th-congress/senate-bill/954" },
      { label: "BitcoinLaws.io - State Legislation Tracker", url: "https://www.bitcoinlaws.io/" },
      { label: "SEC - Approval of Spot Bitcoin ETPs (Jan 2024)", url: "https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023" },
      { label: "Fortune - BlackRock IBIT Fastest to $70B AUM", url: "https://fortune.com/crypto/2025/06/09/blackrock-bitcoin-etf-fastest-70-billion/" },
      { label: "CoinGlass - Bitcoin ETF Fund Flows", url: "https://www.coinglass.com/etf/bitcoin" },
      { label: "BlackRock/iShares - Bitcoin Volatility Trends", url: "https://www.ishares.com/us/insights/bitcoin-volatility-trends" },
      { label: "Fidelity Digital Assets - Bitcoin Volatility", url: "https://www.fidelitydigitalassets.com/research-and-insights/closer-look-bitcoins-volatility" },
      { label: "NYDIG - Charting Drawdowns During Up Cycles", url: "https://www.nydig.com/research/charting-drawdowns-during-up-cycles" },
    ],
  },
  {
    title: "Japan - Demographics",
    sources: [
      { label: "Nippon.com - 2025 Full Year Births (Feb 2026)", url: "https://www.nippon.com/en/japan-data/h02717/" },
      { label: "Nikkei Asia - 10th Consecutive Record Low", url: "https://asia.nikkei.com/economy/demography/japan-s-number-of-babies-born-marks-record-low-for-10th-straight-year" },
      { label: "Macrotrends - Japan Birth Rate Historical", url: "https://www.macrotrends.net/global-metrics/countries/jpn/japan/birth-rate" },
      { label: "Macrotrends - Japan Fertility Rate Historical", url: "https://www.macrotrends.net/global-metrics/countries/jpn/japan/fertility-rate" },
    ],
  },
  {
    title: "Japan - Immigration & Politics",
    sources: [
      { label: "Japan Today - 4.13M Foreign Residents 2025", url: "https://japantoday.com/category/national/foreign-residents-in-japan-top-4-million-for-1st-time-in-2025" },
      { label: "OECD International Migration Outlook 2025 - Japan", url: "https://www.oecd.org/en/publications/2025/11/international-migration-outlook-2025_355ae9fd/full-report/japan_ccc89a8d.html" },
      { label: "The Diplomat - Beyond Sanseito", url: "https://thediplomat.com/2025/08/beyond-sanseito-anti-immigrant-rhetoric-in-japans-upper-house-election/" },
      { label: "Migration Policy Institute - Japan Profile", url: "https://www.migrationpolicy.org/country-resource/japan" },
    ],
  },
  {
    title: "Japan - Monetary Policy & Takaichi",
    sources: [
      { label: "CNBC - Real Wages Upend Abenomics", url: "https://www.cnbc.com/2025/11/07/japanese-real-wages-takaichi-abenomics-inflation-boj-policy.html" },
      { label: "CNBC - BOJ Holds Rates After Takaichi", url: "https://www.cnbc.com/2025/10/30/bank-of-japan-holds-rates-in-first-meeting-after-abenomics-proponent-takaichi-took-power.html" },
      { label: "Wolf Street - BOJ QT Accelerates Q3 2025", url: "https://wolfstreet.com/2025/10/07/bank-of-japan-balance-sheet-qt-accelerates-148-billion-in-q3-407-billion-from-peak-will-sell-etfs-reits-sold-all-bank-stocks/" },
      { label: "BOJ Monetary Policy Releases 2025", url: "https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2025/index.htm" },
      { label: "BOJ Research & Statistics (Mar 2026)", url: "https://www.boj.or.jp/en/statistics/sj/sjexp.pdf" },
    ],
  },
  {
    title: "Japan - Savings Pool & NISA",
    sources: [
      { label: "Morgan Stanley - Japan Economic Outlook 2025", url: "https://www.morganstanley.com/insights/articles/japan-economic-outlook-2025-pivotal-for-investors" },
      { label: "Japan Today - Household Assets Record 2,286T", url: "https://japantoday.com/category/business/Japan-household-assets-hit-record-%C2%A52-286-tril" },
      { label: "International Banker - Japan Savings to Investments", url: "https://internationalbanker.com/finance/japans-elusive-goal-of-savings-to-investments/" },
    ],
  },
  {
    title: "US Macro - Debt & Fiscal",
    sources: [
      { label: "FRED - Federal Debt as % of GDP", url: "https://fred.stlouisfed.org/series/GFDEGDQ188S" },
      { label: "CBO - Budget Outlook 2025-2035", url: "https://www.cbo.gov/publication/60870" },
      { label: "House Budget Committee - Interest Exceeds Defense", url: "https://budget.house.gov/press-release/interest-costs-surpass-national-defense-and-medicare-spending" },
      { label: "SSA - 2025 OASDI Trustees Report", url: "https://www.ssa.gov/oact/TR/2025/II_A_highlights.html" },
      { label: "CDC NCHS - Final Birth Data 2024", url: "https://www.cdc.gov/nchs/products/databriefs/db535.htm" },
      { label: "Federal Reserve H.4.1 Release", url: "https://www.federalreserve.gov/releases/h41/current/" },
      { label: "FRED - Fed Total Assets (WALCL)", url: "https://fred.stlouisfed.org/series/WALCL" },
      { label: "MacroMicro - Global M2 Money Supply", url: "https://en.macromicro.me/series/4675/global-money-supply-m2" },
    ],
  },
  {
    title: "Strategy - Capital Structure & Purchases",
    sources: [
      { label: "Strategy Analytics - MSTR Dashboard", url: "https://www.strategy.com/" },
      { label: "Strategy - STRC Preferred (11.50%, $8.5B)", url: "https://www.strategy.com/strc" },
      { label: "Strategy - STRK Convertible Preferred", url: "https://www.strategy.com/strk" },
      { label: "Strategy - STRF Perpetual Preferred", url: "https://www.strategy.com/strf" },
      { label: "Strategy - STRD Preferred", url: "https://www.strategy.com/strd" },
      { label: "Strategy - Convertible Debt", url: "https://www.strategy.com/debt" },
      { label: "Strategy - Bitcoin Purchase History", url: "https://www.strategy.com/purchases" },
      { label: "SEC EDGAR - Strategy Inc. (CIK 0001050446)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001050446&type=424B5&owner=include&count=20" },
    ],
  },
  {
    title: "Metaplanet - Analytics & Disclosures",
    sources: [
      { label: "Metaplanet Bitcoin Strategy Tracker", url: "https://analytics.metaplanet.jp/" },
      { label: "Metaplanet Credit Overview (MERCURY)", url: "https://analytics.metaplanet.jp/?tab=credit" },
      { label: "Metaplanet Share Metrics", url: "https://analytics.metaplanet.jp/?tab=shares" },
      { label: "Metaplanet Corporate Disclosures", url: "https://metaplanet.jp/en/disclosures" },
      { label: "Metaplanet Presentations & Keynotes", url: "https://metaplanet.jp/en/presentations" },
      { label: "Metaplanet Business Lines", url: "https://metaplanet.jp/en/business-lines" },
      { label: "Metaplanet AGM 2026 Presentation", url: "https://metaplanet.jp/media-resources/en/66c8000f-d11d-49de-be01-2b773497e3f9/Metaplanet-AGM-2026.pdf" },
      { label: "Building Japan's Bitcoin Standard Keynote (Feb 2026)", url: "https://metaplanet.jp/media-resources/en/f7d782bd-023d-4d43-a17f-1cb3b0527c33/building-japan-s-bitcoin-standard-1772046897912.pdf" },
    ],
  },
  {
    title: "Global - ECB, PBOC, BOE",
    sources: [
      { label: "ECB - Monetary Policy Decision (Feb 2026)", url: "https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260205~001d26959b.en.html" },
      { label: "CNBC - China Sweeping Easing Measures (May 2025)", url: "https://www.cnbc.com/2025/05/07/china-to-cut-key-lending-rates-by-10-points-bank-reserve-requirement-ratio-by-50-points-.html" },
      { label: "Macrotrends - China Fertility Rate", url: "https://www.macrotrends.net/global-metrics/countries/chn/china/fertility-rate" },
      { label: "Eurostat - Government Debt Euro Area Q3 2025", url: "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-22012026-ap" },
    ],
  },
];

export function SourceAppendix() {
  return (
    <SectionWrapper id="sources" variant="muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Source Appendix
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          All Citations
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-6 text-sm text-ink-500">
          All data sourced from official government agencies, central bank publications,
          corporate filings, SEC documents, and institutional research. Live data from
          strategy.com and analytics.metaplanet.jp as of April 21, 2026.
        </p>

        <div className="mt-10 space-y-8">
          {SOURCE_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3 border-b border-ink-100 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.sources.map((source) => (
                  <li key={source.url} className="text-sm">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-600 hover:text-accent transition-colors"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
