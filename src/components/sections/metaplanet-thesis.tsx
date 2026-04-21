import { SectionWrapper } from "@/components/ui/section-wrapper";
import { StatCard } from "@/components/ui/stat-card";

export function MetaplanetThesis() {
  return (
    <SectionWrapper id="metaplanet" variant="muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          The Investment Thesis
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Metaplanet (TSE: 3350)
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            Metaplanet occupies a unique position in global capital markets. It is
            the only publicly listed, pure-play Bitcoin treasury company on the
            Tokyo Stock Exchange - giving Japanese retail and institutional investors
            access to BTC exposure through the same brokerage accounts they use for
            any other Japanese equity, at a 20% capital gains tax rate instead of the
            55% rate applied to direct cryptocurrency holdings.
          </p>
          <p>
            But the tax arbitrage is only the entry point. Metaplanet is building a
            full-stack Bitcoin platform for Japan and Asia: a capital structure engine
            (MARS + MERCURY) designed to compound BTC-per-share without diluting common
            shareholders, an income generation business using cash-secured puts to
            fund dividends from operations, an education and media subsidiary (Bitcoin
            Magazine Japan) onboarding a million Japanese into the Bitcoin ecosystem,
            a strategic stablecoin investment (JPYC), and <strong className="text-ink-800">Project
            NOVA</strong> - an institutional platform being built for broad institutional
            Bitcoin adoption across Asia, positioning Metaplanet as core infrastructure
            for how institutions in the region access, custody, and deploy Bitcoin.
          </p>
          <p>
            The thesis rests on the convergence of these structural advantages with
            the macro forces documented in the preceding sections. Japan&apos;s $7.4
            trillion household cash pool, yield-starved institutions, persistent
            yen debasement, and the BOJ&apos;s inability to normalize monetary policy
            all create demand for exactly what Metaplanet offers: a regulated,
            tax-efficient, TSE-listed vehicle that converts yen-denominated capital
            into Bitcoin exposure with institutional-grade governance.
          </p>
          <p>
            The institutional validation is already visible. Capital Group ($2.9
            trillion AUM) holds an 11.45% stake, and significant US retail demand flows
            through Fidelity brokerage accounts (12.9% custodial position via National
            Financial Services). The MERCURY preferred placement was arranged by Goldman
            Sachs Japan and Cantor Fitzgerald, with participation from Capital Group&apos;s
            SMALLCAP World Fund, Ghisallo Capital (founded by the former Head of Trading
            at Soros Fund Management), and Anson Funds (HedgeWeek Americas Multi-Strategy
            Fund of the Year). These are among the most sophisticated capital allocators
            in the world, and they are taking deliberate positions in Metaplanet&apos;s
            preferred instruments. The $10 trillion+ pool of Japanese institutional
            capital (life insurers, pensions, banks) that is actively repositioning
            for a post-deflation world represents the next wave of demand, and
            Metaplanet is positioned to capture it.
          </p>
        </div>
      </div>

      {/* Tax Arbitrage Table */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Why Metaplanet Sits at the Exact Intersection
        </h3>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Option for Japanese Retail BTC Exposure</th>
                <th>Tax Treatment</th>
                <th>NISA-Eligible</th>
                <th>Accessibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Direct BTC purchase</td>
                <td><strong className="text-ink-800">55% max</strong> (miscellaneous income)</td>
                <td>No</td>
                <td>Exchanges only</td>
              </tr>
              <tr>
                <td className="label">Japanese equities broadly</td>
                <td>20%</td>
                <td>Yes</td>
                <td>Brokerages</td>
              </tr>
              <tr>
                <td className="label">Foreign equity ETFs</td>
                <td>20%</td>
                <td>Yes</td>
                <td>Brokerages</td>
              </tr>
              <tr>
                <td className="label">Gold</td>
                <td>Variable, high</td>
                <td>Limited</td>
                <td>Harder</td>
              </tr>
              <tr className="highlight">
                <td className="label">Metaplanet (3350)</td>
                <td><strong className="text-ink-800">20%</strong></td>
                <td><strong className="text-ink-800">Yes</strong></td>
                <td><strong className="text-ink-800">TSE standard listing</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Stats */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          Key Structural Features (as of April 21, 2026)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard label="BTC Holdings" value="40,177" sublabel="$3.05B NAV, avg cost $104,107" accent />
          <StatCard label="Market Cap" value="$2.71B" sublabel="Enterprise Value: $3.10B" />
          <StatCard label="BTC Yield YTD" value="+2.87%" sublabel="1,007.5 BTC accreted, $76.52M" />
          <StatCard label="BSE Return" value="+1,684%" sublabel="Since BTC strategy adoption" accent />
        </div>

        <p className="mb-4 text-xs text-ink-400">
          Source: <a href="https://analytics.metaplanet.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">analytics.metaplanet.jp</a> (April 21, 2026)
        </p>

        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            <strong className="text-ink-800">Tickers:</strong> 3350 (TSE), MPJPY (ADR), MTPLF (OTC), DN3 (Frankfurt)
          </p>
          <p>
            <strong className="text-ink-800">Capital structure:</strong> EV mNAV 1.02x | Basic Shares 1.27B | Diluted Shares 1.62B | Sats/Basic Share 3,153 | 27th series stock acquisition rights with 350.3M convertible securities/options outstanding
          </p>
          <p>
            <strong className="text-ink-800">MERCURY preferred equity</strong> (Class B Preferred Shares) - $148.2M notional, 4.90% dividend
          </p>
          <p>
            <strong className="text-ink-800">CEO:</strong> Simon Gerovich (keynotes at Strategy World, Bitcoin for Corporations; fireside with Michael Saylor Dec 2025)
          </p>
          <p>
            <strong className="text-ink-800">Subsidiaries:</strong> Bitcoin Japan Inc. (adoption/education), Bitcoin Magazine Japan (exclusive license), The Bitcoin Hotel (Royal Oak Gotanda, Tokyo)
          </p>
        </div>
      </div>

      {/* BTC per share growth */}
      <div className="max-w-4xl mx-auto mt-12">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-6">
          BTC Exposure per Share Growth
        </h3>
        <div className="space-y-4 text-base leading-relaxed text-ink-600">
          <p>
            Share count has grown from 162.5M (April 2024) to 1.27B (March 2026) - a 7.8x increase. But satoshis per basic share grew from ~603 (at first purchase, 97.85 BTC) to <strong className="text-ink-800">3,153</strong> today (40,177 BTC) - a <strong className="text-ink-800">5.2x increase in BTC exposure per share</strong> despite the dilution. BTC accumulation has consistently outpaced share issuance.
          </p>
          <p>
            Bitcoin treasury strategy: acquiring an average of <strong className="text-ink-800">54.15 BTC/day</strong>. Moving strike stock acquisition rights (warrants) enable capital raises at prices linked to the current share price, funding BTC accumulation without the fixed dividend obligations of preferred instruments.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
