import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";

export function CapitalStructure() {
  return (
    <SectionWrapper id="capital-structure" variant="white">
      <div className="max-w-3xl mx-auto">
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
      <div className="max-w-5xl mx-auto mt-12">
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
      <div className="max-w-5xl mx-auto mt-12">
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
      <div className="max-w-5xl mx-auto mt-12">
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

      <div className="max-w-3xl mx-auto mt-8">
        <Callout>
          STRC alone raised $8.5B in face value in a single preferred instrument
          paying 11.50% annual dividends - backed by $61.6B in Bitcoin reserves.
          It trades at $99.42 with a Sharpe ratio of 2.62 and realized volatility
          of just 3.0% over 21 days. For context, the 3-month Treasury yields 3.7%.
          STRC pays 3x Treasuries with BTC upside and 41 years of reserve coverage.
        </Callout>
      </div>

      {/* Metaplanet MARS/MERCURY */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Metaplanet&apos;s MARS and MERCURY: The Japanese Adaptation
        </h3>

        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-ink-600 mb-8">
          <p>
            Metaplanet is adapting Strategy&apos;s full preferred equity playbook for the
            Japanese market through two distinct instruments:
          </p>
          <p>
            <strong className="text-ink-800">MARS (Metaplanet Adjustable Rate Security)</strong> -
            the STRC equivalent. Non-convertible preferred income instrument designed to raise
            large-scale capital from yield-seeking investors and channel it directly into BTC
            accumulation without diluting common shareholders&apos; BTC-per-share exposure.
          </p>
          <p>
            <strong className="text-ink-800">MERCURY</strong> - the STRK equivalent. Convertible
            preferred with equity upside for investors willing to accept a lower dividend in
            exchange for potential conversion into common shares.
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
      </div>

      {/* MERCURY Details */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Current Preferred Details: MERCURY
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Notional" value="$148.21M" sublabel="Par value $6.28" />
          <StatCard label="Dividend Rate" value="4.90%" sublabel="Annual commitment: $7.26M" />
          <StatCard label="Coverage" value="420 yr" sublabel="BTC NAV / annual dividends" accent />
        </div>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            BTC Rating: 7.72x (BTC NAV is 7.72x the preferred notional). Duration: Perpetual.
            Status: Private placement.
          </p>
        </div>
      </div>

      {/* MARS Catalyst */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          MARS - The Thesis Accelerant
        </h3>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            MARS has been approved by Metaplanet&apos;s board of directors and shareholders
            (via EGM December 2025 and AGM March 2026 resolutions) and is currently <strong className="text-ink-800">pending
            Tokyo Stock Exchange approval</strong>, expected in 2026. Once approved, MARS becomes the
            direct STRC parallel - a non-convertible preferred income instrument designed to
            raise large-scale capital from yield-seeking investors and convert it directly into
            BTC accumulation without diluting common shareholders.
          </p>
          <p>
            Strategy proved with STRC that a single non-convertible preferred instrument can
            raise $8.5B at scale, fund billions in BTC purchases, and produce 9.5% BTC Yield
            YTD with negligible common share dilution. MARS is designed to bring this exact
            engine to the Japanese market. <strong className="text-ink-800">TSE approval of MARS is one of the
            highest-conviction near-term catalysts for this thesis.</strong>
          </p>
          <p>
            <strong className="text-ink-800">Strategic leverage headroom:</strong> At 13%
            amplification ratio vs Strategy&apos;s 35%, Metaplanet could nearly triple its capital
            structure obligations and still be less leveraged than Strategy. In dollar terms,
            Metaplanet has capacity to issue roughly $600-700M in additional preferred
            instruments before reaching Strategy&apos;s leverage ratio - and every dollar raised
            buys more BTC, which expands NAV, which creates capacity for more issuance.
          </p>
        </div>
      </div>

      {/* 4 Structural Advantages */}
      <div className="max-w-3xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Why Metaplanet&apos;s Preferred Program Is Structurally Advantaged
        </h3>

        <div className="space-y-6">
          <div className="border-l-2 border-accent pl-6">
            <div className="font-semibold text-ink-800 mb-1">1. NISA Eligibility</div>
            <p className="text-sm leading-relaxed text-ink-600">
              No Strategy preferred instrument (STRK, STRF, STRC, STRD) is available through
              Japan&apos;s tax-advantaged investment system. Metaplanet common stock is. As MARS
              gains TSE approval and potentially becomes exchange-listed, it could inherit
              this structural advantage - giving Japanese retail tax-advantaged access to
              BTC-backed yield that has no equivalent in the US market.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="font-semibold text-ink-800 mb-1">2. Japanese Yield Starvation</div>
            <p className="text-sm leading-relaxed text-ink-600">
              Japanese institutions and retail investors have endured near-zero yields for
              decades. A MARS preferred paying a fixed dividend - backed by BTC with hundreds
              of years of coverage - is extraordinary in a market where the 10Y JGB yields
              ~1.95%. STRC pays 11.50% and raised $8.5B in the US. Imagine that yield offered
              to a Japanese market where the alternative is a 1.95% government bond or -2.7%
              real returns on cash.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="font-semibold text-ink-800 mb-1">3. Leverage Headroom</div>
            <p className="text-sm leading-relaxed text-ink-600">
              At 13% amplification ratio vs Strategy&apos;s 35%, Metaplanet has a long runway for
              capital structure expansion. Each successive preferred issuance at this coverage
              level strengthens the thesis, not dilutes it.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <div className="font-semibold text-ink-800 mb-1">4. Yen Debasement Compounding</div>
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
