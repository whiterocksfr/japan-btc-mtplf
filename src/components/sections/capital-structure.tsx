import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";
import { MetaplanetVsStrategyChart } from "@/components/charts/metaplanet-vs-strategy-chart";

export function CapitalStructure() {
  return (
    <SectionWrapper id="capital-structure" variant="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          The Capital Structure Engine
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Strategy&apos;s Proof of Concept
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          Strategy (NASDAQ: MSTR) did not just prove that a public company could hold
          Bitcoin. It proved that a BTC treasury company can create an <strong className="text-ink-800">entire
          ecosystem of capital instruments</strong> - common equity, convertible debt, and
          preferred stock at multiple risk profiles - all backed by a single reserve
          asset, each instrument funding further BTC accumulation in a self-reinforcing
          cycle.
        </p>
      </div>

      {/* Strategy Preferred Instruments */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Strategy&apos;s Capital Stack (April 21, 2026)
        </h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Type</th>
                <th className="num">Par</th>
                <th className="num">Div/Coupon</th>
                <th className="num">Face Value</th>
                <th className="num">Market Value</th>
                <th className="num">Price</th>
                <th className="num">Yield</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">MSTR</td>
                <td>Common equity</td>
                <td className="num">-</td>
                <td className="num">-</td>
                <td className="num">-</td>
                <td className="num">$58,265M</td>
                <td className="num">$166.95</td>
                <td className="num">-</td>
              </tr>
              <tr>
                <td className="label">STRK</td>
                <td>Convertible preferred</td>
                <td className="num">$100</td>
                <td className="num">8.00%</td>
                <td className="num">$1,402M</td>
                <td className="num">$1,069M</td>
                <td className="num">$76.21</td>
                <td className="num">10.50%</td>
              </tr>
              <tr>
                <td className="label">STRF</td>
                <td>Perpetual preferred</td>
                <td className="num">$100</td>
                <td className="num">10.00%</td>
                <td className="num">$1,284M</td>
                <td className="num">$1,287M</td>
                <td className="num">$100.26</td>
                <td className="num">9.97%</td>
              </tr>
              <tr className="highlight">
                <td className="label">STRC</td>
                <td>Preferred (income)</td>
                <td className="num">$100</td>
                <td className="num">11.50%</td>
                <td className="num">$8,537M</td>
                <td className="num">$8,487M</td>
                <td className="num">$99.42</td>
                <td className="num">11.57%</td>
              </tr>
              <tr>
                <td className="label">STRD</td>
                <td>Preferred</td>
                <td className="num">$100</td>
                <td className="num">10.00%</td>
                <td className="num">$1,402M</td>
                <td className="num">$1,082M</td>
                <td className="num">$77.18</td>
                <td className="num">12.96%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Convertible Notes */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Strategy Convertible Notes
        </h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Convertible Note</th>
                <th>Issued</th>
                <th className="num">Coupon</th>
                <th className="num">Principal</th>
                <th>Maturity</th>
                <th className="num">Conv. Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Convert 2028</td>
                <td>Sep 2024</td>
                <td className="num">0.625%</td>
                <td className="num">$1,010M</td>
                <td>Sep 2028</td>
                <td className="num">$183.19</td>
              </tr>
              <tr>
                <td className="label">Convert 2029</td>
                <td>Nov 2024</td>
                <td className="num">0.000%</td>
                <td className="num">$3,000M</td>
                <td>Dec 2029</td>
                <td className="num">$672.40</td>
              </tr>
              <tr>
                <td className="label">Convert 2030 A</td>
                <td>Mar 2024</td>
                <td className="num">0.625%</td>
                <td className="num">$800M</td>
                <td>Mar 2030</td>
                <td className="num">$149.77</td>
              </tr>
              <tr>
                <td className="label">Convert 2030 B</td>
                <td>Feb 2025</td>
                <td className="num">0.000%</td>
                <td className="num">$2,000M</td>
                <td>Mar 2030</td>
                <td className="num">$433.43</td>
              </tr>
              <tr>
                <td className="label">Convert 2031</td>
                <td>Mar 2024</td>
                <td className="num">0.875%</td>
                <td className="num">$604M</td>
                <td>Mar 2031</td>
                <td className="num">$232.72</td>
              </tr>
              <tr>
                <td className="label">Convert 2032</td>
                <td>Jun 2024</td>
                <td className="num">2.250%</td>
                <td className="num">$800M</td>
                <td>Jun 2032</td>
                <td className="num">$204.33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Aggregate Metrics */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Aggregate Capital Structure
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Total BTC" value="815,061" sublabel="$61.6B reserve value" accent />
          <StatCard label="Total Debt" value="$8,254M" sublabel="Avg coupon 0.421%" />
          <StatCard label="Total Preferred" value="$13,540M" sublabel="4 series" />
          <StatCard label="Leverage" value="35%" sublabel="(Debt + Pref) / BTC Reserve" />
          <StatCard label="Annual Obligations" value="$1,489M" sublabel="Dividends + interest" />
          <StatCard label="BTC Reserve Coverage" value="41.4 yr" sublabel="NAV / annual obligations" accent />
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th className="num">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Total BTC</td>
                <td className="num">815,061</td>
              </tr>
              <tr>
                <td className="label">BTC Reserve Value</td>
                <td className="num">$61,584M</td>
              </tr>
              <tr>
                <td className="label">Total Debt (Principal)</td>
                <td className="num">$8,254M</td>
              </tr>
              <tr>
                <td className="label">Total Preferred (Notional)</td>
                <td className="num">$13,540M</td>
              </tr>
              <tr>
                <td className="label">Total Obligations (Debt + Preferred)</td>
                <td className="num">~$21,794M</td>
              </tr>
              <tr>
                <td className="label">(Debt + Pref) / BTC Reserve</td>
                <td className="num">35%</td>
              </tr>
              <tr>
                <td className="label">Weighted Avg Debt Coupon</td>
                <td className="num">0.421%</td>
              </tr>
              <tr>
                <td className="label">Annual Dividends + Interest</td>
                <td className="num">$1,489M</td>
              </tr>
              <tr>
                <td className="label">USD Reserve (Cash for Dividends)</td>
                <td className="num">$2,250M</td>
              </tr>
              <tr className="highlight">
                <td className="label">BTC Reserve / Annual Obligations</td>
                <td className="num">41.4 years</td>
              </tr>
              <tr>
                <td className="label">USD Reserve / Annual Obligations</td>
                <td className="num">18.1 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <Callout>
          STRC alone raised $8.5B in face value in a single preferred instrument
          paying 11.50% annual dividends - backed by $61.6B in Bitcoin reserves.
          It trades at $99.42 with a Sharpe ratio of 2.62 and realized volatility
          of just 3.0% over 21 days. For context, the 3-month Treasury yields 3.7%.
          STRC pays 3x Treasuries with BTC upside and 41 years of reserve coverage.
        </Callout>
      </div>

      {/* Metaplanet MARS/MERCURY */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Metaplanet&apos;s MARS and MERCURY: The Japanese Adaptation
        </h3>

        <div className="max-w-4xl mx-auto space-y-4 text-base leading-relaxed text-ink-600 mb-8">
          <p>
            Metaplanet is adapting Strategy&apos;s full preferred equity playbook for the
            Japanese market through two distinct instruments:
          </p>
          <p>
            <strong className="text-ink-800">MARS (Metaplanet Adjustable Rate Securities) - Class A Preferred</strong> -
            the STRC equivalent. Adjustable-rate preferred with a dividend range of <strong className="text-ink-800">1% to 8%</strong>,
            designed to raise large-scale capital from yield-seeking investors and channel it
            directly into BTC accumulation without diluting common shareholders&apos;
            BTC-per-share exposure. Compared to STRC&apos;s fixed 11.50%, MARS&apos;s lower adjustable
            rate means significantly less dividend burden per dollar raised - a structural
            cost-of-capital advantage.
          </p>
          <p>
            <strong className="text-ink-800">MERCURY (Metaplanet Convertible for Return &amp; Yield) - Class B Preferred</strong> -
            the STRK equivalent. Convertible preferred at a fixed <strong className="text-ink-800">4.9% dividend</strong>,
            offering equity upside through conversion into common shares.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th className="num">Metaplanet</th>
                <th className="num">Strategy</th>
                <th className="num">Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">BTC Holdings</td>
                <td className="num">40,177</td>
                <td className="num">815,061</td>
                <td className="num">1:20</td>
              </tr>
              <tr>
                <td className="label">BTC NAV</td>
                <td className="num">$3.05B</td>
                <td className="num">$61.6B</td>
                <td className="num">1:20</td>
              </tr>
              <tr>
                <td className="label">Total Debt</td>
                <td className="num">$247M</td>
                <td className="num">$8,254M</td>
                <td className="num">1:33</td>
              </tr>
              <tr>
                <td className="label">Total Preferred</td>
                <td className="num">$148M</td>
                <td className="num">$13,540M</td>
                <td className="num">1:91</td>
              </tr>
              <tr className="highlight">
                <td className="label">Debt + Pref / BTC NAV</td>
                <td className="num">13.0%</td>
                <td className="num">35%</td>
                <td className="num">-</td>
              </tr>
              <tr>
                <td className="label">Leverage Ratio (Debt/NAV)</td>
                <td className="num">8.1%</td>
                <td className="num">~13.4%</td>
                <td className="num">-</td>
              </tr>
              <tr>
                <td className="label">Annual Pref Dividend</td>
                <td className="num">$7.26M</td>
                <td className="num">~$1,489M</td>
                <td className="num">-</td>
              </tr>
              <tr className="highlight">
                <td className="label">NAV / Annual Dividends</td>
                <td className="num">420 years</td>
                <td className="num">41.4 years</td>
                <td className="num">10x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <MetaplanetVsStrategyChart />
      </div>

      {/* MERCURY Details */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Current Preferred Details: MERCURY (Class B)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Notional" value="$148.21M" sublabel="Par value $6.28" />
          <StatCard label="Dividend Rate" value="4.90%" sublabel="Annual commitment: $7.26M" />
          <StatCard label="Coverage" value="420 yr" sublabel="BTC NAV / annual dividends" accent />
        </div>

      </div>

      {/* Bitcoin Income Generation */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Bitcoin Income Generation: Self-Funding the Dividend
        </h3>

        <div className="max-w-4xl mx-auto space-y-4 text-base leading-relaxed text-ink-600 mb-8">
          <p>
            Metaplanet operates a <strong className="text-ink-800">Bitcoin Income Generation business</strong> using
            collateral-secured Bitcoin options (covered calls) to generate recurring operating
            revenue. This business is operationally segregated from long-term BTC holdings -
            the company&apos;s long-term Bitcoin is not subject to derivative exposure and is
            intended to be held on a perpetual basis.
          </p>
          <p>
            The income generation revenue is accelerating rapidly:
          </p>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="data-table">
            <thead>
              <tr>
                <th>Quarter</th>
                <th className="num">Revenue (JPY M)</th>
                <th className="num">Revenue (~USD M)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Q4 FY2024</td>
                <td className="num">691.6</td>
                <td className="num">~$4.6</td>
              </tr>
              <tr>
                <td className="label">Q1 FY2025</td>
                <td className="num">770.3</td>
                <td className="num">~$5.1</td>
              </tr>
              <tr>
                <td className="label">Q2 FY2025</td>
                <td className="num">1,130.6</td>
                <td className="num">~$7.5</td>
              </tr>
              <tr>
                <td className="label">Q3 FY2025</td>
                <td className="num">2,438.0</td>
                <td className="num">~$16.3</td>
              </tr>
              <tr>
                <td className="label">Q4 FY2025</td>
                <td className="num">4,241.8</td>
                <td className="num">~$28.3</td>
              </tr>
              <tr className="highlight">
                <td className="label">Q1 FY2026</td>
                <td className="num">2,969.3</td>
                <td className="num">~$19.8</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="label">Trailing 12 Months</td>
                <td className="num">10,779.7</td>
                <td className="num">~$71.9</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">The dividend coverage math:</strong> Metaplanet&apos;s
            current MERCURY annual dividend commitment is $7.26M. The Bitcoin Income Generation
            business alone produced ~$71.9M in trailing twelve-month revenue. Combined with
            revenue from Bitcoin Japan Inc., Bitcoin Magazine Japan, The Bitcoin Hotel, and
            other business lines (FY2025 consolidated revenue: JPY 89.1B, FY2026 target:
            JPY 160B), Metaplanet has the potential to cover all preferred dividend obligations
            from operating cash flow across its business ecosystem - without selling any
            long-term Bitcoin holdings.
          </p>
          <p className="text-xs text-ink-400">
            Source: &quot;Notice Regarding the Q1 FY2026 Results of the Bitcoin Income Generation
            Business&quot; (Metaplanet Inc., April 2, 2026, metaplanet.jp/en/disclosures)
          </p>
        </div>
      </div>

      {/* MARS Catalyst */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          MARS (Class A) - The Thesis Accelerant
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            MARS has been approved by Metaplanet&apos;s board of directors and shareholders
            (via EGM December 2025 and AGM March 2026 resolutions) and is currently <strong className="text-ink-800">pending
            Tokyo Stock Exchange approval</strong>, expected in 2026. Once approved, MARS becomes the
            direct STRC parallel - an adjustable-rate preferred income instrument at <strong className="text-ink-800">1% to 8%
            dividend</strong> (vs STRC&apos;s fixed 11.50%), designed to raise large-scale capital and
            convert it directly into BTC accumulation without diluting common shareholders.
          </p>
          <p>
            Strategy proved with STRC that a single preferred instrument can raise $8.5B at
            scale, fund billions in BTC purchases, and produce 9.5% BTC Yield YTD with negligible
            common share dilution. MARS is designed to bring this exact engine to the Japanese
            market - at a significantly lower cost of capital. <strong className="text-ink-800">TSE approval of MARS
            is the highest-conviction near-term catalyst for this thesis.</strong>
          </p>
          <p>
            <strong className="text-ink-800">Strategic leverage headroom:</strong> At 13%
            amplification ratio vs Strategy&apos;s 35%, Metaplanet could nearly triple its capital
            structure obligations and still be less leveraged than Strategy. Every dollar raised
            buys more BTC, which expands NAV, which creates capacity for more issuance.
          </p>
          <p className="text-xs text-ink-400">
            Source: Metaplanet AGM 2026 Presentation (March 25, 2026, metaplanet.jp/en/presentations)
          </p>
        </div>
      </div>

      {/* Beyond Treasury: Project NOVA, JPYC, Bitcoin Japan */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Beyond Treasury: Building Japan&apos;s Bitcoin Infrastructure
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            Metaplanet is not just a Bitcoin treasury company. Through <strong className="text-ink-800">Project
            NOVA</strong> and its subsidiary ecosystem, the company is positioning itself as
            integral infrastructure for institutional Bitcoin and stablecoin adoption in Japan.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
              Project NOVA
            </h4>
            <p className="text-sm leading-relaxed text-ink-600">
              Metaplanet&apos;s strategic framework for driving institutional Bitcoin adoption
              in Japan. NOVA encompasses the company&apos;s broader mission to build out the
              infrastructure, education, and financial products necessary for Japan&apos;s
              transition to a Bitcoin standard - extending well beyond passive treasury
              holdings into active ecosystem development.
            </p>
          </div>

          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
              JPYC - Stablecoin Investment
            </h4>
            <p className="text-sm leading-relaxed text-ink-600">
              Metaplanet has made a strategic investment in JPYC, a Japanese yen-pegged
              stablecoin. This positions Metaplanet at the intersection of Bitcoin and
              the emerging Japanese stablecoin infrastructure - with a stated &quot;Year Zero
              2028&quot; target for broader integration of BTC and stablecoin rails in Japan.
            </p>
          </div>

          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
              Bitcoin Japan Inc. &amp; Bitcoin Magazine Japan
            </h4>
            <p className="text-sm leading-relaxed text-ink-600">
              Bitcoin Japan Inc. operates as Japan&apos;s premier Bitcoin-focused adoption entity,
              providing education, strategic guidance, and on-chain data analytics
              (bitcoin.jp). Bitcoin Magazine Japan operates under exclusive license to
              onboard one million individuals and organizations into the Bitcoin ecosystem.
              Together these subsidiaries build the demand side of the equation that
              Metaplanet&apos;s treasury and capital instruments serve.
            </p>
          </div>

          <div className="border border-ink-100 rounded-sm p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
              The Bitcoin Hotel (Royal Oak Gotanda, Tokyo)
            </h4>
            <p className="text-sm leading-relaxed text-ink-600">
              A Tokyo property being redeveloped as a shareholder gathering space and
              Bitcoin community hub. Hosts workshops, events, and programs to increase
              Bitcoin accessibility and adoption - physical infrastructure for the
              Bitcoin standard in Japan.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-ink-400">
          Sources: Metaplanet AGM 2026 Presentation, metaplanet.jp/en/business-lines,
          bitcoin.jp/en
        </p>
      </div>

      {/* 4 Structural Advantages */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Why Metaplanet&apos;s Preferred Program Is Structurally Advantaged
        </h3>

        <div className="space-y-6">
          <div className="border-l-2 border-accent pl-6">
            <div className="font-semibold text-ink-800 mb-1">1. Japanese Yield Starvation = Lower Cost of Capital</div>
            <p className="text-sm leading-relaxed text-ink-600">
              This is the structural advantage that may matter most. STRC pays 11.50% to
              attract US investors who can get 3.7% from Treasuries. MARS can pay 1-8% and
              still generate enormous demand - because Japanese investors have endured
              near-zero yields for decades. The 10Y JGB yields ~1.95%. Cash earns negative
              real returns of -2.7%. Morgan Stanley&apos;s Japan Wealth Management report projects
              that Japanese households and institutions are in the early stages of the largest
              savings-to-investment shift in a generation, driven by persistent inflation
              destroying cash purchasing power. In this environment, even a 3-5% BTC-backed
              preferred with 420 years of coverage is extraordinary. MARS can raise capital
              at roughly half the dividend cost of STRC - meaning every dollar raised
              generates less dilution of operating income and more net BTC accumulation per
              unit of preferred issued. This is a direct cost-of-capital advantage that
              Strategy cannot replicate in the US market.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="font-semibold text-ink-800 mb-1">2. Leverage Headroom</div>
            <p className="text-sm leading-relaxed text-ink-600">
              At 13% amplification ratio vs Strategy&apos;s 35%, Metaplanet has a long runway for
              capital structure expansion. Each successive preferred issuance at this coverage
              level strengthens the thesis, not dilutes it.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="font-semibold text-ink-800 mb-1">3. Yen Debasement Compounding</div>
            <p className="text-sm leading-relaxed text-ink-600">
              Strategy&apos;s obligations are denominated in USD. Metaplanet&apos;s are denominated in
              JPY. As the yen weakens, Metaplanet&apos;s BTC reserve (priced in appreciating
              BTC/JPY) grows relative to its fixed JPY obligations - the debasement itself
              makes the capital structure safer over time. This is the same dynamic that makes
              Japan the purest Everything Code case, now applied to the corporate balance sheet.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
