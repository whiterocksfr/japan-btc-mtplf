"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { year: "2015", cash: 56.0, equities: 10.0 },
  { year: "2020", cash: 54.2, equities: 10.8 },
  { year: "2024", cash: 50.9, equities: 13.4 },
  { year: "2025", cash: 49.1, equities: 13.9 },
];

const CHART_1 = "#2c5282";
const CHART_3 = "#6b7280";
const INK_400 = "#8e9099";
const INK_200 = "#d4d5da";
const FONT = "Inter, system-ui, sans-serif";

export function SavingsAllocationChart() {
  return (
    <div className="mt-8 mb-4">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        Japan Household Asset Allocation Shift
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
              dataKey="year"
              tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
              axisLine={{ stroke: INK_200 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
              axisLine={{ stroke: INK_200 }}
              tickLine={false}
              label={{
                value: "% of Household Assets",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fontFamily: FONT, fill: INK_400 },
                offset: 4,
              }}
              domain={[0, 65]}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                fontFamily: FONT,
                fontSize: 12,
                borderRadius: 2,
                border: `1px solid ${INK_200}`,
              }}
              formatter={(value, name) => [
                `${value}%`,
                name === "cash" ? "Cash & Deposits" : "Equities",
              ]}
            />
            <Legend
              wrapperStyle={{
                fontSize: 11,
                fontFamily: FONT,
              }}
              formatter={(value) =>
                value === "cash" ? "Cash & Deposits" : "Equities"
              }
            />
            <Bar
              dataKey="cash"
              fill={CHART_3}
              isAnimationActive={false}
              radius={[2, 2, 0, 0]}
            />
            <Bar
              dataKey="equities"
              fill={CHART_1}
              isAnimationActive={false}
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-ink-400">
        Source: BOJ Flow of Funds, Statista
      </p>
    </div>
  );
}
