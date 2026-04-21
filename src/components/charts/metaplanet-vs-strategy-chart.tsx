"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

const leverageData = [
  { entity: "Metaplanet", value: 13 },
  { entity: "Strategy", value: 35 },
];

const coverageData = [
  { entity: "Metaplanet", value: 420 },
  { entity: "Strategy", value: 41.4 },
];

const ACCENT = "#b8860b";
const CHART_3 = "#6b7280";
const INK_400 = "#8e9099";
const INK_200 = "#d4d5da";
const FONT = "Inter, system-ui, sans-serif";

export function MetaplanetVsStrategyChart() {
  return (
    <div className="mt-8 mb-4">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        Capital Structure Comparison
      </h4>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Leverage Ratio */}
        <div>
          <p className="text-xs font-medium text-ink-500 mb-2">
            Leverage Ratio (Debt + Pref / BTC NAV) - lower is better
          </p>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={leverageData}
                layout="vertical"
                margin={{ top: 8, right: 40, bottom: 8, left: 8 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={INK_200}
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
                  axisLine={{ stroke: INK_200 }}
                  tickLine={false}
                  domain={[0, 45]}
                  tickFormatter={(v: number) => `${v}%`}
                />
                <YAxis
                  type="category"
                  dataKey="entity"
                  tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
                  axisLine={{ stroke: INK_200 }}
                  tickLine={false}
                  width={90}
                />
                <Tooltip
                  contentStyle={{
                    fontFamily: FONT,
                    fontSize: 12,
                    borderRadius: 2,
                    border: `1px solid ${INK_200}`,
                  }}
                  formatter={(value) => [`${value}%`, "Leverage"]}
                />
                <Bar
                  dataKey="value"
                  isAnimationActive={false}
                  radius={[0, 2, 2, 0]}
                  barSize={32}
                >
                  {leverageData.map((entry, index) => (
                    <Cell
                      key={`lev-${index}`}
                      fill={entry.entity === "Metaplanet" ? ACCENT : CHART_3}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dividend Coverage */}
        <div>
          <p className="text-xs font-medium text-ink-500 mb-2">
            Dividend Coverage (BTC NAV / Annual Obligations) - higher is better
          </p>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={coverageData}
                layout="vertical"
                margin={{ top: 8, right: 40, bottom: 8, left: 8 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={INK_200}
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
                  axisLine={{ stroke: INK_200 }}
                  tickLine={false}
                  domain={[0, 500]}
                  tickFormatter={(v: number) => `${v} yr`}
                />
                <YAxis
                  type="category"
                  dataKey="entity"
                  tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
                  axisLine={{ stroke: INK_200 }}
                  tickLine={false}
                  width={90}
                />
                <Tooltip
                  contentStyle={{
                    fontFamily: FONT,
                    fontSize: 12,
                    borderRadius: 2,
                    border: `1px solid ${INK_200}`,
                  }}
                  formatter={(value) => [
                    `${value} years`,
                    "Coverage",
                  ]}
                />
                <Bar
                  dataKey="value"
                  isAnimationActive={false}
                  radius={[0, 2, 2, 0]}
                  barSize={32}
                >
                  {coverageData.map((entry, index) => (
                    <Cell
                      key={`cov-${index}`}
                      fill={entry.entity === "Metaplanet" ? ACCENT : CHART_3}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: ACCENT }} />
          <span className="text-xs text-ink-500" style={{ fontFamily: FONT }}>Metaplanet</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-sm" style={{ background: CHART_3 }} />
          <span className="text-xs text-ink-500" style={{ fontFamily: FONT }}>Strategy</span>
        </div>
      </div>
      <p className="mt-2 text-xs text-ink-400">
        Source: Metaplanet AGM 2026, strategy.com
      </p>
    </div>
  );
}
