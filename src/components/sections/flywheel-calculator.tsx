"use client";

import { useState, useMemo } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

// Defaults from analytics.metaplanet.jp (April 21, 2026)
const LEVERAGE_CAP = 25; // Metaplanet's self-imposed 25% amplification cap
// ~5% of capital raises allocated to Bitcoin Income Generation (CSP collateral).
// CSP capital eventually converts to BTC through put assignments at discounted
// prices while generating premium income. Model assumes 100% BTC conversion.

const DEFAULTS = {
  currentBtc: 40177,
  currentBasicShares: 1274, // millions
  currentDilutedShares: 1624, // millions
  currentMercuryDiv: 7.26, // $M annual
  currentDebt: 247, // $M
  currentPreferred: 148.21, // $M (MERCURY)
  btcPrice: 85000,
  marsRaise: 500, // $M
  marsRate: 5.0, // %
  equityRaise: 300, // $M
  equityMnav: 1.5, // x
  marsRaise2: 500, // $M
  marsRate2: 5.0, // %
  equityRaise2: 200, // $M
  equityMnav2: 2.0, // x
};

function fmt(n: number, decimals = 0): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
  prefix?: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <label className="text-[0.6875rem] font-semibold uppercase tracking-wider text-ink-400">
          {label}
        </label>
        <span className="font-mono text-sm font-semibold text-ink-800 tabular-nums">
          {prefix}
          {fmt(value, step < 1 ? 1 : 0)}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-ink-200 rounded-sm appearance-none cursor-pointer accent-ink-800"
      />
      <div className="flex justify-between text-[0.6rem] text-ink-300 mt-0.5">
        <span>
          {prefix}
          {fmt(min)}
          {unit}
        </span>
        <span>
          {prefix}
          {fmt(max)}
          {unit}
        </span>
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight,
  sublabel,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  sublabel?: string;
}) {
  return (
    <div
      className={`flex justify-between items-baseline py-2.5 border-b border-ink-100 ${
        highlight ? "bg-ink-50 -mx-3 px-3 rounded-sm" : ""
      }`}
    >
      <div>
        <span
          className={`text-sm ${
            highlight ? "font-semibold text-ink-900" : "text-ink-600"
          }`}
        >
          {label}
        </span>
        {sublabel && (
          <span className="text-xs text-ink-400 ml-2">{sublabel}</span>
        )}
      </div>
      <span
        className={`font-mono text-sm tabular-nums ${
          highlight ? "font-bold text-ink-900" : "font-semibold text-ink-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export function FlywheelCalculator() {
  const [btcPrice, setBtcPrice] = useState(DEFAULTS.btcPrice);
  const [currentBtc, setCurrentBtc] = useState(DEFAULTS.currentBtc);
  const [currentShares, setCurrentShares] = useState(
    DEFAULTS.currentDilutedShares
  );
  const [existingDiv, setExistingDiv] = useState(DEFAULTS.currentMercuryDiv);

  // Cycle 1: MARS preferred raise
  const [marsRaise, setMarsRaise] = useState(DEFAULTS.marsRaise);
  const [marsRate, setMarsRate] = useState(DEFAULTS.marsRate);
  const [marsPrice, setMarsPrice] = useState(DEFAULTS.btcPrice);

  // Cycle 2: Equity raise at mNAV premium
  const [equityRaise, setEquityRaise] = useState(DEFAULTS.equityRaise);
  const [equityMnav, setEquityMnav] = useState(DEFAULTS.equityMnav);
  const [equityPrice, setEquityPrice] = useState(95000);

  // Cycle 3: Second MARS raise
  const [marsRaise2, setMarsRaise2] = useState(DEFAULTS.marsRaise2);
  const [marsRate2, setMarsRate2] = useState(DEFAULTS.marsRate2);
  const [marsPrice2, setMarsPrice2] = useState(110000);

  // Cycle 4: Second equity raise
  const [equityRaise2, setEquityRaise2] = useState(DEFAULTS.equityRaise2);
  const [equityMnav2, setEquityMnav2] = useState(DEFAULTS.equityMnav2);
  const [equityPrice2, setEquityPrice2] = useState(130000);

  // Valuation
  const [valuationMnav, setValuationMnav] = useState(1.5);

  const results = useMemo(() => {
    // Baseline
    const baseSats = Math.round((currentBtc / (currentShares * 1e6)) * 1e8);

    // Cycle 1: MARS (preferred, non-dilutive)
    // 100% eventually converts to BTC (~95% direct purchase, ~5% via CSP assignments at discount)
    const c1BtcAdded = marsRaise > 0 ? (marsRaise * 1e6) / marsPrice : 0;
    const c1TotalBtc = currentBtc + c1BtcAdded;
    const c1Shares = currentShares; // no change
    const c1Sats = Math.round((c1TotalBtc / (c1Shares * 1e6)) * 1e8);
    const c1Yield = ((c1Sats - baseSats) / baseSats) * 100;
    const c1AnnualDiv = existingDiv + (marsRaise * marsRate) / 100;

    // Cycle 2: Equity at mNAV premium
    const c2NavPerShare = (c1TotalBtc * equityPrice) / (c1Shares * 1e6);
    const c2SharePrice = c2NavPerShare * equityMnav;
    const c2NewShares = equityRaise > 0 ? (equityRaise * 1e6) / c2SharePrice / 1e6 : 0;
    const c2BtcAdded = equityRaise > 0 ? (equityRaise * 1e6) / equityPrice : 0;
    const c2TotalBtc = c1TotalBtc + c2BtcAdded;
    const c2Shares = c1Shares + c2NewShares;
    const c2Sats = Math.round((c2TotalBtc / (c2Shares * 1e6)) * 1e8);
    const c2Yield = ((c2Sats - c1Sats) / c1Sats) * 100;
    const c2AnnualDiv = c1AnnualDiv; // equity has no dividend

    // Cycle 3: Second MARS (preferred, non-dilutive)
    const c3BtcAdded = marsRaise2 > 0 ? (marsRaise2 * 1e6) / marsPrice2 : 0;
    const c3TotalBtc = c2TotalBtc + c3BtcAdded;
    const c3Shares = c2Shares; // no change
    const c3Sats = Math.round((c3TotalBtc / (c3Shares * 1e6)) * 1e8);
    const c3Yield = ((c3Sats - c2Sats) / c2Sats) * 100;
    const c3AnnualDiv = c2AnnualDiv + (marsRaise2 * marsRate2) / 100;

    // Cycle 4: Second equity raise
    const c4NavPerShare = (c3TotalBtc * equityPrice2) / (c3Shares * 1e6);
    const c4SharePrice = c4NavPerShare * equityMnav2;
    const c4NewShares = equityRaise2 > 0 ? (equityRaise2 * 1e6) / c4SharePrice / 1e6 : 0;
    const c4BtcAdded = equityRaise2 > 0 ? (equityRaise2 * 1e6) / equityPrice2 : 0;
    const c4TotalBtc = c3TotalBtc + c4BtcAdded;
    const c4Shares = c3Shares + c4NewShares;
    const c4Sats = Math.round((c4TotalBtc / (c4Shares * 1e6)) * 1e8);
    const c4Yield = ((c4Sats - c3Sats) / c3Sats) * 100;
    const c4AnnualDiv = c3AnnualDiv;

    // Leverage & Amplification per cycle
    const debt = DEFAULTS.currentDebt; // debt stays constant (MARS is preferred, not debt)
    const basePref = DEFAULTS.currentPreferred;
    const baseNav = (currentBtc * marsPrice) / 1e6; // $M
    const baseLeverage = (debt / baseNav) * 100;
    const baseAmplification = ((debt + basePref) / baseNav) * 100;

    const c1Pref = basePref + marsRaise;
    const c1Nav = (c1TotalBtc * marsPrice) / 1e6;
    const c1Leverage = (debt / c1Nav) * 100;
    const c1Amplification = ((debt + c1Pref) / c1Nav) * 100;

    const c2Pref = c1Pref; // equity doesn't add preferred
    const c2Nav = (c2TotalBtc * equityPrice) / 1e6;
    const c2Leverage = (debt / c2Nav) * 100;
    const c2Amplification = ((debt + c2Pref) / c2Nav) * 100;

    const c3Pref = c2Pref + marsRaise2;
    const c3Nav = (c3TotalBtc * marsPrice2) / 1e6;
    const c3Leverage = (debt / c3Nav) * 100;
    const c3Amplification = ((debt + c3Pref) / c3Nav) * 100;

    const c4Pref = c3Pref; // equity doesn't add preferred
    const c4Nav = (c4TotalBtc * equityPrice2) / 1e6;
    const c4Leverage = (debt / c4Nav) * 100;
    const c4Amplification = ((debt + c4Pref) / c4Nav) * 100;

    // Remaining capacity under 25% cap
    const finalNav = c4Nav;
    const maxAmplification = (LEVERAGE_CAP / 100) * finalNav; // $M
    const currentObligations = debt + c4Pref;
    const remainingCapacity = Math.max(0, maxAmplification - currentObligations);

    // Cumulative
    const totalBtcAdded = c4TotalBtc - currentBtc;
    const totalCapital =
      marsRaise + equityRaise + marsRaise2 + equityRaise2;
    const cumYield = ((c4Sats - baseSats) / baseSats) * 100;
    const dilutionPct =
      ((c4Shares - currentShares) / currentShares) * 100;
    const btcGrowthPct = (totalBtcAdded / currentBtc) * 100;
    const finalBtcPrice = equityPrice2;
    const newBtcNav = (c4TotalBtc * finalBtcPrice) / 1e9;
    const coverageYears = (c4TotalBtc * finalBtcPrice) / (c4AnnualDiv * 1e6);

    return {
      baseSats,
      baseLeverage,
      baseAmplification,
      cycles: [
        {
          label: "Cycle 1: MARS Preferred",
          btcAdded: c1BtcAdded,
          totalBtc: c1TotalBtc,
          shares: c1Shares,
          sats: c1Sats,
          yield: c1Yield,
          annualDiv: c1AnnualDiv,
          leverage: c1Leverage,
          amplification: c1Amplification,
        },
        {
          label: "Cycle 2: Equity at Premium",
          btcAdded: c2BtcAdded,
          totalBtc: c2TotalBtc,
          shares: c2Shares,
          sats: c2Sats,
          yield: c2Yield,
          annualDiv: c2AnnualDiv,
          leverage: c2Leverage,
          amplification: c2Amplification,
        },
        {
          label: "Cycle 3: MARS Preferred",
          btcAdded: c3BtcAdded,
          totalBtc: c3TotalBtc,
          shares: c3Shares,
          sats: c3Sats,
          yield: c3Yield,
          annualDiv: c3AnnualDiv,
          leverage: c3Leverage,
          amplification: c3Amplification,
        },
        {
          label: "Cycle 4: Equity at Premium",
          btcAdded: c4BtcAdded,
          totalBtc: c4TotalBtc,
          shares: c4Shares,
          sats: c4Sats,
          yield: c4Yield,
          annualDiv: c4AnnualDiv,
          leverage: c4Leverage,
          amplification: c4Amplification,
        },
      ],
      totalBtcAdded,
      totalCapital,
      finalBtc: c4TotalBtc,
      finalShares: c4Shares,
      finalSats: c4Sats,
      cumYield,
      dilutionPct,
      btcGrowthPct,
      finalAnnualDiv: c4AnnualDiv,
      newBtcNav,
      coverageYears,
      finalLeverage: c4Leverage,
      finalAmplification: c4Amplification,
      remainingCapacity,
      exceedsCap: c4Amplification > LEVERAGE_CAP,
    };
  }, [
    btcPrice,
    currentBtc,
    currentShares,
    existingDiv,
    marsRaise,
    marsRate,
    marsPrice,
    equityRaise,
    equityMnav,
    equityPrice,
    marsRaise2,
    marsRate2,
    marsPrice2,
    equityRaise2,
    equityMnav2,
    equityPrice2,
  ]);

  return (
    <SectionWrapper id="flywheel-calculator" variant="white">
      <div className="max-w-4xl mx-auto">
        <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-ink-400 mb-4">
          Interactive Model
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 leading-tight">
          Flywheel Calculator
        </h2>
        <div className="mt-2 h-px w-12 bg-accent" />

        <p className="mt-6 text-base leading-relaxed text-ink-600">
          Adjust the assumptions below to model how alternating cycles of
          preferred (MARS) and equity (warrant) raises compound BTC-per-share.
          All math updates in real time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Inputs */}
          <div className="space-y-8">
            {/* Baseline */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b border-ink-200">
                Baseline Assumptions
              </h4>
              <div className="space-y-5">
                <SliderInput
                  label="Current BTC Holdings"
                  value={currentBtc}
                  onChange={setCurrentBtc}
                  min={10000}
                  max={100000}
                  step={1000}
                />
                <SliderInput
                  label="Current Diluted Shares (M)"
                  value={currentShares}
                  onChange={setCurrentShares}
                  min={500}
                  max={5000}
                  step={50}
                />
                <SliderInput
                  label="Existing Annual Dividend ($M)"
                  value={existingDiv}
                  onChange={setExistingDiv}
                  min={0}
                  max={50}
                  step={0.5}
                  prefix="$"
                  unit="M"
                />
              </div>
            </div>

            {/* Cycle 1 */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b border-ink-200">
                Cycle 1: MARS Preferred Raise
              </h4>
              <div className="space-y-5">
                <SliderInput
                  label="BTC Price at Raise"
                  value={marsPrice}
                  onChange={setMarsPrice}
                  min={50000}
                  max={300000}
                  step={5000}
                  prefix="$"
                />
                <SliderInput
                  label="MARS Raise Amount"
                  value={marsRaise}
                  onChange={setMarsRaise}
                  min={0}
                  max={5000}
                  step={50}
                  prefix="$"
                  unit="M"
                />
                <SliderInput
                  label="MARS Dividend Rate"
                  value={marsRate}
                  onChange={setMarsRate}
                  min={1}
                  max={8}
                  step={0.5}
                  unit="%"
                />
              </div>
            </div>

            {/* Cycle 2 */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b border-ink-200">
                Cycle 2: Equity Raise at mNAV Premium
              </h4>
              <div className="space-y-5">
                <SliderInput
                  label="BTC Price at Raise"
                  value={equityPrice}
                  onChange={setEquityPrice}
                  min={50000}
                  max={300000}
                  step={5000}
                  prefix="$"
                />
                <SliderInput
                  label="Equity Raise Amount"
                  value={equityRaise}
                  onChange={setEquityRaise}
                  min={0}
                  max={3000}
                  step={50}
                  prefix="$"
                  unit="M"
                />
                <SliderInput
                  label="mNAV at Time of Raise"
                  value={equityMnav}
                  onChange={setEquityMnav}
                  min={1.0}
                  max={4.0}
                  step={0.1}
                  unit="x"
                />
              </div>
            </div>

            {/* Cycle 3 */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b border-ink-200">
                Cycle 3: Second MARS Preferred Raise
              </h4>
              <div className="space-y-5">
                <SliderInput
                  label="BTC Price at Raise"
                  value={marsPrice2}
                  onChange={setMarsPrice2}
                  min={50000}
                  max={300000}
                  step={5000}
                  prefix="$"
                />
                <SliderInput
                  label="MARS Raise Amount"
                  value={marsRaise2}
                  onChange={setMarsRaise2}
                  min={0}
                  max={5000}
                  step={50}
                  prefix="$"
                  unit="M"
                />
                <SliderInput
                  label="MARS Dividend Rate"
                  value={marsRate2}
                  onChange={setMarsRate2}
                  min={1}
                  max={8}
                  step={0.5}
                  unit="%"
                />
              </div>
            </div>

            {/* Cycle 4 */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b border-ink-200">
                Cycle 4: Second Equity Raise
              </h4>
              <div className="space-y-5">
                <SliderInput
                  label="BTC Price at Raise"
                  value={equityPrice2}
                  onChange={setEquityPrice2}
                  min={50000}
                  max={300000}
                  step={5000}
                  prefix="$"
                />
                <SliderInput
                  label="Equity Raise Amount"
                  value={equityRaise2}
                  onChange={setEquityRaise2}
                  min={0}
                  max={3000}
                  step={50}
                  prefix="$"
                  unit="M"
                />
                <SliderInput
                  label="mNAV at Time of Raise"
                  value={equityMnav2}
                  onChange={setEquityMnav2}
                  min={1.0}
                  max={4.0}
                  step={0.1}
                  unit="x"
                />
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div>
            <div className="lg:sticky lg:top-16">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4 pb-2 border-b-2 border-ink-200">
                Results
              </h4>

              {/* Per-cycle results */}
              <div className="mb-6">
                <ResultRow
                  label="Baseline"
                  value={`${fmt(currentBtc)} BTC / ${fmt(results.baseSats)} sats`}
                  sublabel="per diluted share"
                />
                {results.cycles.map((c, i) => (
                  <ResultRow
                    key={i}
                    label={c.label}
                    value={`+${fmt(Math.round(c.btcAdded))} BTC / ${fmt(c.sats)} sats`}
                    sublabel={`${fmt(Math.round(c.totalBtc))} total / +${c.yield.toFixed(1)}% yield`}
                  />
                ))}
              </div>

              {/* Summary */}
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3 pb-2 border-b-2 border-ink-200">
                Cumulative Impact
              </h4>

              <ResultRow
                label="Total Capital Raised"
                value={`$${fmt(results.totalCapital)}M`}
              />
              <ResultRow
                label="Total BTC Added"
                value={fmt(Math.round(results.totalBtcAdded))}
              />
              <ResultRow
                label="Final BTC Holdings"
                value={fmt(Math.round(results.finalBtc))}
                highlight
              />
              <ResultRow
                label="Final Diluted Shares"
                value={`${fmt(results.finalShares, 0)}M`}
              />
              <ResultRow
                label="Final Sats/Diluted Share"
                value={fmt(results.finalSats)}
                highlight
              />
              <ResultRow
                label="Cumulative BTC Yield"
                value={`+${results.cumYield.toFixed(1)}%`}
                highlight
              />
              <ResultRow
                label="BTC Growth"
                value={`+${results.btcGrowthPct.toFixed(1)}%`}
              />
              <ResultRow
                label="Share Dilution"
                value={`+${results.dilutionPct.toFixed(1)}%`}
              />
              <ResultRow
                label="BTC Growth / Dilution Ratio"
                value={`${(results.btcGrowthPct / Math.max(results.dilutionPct, 0.1)).toFixed(1)}x`}
                sublabel="higher is better"
              />

              <div className="mt-4 pt-3 border-t border-ink-200">
                <ResultRow
                  label="Annual Dividend Obligation"
                  value={`$${results.finalAnnualDiv.toFixed(1)}M`}
                />
                <ResultRow
                  label="BTC NAV"
                  value={`$${results.newBtcNav.toFixed(1)}B`}
                />
                <ResultRow
                  label="Dividend Coverage"
                  value={`${results.coverageYears.toFixed(0)} years`}
                  highlight
                />
              </div>

              {/* Leverage & Amplification */}
              <div className="mt-4 pt-3 border-t border-ink-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3">
                  Leverage & Amplification
                </h4>
                <ResultRow
                  label="Leverage Ratio"
                  value={`${results.finalLeverage.toFixed(1)}%`}
                  sublabel="Debt / BTC NAV"
                />
                <ResultRow
                  label="Amplification Ratio"
                  value={`${results.finalAmplification.toFixed(1)}%`}
                  sublabel={`(Debt + Pref) / BTC NAV`}
                  highlight={results.exceedsCap}
                />
                <ResultRow
                  label={`25% Cap`}
                  value={results.exceedsCap ? "EXCEEDED" : `$${fmt(Math.round(results.remainingCapacity))}M remaining`}
                  sublabel="Self-imposed amplification limit"
                  highlight={results.exceedsCap}
                />
                {results.exceedsCap && (
                  <p className="text-xs text-red-600 mt-2 font-medium">
                    This scenario exceeds Metaplanet&apos;s 25% amplification cap.
                    Reduce MARS raise amounts or increase equity raises to bring
                    amplification below the cap.
                  </p>
                )}
              </div>

              {/* Valuation */}
              <div className="mt-6 pt-4 border-t-2 border-ink-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-4">
                  Implied Valuation
                </h4>

                <SliderInput
                  label="Assumed mNAV Multiple"
                  value={valuationMnav}
                  onChange={setValuationMnav}
                  min={0.5}
                  max={4.0}
                  step={0.1}
                  unit="x"
                />

                <div className="mt-4">
                  <ResultRow
                    label="Implied Market Cap"
                    value={`$${(results.newBtcNav * valuationMnav).toFixed(1)}B`}
                  />
                  <ResultRow
                    label="Implied Share Price"
                    value={`$${((results.newBtcNav * valuationMnav * 1e9) / (results.finalShares * 1e6)).toFixed(2)}`}
                    highlight
                  />
                  <ResultRow
                    label="Current Share Price"
                    value="$2.13"
                    sublabel="April 21, 2026"
                  />
                  <ResultRow
                    label="Implied Return"
                    value={`${((((results.newBtcNav * valuationMnav * 1e9) / (results.finalShares * 1e6)) / 2.13 - 1) * 100).toFixed(0)}%`}
                    highlight
                  />
                </div>
              </div>

              <p className="mt-4 text-[0.625rem] text-ink-300 leading-relaxed">
                Preferred raises (MARS) increase BTC without adding shares.
                Equity raises add shares but are BTC Yield accretive when mNAV
                &gt; 1.0x. Set any raise to $0 to skip that cycle. Model
                ~95% of capital raised goes to direct BTC purchases.
                ~5% is allocated to the Bitcoin Income Generation portfolio
                as cash-secured put (CSP) collateral. This capital eventually
                converts to BTC through put assignments at discounted prices
                while generating premium income that helps cover preferred
                dividend obligations. Model assumes 100% BTC conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
