import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Callout } from "@/components/ui/callout";

export function EverythingCode() {
  return (
    <SectionWrapper id="everything-code" variant="muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          The Framework
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          The Everything Code
        </h2>
        <div className="mt-1 text-sm text-ink-500">
          Developed by{" "}
          <a
            href="https://x.com/RaoulGMI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Raoul Pal
          </a>
          {" "}- Global Macro Investor / Real Vision
        </div>
        <div className="mt-4 h-px w-12 bg-accent" />

        <p className="mt-8 text-base leading-relaxed text-ink-600">
          The Everything Code is a macro framework that identifies a structural,
          self-reinforcing loop at the heart of the modern global financial system.
          The core insight: once sovereign debt passes a critical threshold relative
          to GDP, the political and economic system locks into a cycle where currency
          debasement is not a policy choice - it is the only mathematically viable
          outcome. Every other option (austerity, default, sustained real tightening)
          is either politically impossible or economically catastrophic.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          Understanding this framework is essential because it explains why Japan&apos;s
          situation is not an anomaly but a preview - and why Bitcoin and Metaplanet
          sit at the precise intersection of the forces it describes.
        </p>
      </div>

      {/* The Debt Supercycle */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          The Debt Supercycle
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          The starting point is debt. Governments borrow to fund operations,
          infrastructure, social programs, and crisis response. This is normal.
          What becomes abnormal is when debt grows faster than the economy that
          services it. Once debt-to-GDP crosses roughly 100%, the interest payments
          alone begin consuming an ever-larger share of government revenue, which
          requires more borrowing to maintain the same level of services - creating
          a compounding cycle.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          The US currently pays $970 billion per year in interest on its debt -
          more than its entire defense budget. Japan, at ~260% debt-to-GDP, crossed
          this threshold decades ago. The EU&apos;s weakest members (Italy at 138%,
          Greece at 151%) are structurally trapped. China is entering the same
          trajectory.
        </p>

        <Callout>
          The debt is not the problem. The debt is the symptom.
          Demographics is the disease.
        </Callout>
      </div>

      {/* Demographics as Forcing Function */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          Demographics: The Irreversible Forcing Function
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          Pal identifies demographics as the root driver of the debt supercycle.
          Aging populations create a structural fiscal ratchet:
        </p>

        <div className="mt-6 space-y-4">
          <ForceStep
            number="1"
            title="Workforce shrinks"
            detail="Fewer working-age people means a smaller tax base generating less revenue."
          />
          <ForceStep
            number="2"
            title="Dependency ratio explodes"
            detail="More retirees per worker means more pension, healthcare, and social security obligations. These are politically untouchable."
          />
          <ForceStep
            number="3"
            title="Fiscal gap widens"
            detail="Revenue falls while mandatory spending rises. The gap must be filled with borrowing."
          />
          <ForceStep
            number="4"
            title="Debt compounds"
            detail="Interest on the growing debt adds to the spending burden, requiring even more borrowing."
          />
          <ForceStep
            number="5"
            title="Central bank must accommodate"
            detail="The government cannot afford market-rate interest on its debt. The central bank must keep rates below nominal GDP growth - or the math breaks."
          />
        </div>

        <p className="mt-6 text-base leading-relaxed text-ink-600">
          This is not theory. Japan&apos;s fertility dropped below replacement in 1975.
          Fifty years later, the BOJ holds rates near zero with ~260% debt-to-GDP
          and cannot escape. The US fertility dropped below replacement around 2007-2010.
          The Fed is now on the same trajectory, just earlier on the curve. Every
          developed economy with below-replacement fertility is entering this loop
          at different speeds.
        </p>
      </div>

      {/* The Debasement Trap */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          The Debasement Trap: Why There Is No Exit
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          Once a government is in this loop, Pal argues there are only four
          possible responses. Three of them are closed:
        </p>

        <div className="mt-6 space-y-3">
          <ExitOption
            label="Grow out of it"
            status="closed"
            detail="Requires sustained real GDP growth above the interest rate on debt. Possible in theory, but aging populations and declining productivity make it nearly impossible at scale. Even history's greatest productivity booms (1945-1970) only reduced debt/GDP through financial repression - which IS debasement."
          />
          <ExitOption
            label="Austerity"
            status="closed"
            detail="Cut spending, raise taxes. Politically suicidal in democracies with aging populations who vote and depend on government benefits. No developed economy has successfully implemented sustained austerity at the scale required. Those that tried (Greece, UK) produced recessions that worsened the debt ratio."
          />
          <ExitOption
            label="Default"
            status="closed"
            detail="Refuse to pay. Destroys the sovereign credit market, collapses the banking system (which holds sovereign bonds as Tier 1 capital), and triggers a depression. No reserve currency nation has defaulted in modern history. The cure is worse than the disease."
          />
          <ExitOption
            label="Debase the currency"
            status="open"
            detail="Keep interest rates below inflation (negative real rates). Print money to buy government bonds (QE). Allow the currency to weaken. The debt shrinks in real terms while nominal GDP rises. Savers pay the cost through purchasing power erosion. This is the only option that is both mathematically viable and politically survivable."
          />
        </div>

        <Callout>
          The Everything Code is not a prediction that governments will choose
          debasement. It is the observation that they have no other choice.
        </Callout>
      </div>

      {/* The Liquidity Cycle */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          The Liquidity Cycle: How Debasement Moves Markets
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          Pal&apos;s key empirical observation: global liquidity (measured by aggregate
          M2 money supply across major economies) is the single most important
          driver of asset prices. When central banks expand their balance sheets
          and M2 grows, virtually all assets rise in nominal terms - stocks, bonds,
          real estate, gold, crypto. When M2 contracts (briefly, during tightening
          cycles), assets fall.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          But here is the asymmetry: tightening cycles are always shorter and
          shallower than easing cycles. Central banks tighten until something
          breaks (a banking crisis, a market dislocation, a recession), then
          reverse. Each reversal expands the balance sheet to a higher level
          than the previous peak. The ratchet only turns one direction.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Response</th>
                <th className="num">Peak Balance Sheet After</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label">Pre-2008 baseline</td>
                <td>Normal monetary policy</td>
                <td className="num">~$0.9T (Fed)</td>
              </tr>
              <tr>
                <td className="label">2008 Financial Crisis</td>
                <td>QE1, QE2, QE3</td>
                <td className="num">~$4.5T</td>
              </tr>
              <tr>
                <td className="label">2018 QT attempt</td>
                <td>Reversed after repo crisis</td>
                <td className="num">~$3.8T (briefly)</td>
              </tr>
              <tr>
                <td className="label">2020 COVID</td>
                <td>Unlimited QE</td>
                <td className="num">~$8.9T</td>
              </tr>
              <tr className="highlight">
                <td className="label">2022-2026 QT attempt</td>
                <td>Paused at ~25% reduction</td>
                <td className="num">~$6.7T (current)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Sources: <a href="https://www.federalreserve.gov/releases/h41/current/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Federal Reserve H.4.1</a>, <a href="https://fred.stlouisfed.org/series/WALCL" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">FRED WALCL</a>, <a href="https://www.congress.gov/crs-product/IF12147" target="_blank" rel="noopener noreferrer" className="hover:text-ink-600">Congressional Research Service</a>
        </p>

        <p className="mt-6 text-base leading-relaxed text-ink-600">
          Each crisis produces a larger response. Each &quot;normalization&quot; unwinds
          only a fraction of the expansion. The trajectory is unambiguous: more
          liquidity over time, punctuated by brief pauses that create buying
          opportunities. Global M2 stands at approximately $100 trillion and
          growing.
        </p>
      </div>

      {/* Why Scarce Assets Win */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          Why Scarce Assets Capture the Flows
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          When the denominator (currency) is being debased, the numerator (asset
          prices) rises mechanically. But not all assets rise equally. The
          Everything Code predicts that assets with the hardest supply constraints
          capture the largest share of debasement flows, because they cannot expand
          supply to absorb the new money. The money has to compete for a fixed
          quantity, driving the price.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          This is why the framework ultimately points to Bitcoin. Gold works, but
          its supply expands ~1.5% annually and responded to higher prices with
          record production in 2025. Real estate works, but supply responds to
          price through construction. Equities work, but companies issue shares
          and new IPOs expand the market. Bitcoin is the only major asset where
          supply is mathematically fixed and new issuance is declining on a
          predetermined schedule - the exact opposite of what central banks are
          doing with their currencies.
        </p>
      </div>

      {/* The Halving-Liquidity Convergence */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          The Halving-Liquidity Convergence
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          Pal identifies a structural alignment between Bitcoin&apos;s 4-year halving
          cycle and the global liquidity cycle. Both are driven by the same
          underlying rhythms: political election cycles drive fiscal spending,
          debt maturity walls force refinancing waves, and central bank reaction
          functions oscillate on roughly 18-24 month tightening/easing cycles.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          When a Bitcoin halving (50% supply shock) coincides with a global
          liquidity expansion, the dual compression - rising demand meeting
          falling new supply - produces outsized price moves. This convergence
          has occurred with every halving in Bitcoin&apos;s history. The current
          cycle (4th halving April 2024) is aligning with global M2 inflecting
          higher, the Fed pausing QT, the ECB cutting, China stimulating, and
          the BOJ maintaining accommodation.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          Pal calls the period when these cycles align the &quot;banana zone&quot; -
          the window of maximum asymmetry where the structural forces of
          debasement, liquidity expansion, and Bitcoin&apos;s supply shock converge.
        </p>
      </div>

      {/* The Exponential Age */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          The Exponential Age: Technology as Accelerant
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          Pal&apos;s framework extends beyond monetary debasement. Through his{" "}
          <a
            href="https://www.realvision.com/shows/the-exponential-age"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Exponential Age
          </a>{" "}
          series on Real Vision, he argues that we are simultaneously entering
          the greatest technology revolution in human history - and that this
          revolution and the debasement cycle are not separate forces. They
          reinforce each other.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          The thesis: artificial intelligence, blockchain, and exponential
          computing are driving a productivity transformation comparable to the
          industrial revolution. Each new technology wave - the internet, mobile,
          cloud, AI - is adopted faster than the last. What took the internet a
          decade to reach a billion users, AI is achieving in a fraction of that
          time. Pal calls this the &quot;Fourth Paradigm Shift&quot; - a fundamental
          restructuring of how economies produce value, process information, and
          allocate resources.
        </p>

        <div className="mt-8 space-y-3">
          <ExpAgeTheme
            title="AI and Productivity"
            detail="Artificial intelligence is creating a step-change in output per worker. Unlike previous automation waves that replaced manual labor, AI augments cognitive labor - analysis, decision-making, content creation, code generation. This has the potential to offset declining workforce demographics in developed economies, but it does not resolve the debt problem: productivity gains historically get consumed by new government spending rather than debt reduction."
          />
          <ExpAgeTheme
            title="Network Effects and Metcalfe's Law"
            detail="Pal frequently cites Metcalfe's Law - that a network's value scales with the square of its users - as the driver of both crypto and technology valuations. Bitcoin, Ethereum, and AI platforms are all network-effect businesses where adoption follows predictable S-curves. Early-stage adoption creates asymmetric returns because the value grows exponentially while most capital allocators are still evaluating linearly."
          />
          <ExpAgeTheme
            title="Crypto as Technology, Not Just Money"
            detail="Pal views the crypto ecosystem broadly - not just Bitcoin as a store of value, but the entire blockchain infrastructure (smart contracts, DeFi, tokenization, decentralized computing) as a technology revolution comparable to the early internet. Bitcoin is the monetary layer. The broader ecosystem is the application layer. Both benefit from the same adoption curves and liquidity dynamics."
          />
          <ExpAgeTheme
            title="Resource Abundance"
            detail="The Exponential Age thesis argues that exponential technology will drive resource abundance - energy costs declining through solar/nuclear, compute costs declining through AI/chips, information costs declining toward zero. This abundance transforms macro economics in ways that traditional models cannot capture, and creates investment opportunities in the platforms that enable it."
          />
        </div>

        <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink-500 mb-3">
          How Debasement and Technology Reinforce Each Other
        </h4>

        <p className="text-base leading-relaxed text-ink-600">
          The critical insight connecting the Everything Code to the Exponential
          Age: central bank debasement pushes capital out of cash and into risk
          assets. The best risk assets are technology companies and crypto
          networks that are growing exponentially. The debasement provides the
          capital flow. The technology provides the returns. The intersection
          creates a self-reinforcing cycle where monetary expansion funds
          technological adoption, and technological adoption creates the growth
          narratives that attract more capital flow.
        </p>

        <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink-500 mb-3">
          The AI Productivity Hope - and Why It Doesn&apos;t Change the Outcome
        </h4>

        <p className="text-base leading-relaxed text-ink-600">
          The most common counterargument to the debasement thesis is that AI
          will deliver a productivity miracle large enough to grow economies out
          of their debt traps. Markets are betting heavily on this outcome -
          trillions in capital have flowed into AI infrastructure, semiconductor
          companies, and cloud computing. The hope is that AI-driven productivity
          gains will expand GDP fast enough to shrink debt ratios without requiring
          debasement.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          Pal&apos;s response is precise: even if AI delivers everything its
          proponents promise, it does not change the political economy. History
          is unambiguous on this point. The greatest productivity boom in American
          history (1945-1970, driven by electrification, automobiles, and
          postwar industrialization) did not reduce government debt through
          organic growth. It reduced debt through financial repression - holding
          interest rates below inflation, which is debasement. Governments do
          not use productivity windfalls to pay down debt. They use them to
          fund new programs, expand entitlements, and fight new wars. The spending
          always absorbs the growth.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          Japan proves this in real time. Japan is the world&apos;s third-largest
          robotics adopter and a global leader in industrial automation. It has
          not mattered. The productivity gains were consumed by an aging
          population&apos;s healthcare and pension needs, and debt-to-GDP continued
          climbing to 260%. Technology offsets some of the demographic drag but
          does not reverse the fiscal ratchet.
        </p>

        <Callout>
          AI may change the world. It will not change the debt math. The
          debasement is the inevitable outcome regardless of how productive the
          economy becomes - because the political system will always find new
          ways to spend the surplus. Bitcoin and Metaplanet win in both
          scenarios: if AI disappoints, debasement accelerates. If AI delivers,
          governments spend the gains, and debasement continues at the same pace.
        </Callout>
      </div>

      {/* Why Japan Is the Proof */}
      <div className="max-w-3xl mx-auto mt-14">
        <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">
          Why Japan Is the Everything Code&apos;s Proof of Concept
        </h3>

        <p className="text-base leading-relaxed text-ink-600">
          The Everything Code is a global thesis. But Japan is where it has run
          the longest and the furthest. Japan entered the debt supercycle first
          (bubble burst 1990, ZIRP by 1999, QE by 2001). Japan&apos;s demographics
          deteriorated first (fertility below replacement 1975, population
          declining since 2007). Japan has eliminated the two possible escape
          valves that other countries still theoretically have: demographic
          recovery (impossible at 1.20 fertility) and mass immigration (politically
          sealed shut at 79% opposition).
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          The result is that Japan is 10-20 years ahead of the US, EU, and China
          on the Everything Code curve. What happens in Japan is a roadmap for
          what will happen everywhere. And what is happening in Japan right now -
          persistent inflation destroying cash savings, households migrating out
          of yen deposits for the first time in decades, NISA channeling capital
          into equity exposure - is exactly what the framework predicts.
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-600">
          The sections that follow apply this framework at three levels: first
          to Bitcoin as the foundational asset, then to the global context
          showing every central bank converging, and finally to Japan&apos;s four
          pillars showing why it is the purest expression of these forces -
          with Metaplanet as the optimal capture vehicle.
        </p>
      </div>
    </SectionWrapper>
  );
}

function ForceStep({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-none mt-0.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-800 text-[0.625rem] font-bold text-white">
          {number}
        </div>
      </div>
      <div>
        <span className="font-semibold text-ink-800">{title}.</span>{" "}
        <span className="text-ink-600">{detail}</span>
      </div>
    </div>
  );
}

function ExpAgeTheme({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <div className="border border-ink-100 rounded-sm p-4 bg-white">
      <h5 className="text-sm font-semibold text-ink-800 mb-1">{title}</h5>
      <p className="text-sm leading-relaxed text-ink-600">{detail}</p>
    </div>
  );
}

function ExitOption({
  label,
  status,
  detail,
}: {
  label: string;
  status: "open" | "closed";
  detail: string;
}) {
  return (
    <div
      className={`border rounded-sm p-4 ${
        status === "open"
          ? "border-accent bg-accent/5"
          : "border-ink-100 bg-white"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`text-xs font-bold uppercase tracking-wider ${
            status === "open" ? "text-accent" : "text-ink-400 line-through"
          }`}
        >
          {label}
        </span>
        <span
          className={`text-[0.625rem] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
            status === "open"
              ? "bg-accent/10 text-accent"
              : "bg-ink-100 text-ink-400"
          }`}
        >
          {status === "open" ? "Only viable path" : "Closed"}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-ink-600">{detail}</p>
    </div>
  );
}
