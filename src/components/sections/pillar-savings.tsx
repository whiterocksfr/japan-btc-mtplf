import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";
import { Callout } from "@/components/ui/callout";

export function PillarSavings() {
  return (
    <SectionWrapper id="pillar-savings" variant="muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Pillar 4
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          The $15 Trillion Savings Pool in Motion
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          For forty years, Japanese households defaulted to cash. Deflation made this rational -
          when prices fall, cash gains purchasing power, and 0% deposit rates deliver positive real
          returns. The 1990 bubble crash burned an entire generation out of equities. &quot;Savings
          not investment&quot; was not cultural stubbornness. It was economically correct behavior.
          That era is over.
        </p>
      </div>

      {/* Current Scale */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Current Scale (Sept 2025, BOJ Flow of Funds)
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Total Household Assets" value="¥2,286T" sublabel="~$15T (+4.9% YoY)" accent />
          <StatCard label="Cash and Deposits" value="¥1,122T" sublabel="~$7.4T (49.1% share)" />
          <StatCard label="Equities" value="¥317T" sublabel="~$2.1T (+19.3% YoY)" />
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset Category</th>
                <th className="num">Amount (Yen)</th>
                <th className="num">Amount (USD)</th>
                <th className="num">Share</th>
                <th className="num">YoY Change</th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlight">
                <td className="label">Total household financial assets</td>
                <td className="num">¥2,286T</td>
                <td className="num">~$15T</td>
                <td className="num">100%</td>
                <td className="num">+4.9%</td>
              </tr>
              <tr>
                <td className="label">Cash and deposits</td>
                <td className="num">¥1,122T</td>
                <td className="num">~$7.4T</td>
                <td className="num">49.1%</td>
                <td className="num">+0.5%</td>
              </tr>
              <tr>
                <td className="label">Equities</td>
                <td className="num">¥317T</td>
                <td className="num">~$2.1T</td>
                <td className="num">13.9%</td>
                <td className="num">+19.3%</td>
              </tr>
              <tr>
                <td className="label">Investment trusts</td>
                <td className="num">¥153T</td>
                <td className="num">~$1.0T</td>
                <td className="num">6.7%</td>
                <td className="num">+21.1%</td>
              </tr>
              <tr>
                <td className="label">Insurance / pensions / other</td>
                <td className="num">~¥694T</td>
                <td className="num">~$4.5T</td>
                <td className="num">~30.3%</td>
                <td className="num">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-ink-500">
          Cash as a share of household assets fell below 50% for the first time in 18 years.
        </p>
      </div>

      {/* Inflation Regime Change */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The Inflation Regime Change
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <StatCard label="2024 CPI YoY" value="2.8%" sublabel="41+ months above 2% target" />
          <StatCard label="Real Return on Cash" value="-2.7%" sublabel="Deposit rate: 0.03-0.1%" accent />
        </div>

        <div className="border border-ink-100 rounded-sm p-6 bg-white">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
            The Math Brutalizing Savers
          </h4>
          <div className="space-y-3 text-base leading-relaxed text-ink-600">
            <p>
              With CPI at 2.8% and deposit interest at 0.03-0.1%, Japanese savers are earning a
              real return of approximately <strong className="text-ink-800">-2.7% to -2.8%</strong> on
              cash holdings.
            </p>
            <p>
              Inflation has remained above the BOJ&apos;s 2% target for 41+ consecutive months.
              Applied to ¥1,122 trillion in cash deposits, this translates to approximately
              <strong className="text-ink-800">¥28-34 trillion ($190-230 billion)</strong> in
              purchasing power destroyed annually.
            </p>
          </div>
        </div>

        <Callout>
          This is economic-GDP-of-Portugal money evaporating from Japanese household savings every
          single year.
        </Callout>
      </div>

      {/* Allocation Shift */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The Allocation Shift Already in Motion
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Cash as % of Household Financial Assets
            </h4>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th className="num">Share</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="label">2015</td><td className="num">56.0%</td></tr>
                <tr><td className="label">2024 (Dec)</td><td className="num">50.9%</td></tr>
                <tr className="highlight"><td className="label">2025 (Sep)</td><td className="num">49.1%</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Stocks as % of Household Assets
            </h4>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th className="num">Share</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="label">2010</td><td className="num">8.2%</td></tr>
                <tr><td className="label">End 2024</td><td className="num">13.4%</td></tr>
                <tr className="highlight"><td className="label">2025 (YoY growth)</td><td className="num">+19.3%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* NISA */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          NISA - The Tax-Advantaged Escape Valve
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <StatCard label="Annual Limit" value="¥3.6M" sublabel="For growth investments" accent />
          <StatCard label="Lifetime Cap" value="¥18M" sublabel="Tax-exempt" />
        </div>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            Introduced in 2024 as an expanded tax-exempt investment system, NISA provides an annual
            contribution limit of ¥3.6 million for &quot;growth&quot; investments and a lifetime cap
            of ¥18 million. Morgan Stanley has compared it to the &quot;IRA moment&quot; for Japan -
            the 1970s US inflection when tax-advantaged retirement accounts catalyzed a multi-decade
            shift from savings to equities.
          </p>
          <p>
            <strong className="text-ink-800">Why this time is different:</strong> Prior
            savings-to-investment pushes (the 1996 Big Bang reform, Abe-era initiatives) failed
            because they lacked tax incentives <em>and</em> the underlying economics still favored
            cash. Now both conditions are met simultaneously for the first time - a tax wrapper that
            rewards investment plus inflation that punishes cash.
          </p>
        </div>
      </div>

      {/* Morgan Stanley Projections */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          The Morgan Stanley Projections
        </h3>

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
                <td className="label">Ultra-HNW + upper affluent investments by 2030</td>
                <td className="num">¥690T to ¥906T ($5.8T) (+30%+)</td>
              </tr>
              <tr>
                <td className="label">HNW/affluent financial assets by 2035</td>
                <td className="num">¥1,089T ($6.9T) at 4.6-8.3% CAGR</td>
              </tr>
              <tr className="highlight">
                <td className="label">Generational wealth transfer (next decade)</td>
                <td className="num">¥300T+ from deflation-minded boomers to inflation-aware generation</td>
              </tr>
              <tr>
                <td className="label">Clients with assets &gt;¥50M flowing to stocks/alternatives</td>
                <td className="num">27% (+9 pp since 2020)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Why This Matters for the Thesis
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <StatCard label="10% Reallocation" value="$740B" sublabel="From $7.4T cash pool" />
          <StatCard label="20% Reallocation" value="$1.48T" sublabel="From $7.4T cash pool" accent />
        </div>

        <div className="border border-ink-100 rounded-sm p-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
            For Context
          </h4>
          <ul className="space-y-2 text-sm text-ink-600">
            <li>Total Bitcoin market cap: ~$2T</li>
            <li>All gold ETFs combined: ~$400B</li>
          </ul>
        </div>

        <Callout>
          A single-digit percentage reallocation from Japanese household cash is capable of moving
          every scarce asset globally. The ¥300T+ generational wealth transfer is moving from
          deflation-era savers who defaulted to cash to a digital-native generation whose instinctive
          hard asset is digital, not physical.
        </Callout>
      </div>
    </SectionWrapper>
  );
}
