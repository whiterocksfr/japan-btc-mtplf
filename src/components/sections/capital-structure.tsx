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
            Metaplanet operates a <strong className="text-ink-800">Bitcoin Income Generation business</strong>{" "}using
            collateral-secured Bitcoin options (cash-secured puts) to generate recurring operating
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
            <strong className="text-ink-800">The dividend coverage math:</strong>{" "}Metaplanet&apos;s
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
            <strong className="text-ink-800">Strategic leverage headroom:</strong>{" "}At 13%
            amplification ratio vs Strategy&apos;s 35%, Metaplanet could nearly triple its capital
            structure obligations and still be less leveraged than Strategy. Every dollar raised
            buys more BTC, which expands NAV, which creates capacity for more issuance.
          </p>
          <p className="text-xs text-ink-400">
            Source: Metaplanet AGM 2026 Presentation (March 25, 2026, metaplanet.jp/en/presentations)
          </p>
        </div>
      </div>

      {/* Moving Strike Warrants: Stock Acquisition Rights Program */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Moving Strike Warrants: The Stock Acquisition Rights Program
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600 mb-8">
          <p>
            Moving-strike warrants - structured in Japan as &quot;Stock Acquisition
            Rights with Exercise Price Adjustment Clause&quot; - are Metaplanet&apos;s
            equity engine. They are the Japanese corporate-law equivalent of a US
            at-the-market (ATM) program: the company allots a fixed maximum pool of
            warrants to a counterparty (EVO FUND), the exercise price resets to
            recent market price on a defined cadence, and the counterparty exercises
            in tranches and immediately resells into the market as hedging permits.
            Each exercise pays the exercise price × number of shares into the company,
            which is then used to buy Bitcoin (or, in recent issues, to redeem
            paired bonds that already bought the Bitcoin).
          </p>
          <p>
            Across twelve months the program has evolved from a basic 3%-discount
            ATM into one of the most shareholder-aligned warrant structures ever
            issued on the TSE: no discount, then a premium, then a governance-gated
            mNAV floor. The current 27th Series - announced March 16, 2026 and the
            first warrant globally with a hard-coded &ldquo;exercise only when mNAV
            &ge; 1.01x&rdquo; clause - was described by CEO Simon Gerovich as a
            &quot;first-of-its-kind&quot; structure on X.
          </p>
        </div>

        {/* Structural Evolution */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          Structural Evolution (12th → 27th Series)
        </h4>
        <div className="overflow-x-auto mb-4">
          <table className="data-table">
            <thead>
              <tr>
                <th>Series</th>
                <th>Issued</th>
                <th className="num">Max Shares</th>
                <th className="num">Initial Strike</th>
                <th className="num">Adj. Mechanism</th>
                <th className="num">Floor</th>
                <th>Key Innovation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">12th</td>
                <td>Nov 28, 2024</td>
                <td className="num">2,900,000</td>
                <td className="num">&yen;3,288</td>
                <td className="num">97% × 11-day VWAP (3% disc)</td>
                <td className="num">&yen;1,500</td>
                <td>First modern MS warrant; 6-month window</td>
              </tr>
              <tr>
                <td className="label">13th-17th</td>
                <td>Jan 28, 2025</td>
                <td className="num">21,000,000</td>
                <td className="num">&yen;5,555</td>
                <td className="num">100% × prior-day close (no disc)</td>
                <td className="num">&yen;2,555</td>
                <td>&quot;21 Million Plan&quot;; 5-tranche split; exercise suspension clause; 2-year window</td>
              </tr>
              <tr>
                <td className="label">18th</td>
                <td>Apr 11, 2025</td>
                <td className="num">-</td>
                <td className="num">-</td>
                <td className="num">-</td>
                <td className="num">-</td>
                <td>Paid stock options to directors/officers (incentive, not fundraise)</td>
              </tr>
              <tr>
                <td className="label">19th</td>
                <td>May 26, 2025</td>
                <td className="num">3,600,000</td>
                <td className="num">-</td>
                <td className="num">Fixed (~&yen;255/unit issue price)</td>
                <td className="num">-</td>
                <td>Paid stock options to external collaborators: <strong className="text-ink-800">Eric Trump &amp; David Bailey</strong> (~&yen;382M notional)</td>
              </tr>
              <tr>
                <td className="label">20th-22nd</td>
                <td>Jun 6, 2025</td>
                <td className="num">555,000,000</td>
                <td className="num">&yen;1,388</td>
                <td className="num">100% / 101% / 102% × 3-day avg</td>
                <td className="num">&yen;777</td>
                <td>&quot;555 Million Plan&quot;; 3-tranche; first series with <strong className="text-ink-800">premium adjustment</strong> (101%/102%)</td>
              </tr>
              <tr>
                <td className="label">23rd-24th</td>
                <td>Dec 8, 2025</td>
                <td className="num">210,000,000</td>
                <td className="num">(market)</td>
                <td className="num">Adj + suspension clauses</td>
                <td className="num">(set)</td>
                <td>Acquisition &amp; cancellation of 20th-22nd + replacement issuance (market restructuring)</td>
              </tr>
              <tr>
                <td className="label">25th</td>
                <td>Feb 13, 2026</td>
                <td className="num">(shares)</td>
                <td className="num">(market)</td>
                <td className="num">Bundled with new common shares</td>
                <td className="num">-</td>
                <td>New shares + SAR via third-party allotment (direct share issuance)</td>
              </tr>
              <tr>
                <td className="label">26th</td>
                <td>Mar 31, 2026</td>
                <td className="num">(shares)</td>
                <td className="num">(market)</td>
                <td className="num">Bundled with new common shares</td>
                <td className="num">-</td>
                <td>New shares + SAR via third-party allotment</td>
              </tr>
              <tr className="highlight">
                <td className="label">27th</td>
                <td>Apr 1, 2026</td>
                <td className="num">100,000,000</td>
                <td className="num">(market)</td>
                <td className="num">Adj + <strong className="text-ink-800">mNAV &ge; 1.01x</strong> + Floor adj + Suspension</td>
                <td className="num">(floor-adj)</td>
                <td><strong className="text-ink-800">First-of-its-kind mNAV clause</strong>: exercise only permitted when stock trades above 1.01x mNAV. Suspension of 23rd/24th simultaneously. ~$234M estimated raise.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-400 mb-8">
          Source: each series&apos; &quot;Notice Regarding Issuance of the Nth Series of
          Stock Acquisition Rights&quot; filed by Metaplanet Inc., and the
          companion &quot;Notice Regarding Completion of Payment&quot; disclosures.
          Pre-Bitcoin-treasury warrants (9th, Feb 2023, &yen;20 strike, &yen;1.35B raise,
          originally for WEB3/Metaverse) and the 11th Series gratis allotment (Sep
          2024, &yen;555 strike to all shareholders, &yen;10.05B raise) are not shown
          here because they predate the moving-strike template.
        </p>

        {/* The Two Plans */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          The Two Named Plans
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border-l-2 border-ink-200 pl-4 py-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              21 Million Plan
            </div>
            <div className="mt-1 font-serif text-lg font-semibold text-ink-900">
              13th-17th Series (Jan-May 2025)
            </div>
            <p className="mt-2 text-sm text-ink-600">
              210M potential shares, ¥5,555 initial strike at 37.67% premium over
              market, no discount on adjustments, ¥2,555 floor. Full exercise
              completed <strong className="text-ink-800">May 19, 2025</strong> - three
              months into a two-year window. Share price rose from ¥416 on
              announcement (Jan 28) to ¥783 at full exercise (May 20), a 88% move.
              Total capital raised: roughly &yen;93.3B. Target: 21,000 BTC by end of
              2026 (later revised upward under the 555 plan).
            </p>
          </div>
          <div className="border-l-2 border-accent pl-4 py-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              555 Million Plan
            </div>
            <div className="mt-1 font-serif text-lg font-semibold text-ink-900">
              20th-22nd Series (Jun 2025 onward)
            </div>
            <p className="mt-2 text-sm text-ink-600">
              555M potential shares - 2.6x the 21 Million Plan. ¥1,388 initial strike
              at 1.83% premium over market. Adjustment at 100/101/102% of 3-day
              average (21st/22nd are <em>premium</em> - no discount, and positive
              spread). ¥777 floor. Target: <strong className="text-ink-800">100,000
              BTC by end of 2026, 210,000 BTC by end of 2027</strong> - 1% of the
              total 21M Bitcoin supply. Expected proceeds at initial strike: roughly
              &yen;767B (~$4.8B at current FX). The plan gives its name to the
              555M-per-class authorized share count approved for MARS/MERCURY at the
              December 2025 EGM.
            </p>
          </div>
        </div>

        {/* 27th Series: The mNAV Clause */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          27th Series: The mNAV Clause (The Big Innovation)
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <StatCard label="Units Issued" value="1,000,000" sublabel="100M potential shares" accent />
          <StatCard label="mNAV Floor" value="≥ 1.01x" sublabel="Exercise only above NAV" accent />
          <StatCard label="Estimated Raise" value="~$234M" sublabel="Per Gerovich/X" />
          <StatCard label="Payment Complete" value="Apr 1, 2026" sublabel="Effective immediately" />
        </div>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            The 27th Series is the most important structural advance in the
            Japanese-language warrant market since moving-strike instruments became
            common. It combines four clauses that together solve the central
            complaint against moving-strike warrants - that they can dilute
            shareholders below NAV in a falling market:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-ink-800">mNAV Clause:</strong>{" "}The allottee
              cannot exercise unless Metaplanet&apos;s market cap is 1.01x or more of
              Bitcoin NAV. If the stock trades below NAV, the warrants are frozen.
            </li>
            <li>
              <strong className="text-ink-800">Floor Exercise Price Adjustment
              Clause:</strong>{" "}The minimum exercise price itself can be adjusted,
              preventing the lower-bound from becoming a dilutive trap if BTC NAV
              rises faster than the stock price.
            </li>
            <li>
              <strong className="text-ink-800">Exercise Suspension Clause:</strong>{" "}
              Metaplanet can unilaterally halt exercise at any time with a short
              notice period (inherited from the 13th-series template).
            </li>
            <li>
              <strong className="text-ink-800">Exercise Price Adjustment
              Clause:</strong>{" "}The daily reset mechanism that keeps the strike
              close to market price, preventing stale pricing.
            </li>
          </ul>
          <p>
            The practical effect: warrants can only fund BTC accumulation when doing
            so is <em>accretive</em> to BTC-per-share. When the stock trades below
            NAV, no new shares are issued and existing shareholders are not diluted.
            When the stock trades above NAV, every exercise increases BTC-per-share
            because the warrant issues shares above BTC-per-share book value. This
            is the Japanese-law implementation of Strategy&apos;s informal
            &quot;accretive ATM&quot; rule, but hard-coded into the warrant
            contract rather than left to managerial discretion.
          </p>
          <p>
            When the 27th Series was issued, Metaplanet simultaneously suspended
            exercise of the 23rd and 24th Series (which lack the mNAV clause),
            effectively migrating the active warrant pool onto the new template.
            The 20th Series ordinary bond issued April 24, 2026 is paired against
            27th-Series exercise proceeds, closing the bond-warrant bridge loop with
            the mNAV-gated template.
          </p>
          <p className="text-xs text-ink-400">
            Source: Metaplanet IR, &quot;Notice Regarding the Issuance of the 27th
            Series of Stock Acquisition Rights with Exercise Price Adjustment Clause,
            mNAV Clause, Floor Exercise Price Adjustment Clause, and Exercise
            Suspension Clause&quot; (March 16, 2026); payment completion April 1,
            2026. Simon Gerovich on{" "}
            <a
              href="https://x.com/gerovich"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-600"
            >
              X
            </a>{" "}
            (&quot;first-of-its-kind mNAV clause&quot;).
          </p>
        </div>
      </div>

      {/* EVO Bridge: Zero-Coupon Ordinary Bond Program */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The EVO Bridge: Zero-Coupon Ordinary Bond Program
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600 mb-8">
          <p>
            Alongside its preferred stack, Metaplanet runs a revolving ordinary bond
            program with a single counterparty - <strong className="text-ink-800">EVO FUND</strong>,
            the same Cayman-based fund that subscribes to the company&apos;s moving-strike
            warrants (stock acquisition rights). Over 20 series across three years the
            program has evolved from small secured borrowings into the company&apos;s core
            BTC-acquisition bridge: zero-coupon, unsecured, and paired one-for-one with
            warrant exercises. Every disclosure and every PDF is filed on{" "}
            <a
              href="https://metaplanet.jp/en/disclosures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              metaplanet.jp/en/disclosures
            </a>.
          </p>
        </div>

        {/* Era Summary */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          Three Structural Eras
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border-l-2 border-ink-200 pl-4 py-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Era 1 · Pre-Treasury
            </div>
            <div className="mt-1 font-serif text-lg font-semibold text-ink-900">
              Series 1 (Apr 2023)
            </div>
            <p className="mt-2 text-sm text-ink-600">
              A single &yen;200M unsecured private placement at 1.0% coupon, issued
              before Metaplanet adopted Bitcoin as treasury. Early-redeemed Oct 4, 2023.
            </p>
          </div>
          <div className="border-l-2 border-ink-200 pl-4 py-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Era 2 · Guaranteed
            </div>
            <div className="mt-1 font-serif text-lg font-semibold text-ink-900">
              Series 2-3 (Jun-Nov 2024)
            </div>
            <p className="mt-2 text-sm text-ink-600">
              &yen;2.75B combined, 0.36-0.50% coupon, personally guaranteed by CEO
              Simon Gerovich with a first-priority mortgage on Hotel Royal Oak Gotanda
              (owned by subsidiary Wen Tokyo K.K.). First BTC-purpose bonds.
            </p>
          </div>
          <div className="border-l-2 border-accent pl-4 py-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">
              Era 3 · Zero-Coupon Bridge
            </div>
            <div className="mt-1 font-serif text-lg font-semibold text-ink-900">
              Series 4-20 (Dec 2024 - Apr 2026)
            </div>
            <p className="mt-2 text-sm text-ink-600">
              0% coupon, unsecured, unguaranteed. Every series paired with a specific
              warrant program; auto-redeemed as EVO exercises warrants. Series 19 (&yen;30B)
              explicitly refinanced out the last guaranteed bond and removed the Hotel
              Gotanda mortgage.
            </p>
          </div>
        </div>

        {/* Mechanics */}
        <div className="space-y-4 text-base leading-relaxed text-ink-600 mb-8">
          <p>The modern Era 3 mechanics:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-ink-800">Zero interest, unsecured, unguaranteed.</strong>{" "}
              Every series from #4 onward has been issued at par, with no coupon, no
              collateral, and no guarantor. The only return to EVO is the right to
              redeem at par.
            </li>
            <li>
              <strong className="text-ink-800">Six-month to one-year stated maturity, typically redeemed in weeks.</strong>{" "}
              Each series contains an auto-redemption clause: whenever cumulative
              proceeds EVO pays into a paired warrant program reach an integer multiple
              of the bond&apos;s face value, Metaplanet redeems the matching portion at par
              on the next trading day.
            </li>
            <li>
              <strong className="text-ink-800">Proceeds allocated 100% to Bitcoin.</strong>{" "}
              Every series&apos; use-of-proceeds notice directs funds to immediate BTC
              accumulation.
            </li>
            <li>
              <strong className="text-ink-800">Clause evolution.</strong> Series 4-15 each
              named specific paired SAR series. Starting with series 16 (May 28, 2025)
              the redemption trigger was generalized to &quot;any future fundraising in
              which the Bondholder is the allottee,&quot; which is the template used for
              the 20th series today.
            </li>
            <li>
              <strong className="text-ink-800">Multi-currency.</strong> Series 1-10 were
              JPY-denominated. Series 11, 13-18 were issued in USD (for a combined
              $352M), coinciding with Metaplanet&apos;s dollar-denominated BTC purchasing.
              Series 19 and 20 returned to JPY.
            </li>
          </ul>
        </div>

        {/* Full Program History */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          Complete Series History (1-20)
        </h4>
        <div className="overflow-x-auto mb-4">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Issued</th>
                <th className="num">Amount</th>
                <th className="num">Face/Bond</th>
                <th className="num">Coupon</th>
                <th>Maturity</th>
                <th>Structure / Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">1</td>
                <td>Apr 12, 2023</td>
                <td className="num">&yen;200M</td>
                <td className="num">&yen;5M</td>
                <td className="num">1.00%</td>
                <td>Apr 11, 2025</td>
                <td>Unsecured private placement; early-redeemed Oct 4, 2023</td>
              </tr>
              <tr>
                <td className="label">2</td>
                <td>Jun 26, 2024</td>
                <td className="num">&yen;1,000M</td>
                <td className="num">&yen;50M</td>
                <td className="num">0.50%</td>
                <td>Jun 25, 2025</td>
                <td>Guaranteed (CEO + Hotel Gotanda mortgage)</td>
              </tr>
              <tr>
                <td className="label">3</td>
                <td>Nov 18, 2024</td>
                <td className="num">&yen;1,750M</td>
                <td className="num">&yen;43.75M</td>
                <td className="num">0.36%</td>
                <td>Nov 17, 2025</td>
                <td>Guaranteed; bought back &amp; cancelled Jun 30, 2025</td>
              </tr>
              <tr>
                <td className="label">4</td>
                <td>Dec 17, 2024</td>
                <td className="num">&yen;4,500M</td>
                <td className="num">&yen;250M</td>
                <td className="num">0.00%</td>
                <td>Jun 16, 2025</td>
                <td>First unsecured zero-coupon; paired with 12th SAR</td>
              </tr>
              <tr>
                <td className="label">5</td>
                <td>Dec 20, 2024</td>
                <td className="num">&yen;5,000M</td>
                <td className="num">&yen;250M</td>
                <td className="num">0.00%</td>
                <td>Jun 16, 2025</td>
                <td>12th SAR pair</td>
              </tr>
              <tr>
                <td className="label">6</td>
                <td>Feb 13, 2025</td>
                <td className="num">&yen;4,000M</td>
                <td className="num">&yen;250M</td>
                <td className="num">0.00%</td>
                <td>Aug 12, 2025</td>
                <td>13th-17th SARs; full early redemption Feb 21, 2025</td>
              </tr>
              <tr>
                <td className="label">7</td>
                <td>Feb 27, 2025</td>
                <td className="num">&yen;2,000M</td>
                <td className="num">&yen;50M</td>
                <td className="num">0.00%</td>
                <td>Aug 26, 2025</td>
                <td>13th-17th SARs</td>
              </tr>
              <tr>
                <td className="label">8</td>
                <td>Mar 12, 2025</td>
                <td className="num">&yen;2,000M</td>
                <td className="num">&yen;50M</td>
                <td className="num">0.00%</td>
                <td>Sep 11, 2025</td>
                <td>14th-17th SARs; early redeemed Mar 26, 2025</td>
              </tr>
              <tr>
                <td className="label">9</td>
                <td>Mar 18, 2025</td>
                <td className="num">&yen;2,000M</td>
                <td className="num">&yen;50M</td>
                <td className="num">0.00%</td>
                <td>Sep 17, 2025</td>
                <td>14th-17th SARs; early redeemed Apr 7, 2025</td>
              </tr>
              <tr>
                <td className="label">10</td>
                <td>Mar 31, 2025</td>
                <td className="num">&yen;2,000M</td>
                <td className="num">&yen;50M</td>
                <td className="num">0.00%</td>
                <td>Sep 30, 2025</td>
                <td>14th-17th SARs; early redeemed May 2, 2025</td>
              </tr>
              <tr>
                <td className="label">11</td>
                <td>Apr 15, 2025</td>
                <td className="num">$10M</td>
                <td className="num">$250K</td>
                <td className="num">0.00%</td>
                <td>Oct 14, 2025</td>
                <td>First USD bond; early redeemed May 2, 2025</td>
              </tr>
              <tr>
                <td className="label">12</td>
                <td>May 2, 2025</td>
                <td className="num">&yen;3,600M</td>
                <td className="num">&yen;90M</td>
                <td className="num">0.00%</td>
                <td>Oct 31, 2025</td>
                <td>15th-17th SARs; early redeemed May 9, 2025</td>
              </tr>
              <tr>
                <td className="label">13</td>
                <td>May 7, 2025</td>
                <td className="num">$25M</td>
                <td className="num">$625K</td>
                <td className="num">0.00%</td>
                <td>Nov 6, 2025</td>
                <td>15th-17th SARs; early redeemed May 13, 2025</td>
              </tr>
              <tr>
                <td className="label">14</td>
                <td>May 8, 2025</td>
                <td className="num">$21.25M</td>
                <td className="num">$625K</td>
                <td className="num">0.00%</td>
                <td>Nov 7, 2025</td>
                <td>15th-16th SARs; early redeemed May 15, 2025</td>
              </tr>
              <tr>
                <td className="label">15</td>
                <td>May 13, 2025</td>
                <td className="num">$15M</td>
                <td className="num">$375K</td>
                <td className="num">0.00%</td>
                <td>Nov 12, 2025</td>
                <td>15th-16th SARs; early redeemed May 20, 2025</td>
              </tr>
              <tr>
                <td className="label">16</td>
                <td>May 28, 2025</td>
                <td className="num">$50M</td>
                <td className="num">$1.25M</td>
                <td className="num">0.00%</td>
                <td>Nov 27, 2025</td>
                <td>Generalized trigger; redeemed Jun 25, 2025</td>
              </tr>
              <tr>
                <td className="label">17</td>
                <td>May 29, 2025</td>
                <td className="num">$21M</td>
                <td className="num">$525K</td>
                <td className="num">0.00%</td>
                <td>Nov 28, 2025</td>
                <td>Generalized trigger; redeemed Jun 25, 2025</td>
              </tr>
              <tr>
                <td className="label">18</td>
                <td>Jun 16, 2025</td>
                <td className="num">$210M</td>
                <td className="num">$5M</td>
                <td className="num">0.00%</td>
                <td>Dec 12, 2025</td>
                <td>Largest single issue; redeemed Jun 25, 2025</td>
              </tr>
              <tr>
                <td className="label">19</td>
                <td>Jun 30, 2025</td>
                <td className="num">&yen;30,000M</td>
                <td className="num">&yen;750M</td>
                <td className="num">0.00%</td>
                <td>Dec 29, 2025</td>
                <td>Financed 3rd-series buyback; paired with 20th-22nd SARs; fully redeemed Dec 29, 2025</td>
              </tr>
              <tr className="highlight">
                <td className="label">20</td>
                <td>Apr 24, 2026</td>
                <td className="num">&yen;8,000M</td>
                <td className="num">&yen;200M</td>
                <td className="num">0.00%</td>
                <td>Apr 23, 2027</td>
                <td>Outstanding; paired with 27th SAR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-400 mb-8">
          Source: each series&apos; &quot;Notice Regarding the Issuance of the Nth Series of
          Ordinary Bonds,&quot; filed by Metaplanet Inc. on the corresponding payment
          date. Full PDF archive at{" "}
          <a
            href="https://metaplanet.jp/en/disclosures"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink-600"
          >
            metaplanet.jp/en/disclosures
          </a>.
        </p>

        {/* Series 19 Callout */}
        <Callout>
          <strong className="text-ink-800">The 19th series was the transition.</strong>{" "}
          On June 30, 2025 Metaplanet issued &yen;30B in zero-coupon unsecured bonds and
          used part of the proceeds to buy back and cancel the 3rd series - the last
          remaining guaranteed bond. In Metaplanet&apos;s own words: &quot;the Company has
          agreed to refinance the 3rd Bonds, which bear interest and are secured by
          collateral, with the New Bonds, which are non-interest-bearing and unsecured.&quot;
          That single filing retired the CEO&apos;s personal guarantee and the
          first-priority mortgage on Hotel Royal Oak Gotanda. From that day forward the
          entire Metaplanet debt stack has been unsecured, unguaranteed, and zero coupon.
        </Callout>

        {/* 20th Series Mechanics */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3 mt-10">
          20th Series: The Live Bridge to the 27th Warrant
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <StatCard label="Bond Principal" value="¥8.0B" sublabel="~$50M, 0% coupon" accent />
          <StatCard label="Maturity" value="Apr 23, 2027" sublabel="1 year, redeemable early" />
          <StatCard label="Bondholder" value="EVO FUND" sublabel="Same entity as 27th SAR" />
          <StatCard label="Use of Proceeds" value="100% BTC" sublabel="Front-loaded purchase" />
        </div>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            On <strong className="text-ink-800">April 24, 2026</strong> Metaplanet issued its
            20th series of ordinary bonds (JPY 8.0 billion, zero coupon, face value
            &yen;200M per bond) to EVO FUND, with proceeds directed to Bitcoin. On the
            same day the company revised the use of proceeds on the{" "}
            <strong className="text-ink-800">27th Series Stock Acquisition Rights</strong>{" "}
            (&yen;37.135B headline raise, issued March 16, 2026) - carving out &yen;8.0B
            specifically to redeem the new bond as warrant exercises arrive.
          </p>
          <p>
            <strong className="text-ink-800">Net BTC allocation before the change:</strong>{" "}
            &yen;33.4B from the 27th SAR plus &yen;131.8B from the 23rd/24th SARs = &yen;165.2B
            total warrant-funded BTC purchasing capacity.{" "}
            <strong className="text-ink-800">After the change:</strong>{" "}&yen;25.4B (27th) +
            &yen;123.8B (23rd/24th after a parallel adjustment) + &yen;8.0B (20th bond, already
            deployed into BTC) ={" "}
            <strong className="text-ink-800">
              &yen;157.2B warrant capacity plus &yen;8.0B of BTC already purchased up-front
            </strong>
            . Same total dollar capacity, different timing - BTC that would have been
            accumulated over April 2026-April 2028 is instead accumulated today.
          </p>
          <p>
            This is the bond program&apos;s real function. In a market where Bitcoin can
            move 30% in six weeks, the ability to deploy warrant-backed capital
            <em> before </em>the warrants are exercised is a timing option worth owning.
            The zero coupon means the option has no carrying cost, and the auto-redemption
            clause means the program cannot accidentally build permanent debt - every yen
            raised through the bond must be retired by a matching yen raised through the
            warrant it is paired with.
          </p>
          <p>
            <strong className="text-ink-800">Track record:</strong>{" "}Nineteen prior series,
            nineteen full redemptions on or ahead of schedule. Series 16-18 alone (issued
            May-June 2025, combined $281M in USD face value) were all retired at par by
            June 25, 2025 as the paired warrant exercises delivered. Series 19 (&yen;30B)
            redeemed on schedule Dec 29, 2025. In aggregate the program has already
            cycled roughly &yen;66B + $352M of BTC-directed capital through EVO without a
            single missed redemption.
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
            Beyond its treasury operations, Metaplanet is building institutional
            Bitcoin and stablecoin infrastructure in Japan. Through <strong className="text-ink-800">Project
            NOVA</strong> and its subsidiary ecosystem, the company is positioning itself as
            a central platform for Japan&apos;s digital asset adoption.
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
              Metaplanet Ventures K.K. & JPYC Investment
            </h4>
            <p className="text-sm leading-relaxed text-ink-600">
              On March 12, 2026 Metaplanet established{" "}
              <strong className="text-ink-800">Metaplanet Ventures K.K.</strong>, a
              wholly-owned subsidiary capitalized at approximately &yen;4 billion
              (~$27M) and mandated to deploy into regulated Bitcoin and digital-asset
              infrastructure in Japan over a 2-3 year horizon. Its inaugural
              investment was a participation in the{" "}
              <strong className="text-ink-800">JPYC Series B</strong> round (total
              round ~$30M / &yen;2.6B, closed Mar 2026). JPYC Inc. is the issuer of{" "}
              <strong className="text-ink-800">JPYC</strong> - Japan&apos;s first
              FSA-approved yen-pegged stablecoin, launched October 2025, classified
              as an Electronic Payment Instrument under the revised Payment Services
              Act, fully reserved in yen deposits and JGBs, and live on Ethereum,
              Avalanche and Polygon. The venture arm also runs an incubator for
              early-stage BTC infrastructure startups and a grants program for
              open-source developers.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              The broader yen-stablecoin market is moving in parallel:{" "}
              <strong className="text-ink-800">JPYSC</strong> (SBI Holdings +
              Startale, trust-bank backed via SBI Shinsei) targets a Q2 2026 launch,
              and <strong className="text-ink-800">Project Pax</strong> (MUFG, SMBC,
              Mizuho) has announced a target of &yen;1 trillion in B2B stablecoin
              issuance by 2028. The thesis from Metaplanet&apos;s side: when Japan&apos;s
              FIEA amendment takes effect (FY2027), domestic Bitcoin adoption will
              require custody, settlement, compliance and payment-rail
              infrastructure that does not yet exist at scale - and Metaplanet
              Ventures wants to own a piece of the layer that gets built.
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

      {/* Japan Regulatory Environment */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Japan&apos;s Regulatory Environment (April 2026)
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600 mb-8">
          <p>
            Japan is in the middle of the largest overhaul of its digital-asset
            regulatory regime since the post-Mt. Gox Payment Services Act (PSA) of
            2017. Three pieces move in parallel: reclassification of crypto as
            financial instruments under FIEA, a flat 20% capital-gains tax for
            specified crypto assets, and a licensed yen-stablecoin framework. One
            piece moves in the opposite direction - a JPX consultation that could
            block Metaplanet&apos;s October 2026 TOPIX inclusion. We treat all four as
            material to the thesis.
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="data-table">
            <thead>
              <tr>
                <th>Reform</th>
                <th>Status</th>
                <th>Effective</th>
                <th>Thesis impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">FIEA crypto reclassification</td>
                <td>
                  Cabinet-approved April 10, 2026. Bill submitted to National Diet.
                  Applies to 105 crypto assets including BTC, ETH, XRP.
                  Adds insider-trading ban, annual disclosure requirements,
                  renames exchanges as &quot;crypto asset trading operators,&quot;
                  raises unregistered-operation penalties to 10 years prison /
                  &yen;10M fine.
                </td>
                <td>FY2027 (April 2027+) if ratified</td>
                <td>Structurally positive. Brings institutional-grade market rules, which is a precondition for most Japanese institutional capital to allocate.</td>
              </tr>
              <tr>
                <td className="label">20% flat tax on specified crypto</td>
                <td>
                  Included in the 2026 Tax Reform package. 15% national + 5% local.
                  Applies to specified assets on FSA-registered exchanges.
                  3-year loss carryforward starting 2026 tax year. NFTs, DeFi yield,
                  unlisted tokens remain miscellaneous income.
                </td>
                <td>2026 tax year (transactions); full framework with FIEA</td>
                <td>Mixed for Metaplanet. Narrows the pure tax-rate arbitrage vs direct BTC (55% → 20%), but massively expands the addressable retail pool - most of which will still prefer a TSE-listed vehicle with NISA eligibility, stock-category loss offsetting, and a standard brokerage account over self-custody.</td>
              </tr>
              <tr>
                <td className="label">Licensed yen-stablecoin framework</td>
                <td>
                  Payment Services Act revised June 2023 to classify fiat-pegged
                  stablecoins as Electronic Payment Instruments. JPYC launched
                  October 2025 as the first FSA-approved yen stablecoin (100%
                  reserves, Ethereum/Avalanche/Polygon). JPYSC (SBI/Startale,
                  trust-bank-backed) targeting Q2 2026. Project Pax (MUFG, SMBC,
                  Mizuho) targets &yen;1T B2B issuance by 2028.
                </td>
                <td>Live now, scaling through 2028</td>
                <td>Direct play via Metaplanet Ventures K.K.&apos;s participation in the JPYC Series B. Positions Metaplanet in the infrastructure layer that Japanese institutional BTC adoption will run on top of.</td>
              </tr>
              <tr className="highlight">
                <td className="label">JPX TOPIX consultation (risk)</td>
                <td>
                  Japan Exchange Group opened consultation early April 2026
                  proposing to block or remove firms with more than 50% of assets
                  in crypto from TOPIX and related JPX indices. Metaplanet&apos;s
                  October 2026 TOPIX inclusion would be directly affected.
                  CEO Gerovich responded April 5, 2026: &quot;we respect the process
                  and intend to engage&quot; - emphasizing Project NOVA, operating
                  subsidiaries, and the 216,000+ Japanese shareholder base as
                  evidence Metaplanet is not a pure passive crypto vehicle.
                </td>
                <td>Consultation open; no final decision timeline</td>
                <td>Material downside risk: a final rule excluding Metaplanet from TOPIX would cut off passive index flows and could trigger forced selling. Does not affect FTSE Japan Index / FTSE All-World inclusion (in place since October 2025).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-400">
          Sources: Japan Cabinet Office FIEA amendment (April 10, 2026); PwC Japan{" "}
          <a
            href="https://www.pwc.com/jp/en/taxnews-financial-services.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink-600"
          >
            Financial Services Tax News - 2026 Tax Reform Proposals
          </a>
          ; JPX consultation materials; CoinDesk, Finance Magnates, Bitcoin Magazine
          (April 2026 coverage); Metaplanet IR statement (April 5, 2026).
        </p>
      </div>

      {/* Institutional Demand */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          Institutional Demand: Who Is Buying and Who Will Buy
        </h3>
        <p className="text-sm text-ink-500 mb-8">
          MERCURY was placed privately with institutional investors in December 2025.
          The buyer profile and the scale of Japan&apos;s institutional capital pool
          reveal the potential demand trajectory for both MERCURY and MARS.
        </p>

        {/* MERCURY Buyers */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          Confirmed MERCURY Investors (December 2025 Placement)
        </h4>
        <div className="overflow-x-auto mb-6">
          <table className="data-table">
            <thead>
              <tr>
                <th>Investor</th>
                <th>Profile</th>
                <th className="num">Firm AUM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">SMALLCAP World Fund (Capital Group)</td>
                <td>$2.9T global asset manager. Also holds 11.45% Metaplanet common equity (~$500M) via Capital Research and Management</td>
                <td className="num">$81.6B fund</td>
              </tr>
              <tr>
                <td className="label">Anson Funds Management</td>
                <td>Toronto/Dallas alternative asset manager. Multi-strategy: long/short, special situations, event-driven. Named Multi-Strategy Fund of the Year, HedgeWeek Americas 2024</td>
                <td className="num">$2B+</td>
              </tr>
              <tr>
                <td className="label">Ghisallo Capital Management</td>
                <td>Boston-based hedge fund. Founded by Michael Germino (former Head of Trading, Soros Fund Management). Multi-asset global macro. Expanded to Hong Kong</td>
                <td className="num">$3.4B</td>
              </tr>
              <tr>
                <td className="label">Nautical Funding Ltd.</td>
                <td>Offshore investment vehicle</td>
                <td className="num">Undisclosed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed text-ink-600 mb-2">
          The placement was arranged by <strong className="text-ink-800">Goldman Sachs Japan</strong> and <strong className="text-ink-800">Cantor Fitzgerald</strong>. Total raised: &yen;21.25B (~$151M) at 4.9% fixed dividend. The caliber of these participants - Capital Group ($2.9T AUM), a Soros-pedigreed macro fund with an Asia expansion, and Goldman Sachs as arranger - signals that institutional-grade capital views Metaplanet&apos;s preferred instruments as credible, investable, and appropriately structured.
        </p>
        <p className="text-xs text-ink-400 mb-8">
          Sources: Yahoo Finance, Coinpedia, TipRanks (December 2025 filings)
        </p>

        {/* Common Equity Holders */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
          Major Common Equity Holders (Context)
        </h4>
        <p className="text-sm leading-relaxed text-ink-600 mb-4">
          The interest extends beyond preferred shares. Metaplanet&apos;s common equity shareholder base includes <strong className="text-ink-800">Capital Group</strong> (11.45% stake, ~$500M - a deliberate institutional position from a $2.9T asset manager), significant US retail demand through Fidelity brokerage accounts (12.9% custodial position via National Financial Services), and index exposure through Vanguard and iShares. Capital Group&apos;s position is particularly notable because they are also a MERCURY preferred investor through their SMALLCAP World Fund - a dual common/preferred holder with deep conviction.
        </p>

        {/* TAM */}
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3 mt-10">
          Total Addressable Market: Japanese Institutional Capital
        </h4>
        <p className="text-sm leading-relaxed text-ink-600 mb-6">
          The MERCURY placement was $151M. The addressable pool of institutional
          capital in Japan that could participate in future MERCURY and MARS
          offerings is measured in trillions, not millions.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="data-table">
            <thead>
              <tr>
                <th>Institutional Segment</th>
                <th className="num">AUM / Assets</th>
                <th>Yield-Seeking Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Life Insurance Companies</td>
                <td className="num">~$2.7T</td>
                <td>Actively seeking higher-yield credit and alternatives. AAA holdings declining from 73% to 68% of portfolios (2019-2023) - moving down the credit spectrum</td>
              </tr>
              <tr>
                <td className="label">GPIF (Gov&apos;t Pension)</td>
                <td className="num">$1.87T</td>
                <td>World&apos;s largest pension fund. Building alternatives database. Over 90% of Japanese institutional investors now incorporate alternatives</td>
              </tr>
              <tr>
                <td className="label">Total Pension Reserves</td>
                <td className="num">~$3.2T</td>
                <td>Corporate DB and DC pensions exploring alternative yield sources</td>
              </tr>
              <tr>
                <td className="label">Megabanks (MUFG, SMFG, Mizuho)</td>
                <td className="num">~$6.5T+</td>
                <td>Cautiously seeking higher-yielding opportunities beyond JGBs</td>
              </tr>
              <tr>
                <td className="label">Regional Banks (~100)</td>
                <td className="num">~$3.2T</td>
                <td>Historically JGB-heavy; seeking diversification as yields normalize</td>
              </tr>
              <tr className="highlight">
                <td className="label">Total Japanese Institutional</td>
                <td className="num">$10T+</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-ink-400 mb-8">
          Sources: <a href="https://www.seiho.or.jp/english/statistics/trend/pdf/2024.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Life Insurance Association of Japan Fact Book 2024</a>, <a href="https://www.gpif.go.jp/en/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">GPIF</a>, <a href="https://www.rieti.go.jp/en/columns/s24_0017.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">RIETI</a>, <a href="https://www.aima.org/article/golden-opportunities-in-japan-a-new-era-for-global-asset-managers.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">AIMA</a>, company filings
        </p>

        {/* The Demand Thesis */}
        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <a href="https://www.morganstanley.com/insights/articles/japan-economic-outlook-2025-pivotal-for-investors" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Morgan Stanley&apos;s Japan research</a> identifies
            specific behavioral shifts across each institutional category that
            create demand for exactly the kind of instrument MARS and MERCURY
            represent:
          </p>
        </div>

        <div className="mt-4 space-y-3 mb-8">
          <div className="border border-ink-100 rounded-sm p-4">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1">Life Insurance Companies ($2.7T)</h5>
            <p className="text-sm leading-relaxed text-ink-600">
              Seeking higher-yield products, specifically credit and alternative
              investments, to deploy cash efficiently in the new positive-rate
              environment. A 4.9% MERCURY or 1-8% MARS preferred, backed by
              Bitcoin with hundreds of years of coverage, fits the exact product
              profile these firms are hunting - structured credit with yield
              significantly above JGBs.
            </p>
          </div>
          <div className="border border-ink-100 rounded-sm p-4">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1">Depository Institutions ($9.7T combined)</h5>
            <p className="text-sm leading-relaxed text-ink-600">
              With positive interest rates, bond investment is a lower priority
              as banks earn sufficient income from core lending. Surplus capital
              previously parked in JGBs is looking for deployment. BTC-backed
              preferred securities offer yield without the duration risk of
              long-dated government bonds.
            </p>
          </div>
          <div className="border border-ink-100 rounded-sm p-4">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-1">Investment Trusts (Growing Household Demand)</h5>
            <p className="text-sm leading-relaxed text-ink-600">
              The growing weight of household investors entering markets through
              NISA is driving demand for diversified products, particularly
              those with exposure to non-yen assets. Metaplanet&apos;s common stock
              serves this directly - a TSE-listed, NISA-eligible vehicle with
              Bitcoin exposure. As MARS and MERCURY potentially list on the TSE,
              they could enter investment trust portfolios as yield instruments.
            </p>
          </div>
        </div>

        <Callout>
          MERCURY&apos;s 4.9% yield is roughly 2.5x the 10-year JGB (1.95%) and
          more than 10x Japanese bank deposit rates. In a market where $10
          trillion in institutional capital is actively repositioning for a
          post-deflation world, the addressable demand for BTC-backed yield
          instruments is orders of magnitude larger than what Metaplanet has
          issued to date.
        </Callout>
      </div>

      {/* Additional Structural Signals */}
      <div className="max-w-4xl mx-auto mt-10">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-4">
          Additional Structural Signals
        </h4>
        <div className="space-y-3">
          <div className="border border-ink-100 rounded-sm p-4">
            <p className="text-sm leading-relaxed text-ink-600">
              <strong className="text-ink-800">90%+ alternatives adoption:</strong>{" "}Over
              90% of Japanese institutional investors have already incorporated
              alternative investments into their portfolios. GPIF (world&apos;s largest
              pension, $1.87T) is actively building an alternatives database as it
              expands exposure. The institutional infrastructure for alternative yield
              products is already in place - MARS enters a market that is ready for it.
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Source: <a href="https://www.aima.org/article/golden-opportunities-in-japan-a-new-era-for-global-asset-managers.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">AIMA - Golden Opportunities in Japan</a>
            </p>
          </div>
          <div className="border border-ink-100 rounded-sm p-4">
            <p className="text-sm leading-relaxed text-ink-600">
              <strong className="text-ink-800">Domestic market dominance:</strong>{" "}Foreign
              investors hold only 4% of outstanding Japanese bonds. This is an
              overwhelmingly domestic market, which means the $10T+ institutional
              TAM is almost entirely Japanese capital - concentrated, accessible,
              and operating under the same yield-starvation pressure.
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Source: <a href="https://www.oecd.org/en/publications/asia-capital-markets-report-2025_02172cdc-en/full-report/corporate-debt-markets_7b3ae2b1.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">OECD Asia Capital Markets Report 2025</a>
            </p>
          </div>
          <div className="border border-ink-100 rounded-sm p-4">
            <p className="text-sm leading-relaxed text-ink-600">
              <strong className="text-ink-800">Authorized scale:</strong>{" "}At the December
              2025 EGM, shareholders approved doubling authorized shares to ~555
              million per class for both MARS (Class A) and MERCURY (Class B). This
              signals that Metaplanet&apos;s board and shareholder base are planning for
              preferred issuance at a scale far beyond the initial $151M MERCURY
              placement.
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Source: <a href="https://metaplanet.jp/en/disclosures" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Metaplanet EGM Resolutions (December 22, 2025)</a>
            </p>
          </div>
          <div className="border border-ink-100 rounded-sm p-4">
            <p className="text-sm leading-relaxed text-ink-600">
              <strong className="text-ink-800">Asia-Pacific TAM beyond Japan:</strong>{" "}Emerging
              East Asia local currency bonds outstanding total $26.3 trillion. Asian
              corporate debt (bonds, syndicated loans, and private credit) stands at
              $13.9 trillion. If MARS and MERCURY gain traction with Japanese institutions,
              the broader Asia-Pacific institutional market represents an additional
              layer of demand - particularly as Metaplanet&apos;s Project NOVA positions the
              company as infrastructure for institutional Bitcoin adoption across the region.
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Sources: <a href="https://asianbondsonline.adb.org" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">ADB AsianBondsOnline</a>, <a href="https://www.oecd.org/en/publications/asia-capital-markets-report-2025_02172cdc-en/full-report/corporate-debt-markets_7b3ae2b1.html" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">OECD Asia Capital Markets 2025</a>
            </p>
          </div>
        </div>
      </div>

      {/* Structural Advantages */}
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
              real returns of -2.7%. <a href="https://www.morganstanley.com/insights/articles/japan-economic-outlook-2025-pivotal-for-investors" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Morgan Stanley&apos;s Japan Wealth Management report</a> projects
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
