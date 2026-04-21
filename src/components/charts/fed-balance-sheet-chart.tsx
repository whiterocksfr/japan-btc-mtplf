"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { year: "2007", value: 0.9 },
  { year: "2010", value: 2.3 },
  { year: "2014", value: 4.5 },
  { year: "2018", value: 3.8 },
  { year: "2020", value: 4.2 },
  { year: "2021", value: 8.0 },
  { year: "2022", value: 8.9 },
  { year: "2024", value: 7.4 },
  { year: "2026", value: 6.7 },
];

const CHART_1 = "#2c5282";
const INK_400 = "#8e9099";
const INK_200 = "#d4d5da";
const FONT = "Inter, system-ui, sans-serif";

export function FedBalanceSheetChart() {
  return (
    <div className="mt-8 mb-4">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        Federal Reserve Balance Sheet
      </h4>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 16, right: 24, bottom: 8, left: 8 }}
          >
            <defs>
              <linearGradient id="fedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_1} stopOpacity={0.15} />
                <stop offset="100%" stopColor={CHART_1} stopOpacity={0.02} />
              </linearGradient>
            </defs>
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
                value: "Trillions USD",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fontFamily: FONT, fill: INK_400 },
                offset: 4,
              }}
              domain={[0, 10]}
              tickFormatter={(v: number) => `$${v}T`}
            />
            <Tooltip
              contentStyle={{
                fontFamily: FONT,
                fontSize: 12,
                borderRadius: 2,
                border: `1px solid ${INK_200}`,
              }}
              formatter={(value) => [`$${value}T`, "Balance Sheet"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={CHART_1}
              strokeWidth={2}
              fill="url(#fedFill)"
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-ink-400">
        Source: Federal Reserve H.4.1, FRED WALCL
      </p>
    </div>
  );
}
