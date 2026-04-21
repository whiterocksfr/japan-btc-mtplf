"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { halving: "2016", rate: 4.0 },
  { halving: "2020", rate: 1.7 },
  { halving: "2024", rate: 0.83 },
  { halving: "2028 (est.)", rate: 0.4 },
  { halving: "2032 (est.)", rate: 0.2 },
];

const CHART_1 = "#2c5282";
const CHART_3 = "#6b7280";
const ACCENT = "#b8860b";
const INK_400 = "#8e9099";
const INK_200 = "#d4d5da";
const FONT = "Inter, system-ui, sans-serif";

export function HalvingInflationChart() {
  return (
    <div className="mt-8 mb-4">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        Bitcoin Inflation Rate by Halving Epoch
      </h4>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 16, right: 24, bottom: 8, left: 8 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={INK_200}
              vertical={false}
            />
            <XAxis
              dataKey="halving"
              tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
              axisLine={{ stroke: INK_200 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
              axisLine={{ stroke: INK_200 }}
              tickLine={false}
              label={{
                value: "Inflation Rate (%)",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fontFamily: FONT, fill: INK_400 },
                offset: 4,
              }}
              domain={[0, 5]}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                fontFamily: FONT,
                fontSize: 12,
                borderRadius: 2,
                border: `1px solid ${INK_200}`,
              }}
              formatter={(value) => [`${value}%`, "Inflation Rate"]}
            />
            <ReferenceLine
              y={1.6}
              stroke={CHART_3}
              strokeDasharray="6 4"
              label={{
                value: "Gold (~1.6%)",
                position: "right",
                style: {
                  fontSize: 11,
                  fontFamily: FONT,
                  fill: CHART_3,
                  fontWeight: 500,
                },
              }}
            />
            <Bar
              dataKey="rate"
              isAnimationActive={false}
              radius={[2, 2, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.halving === "2024" ? ACCENT : CHART_1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-ink-400">
        Source: Halving schedule data from Swan Bitcoin, CoinWarz
      </p>
    </div>
  );
}
