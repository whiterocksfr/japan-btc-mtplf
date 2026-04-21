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
  { date: "Jan 5", yield: 0.0 },
  { date: "Feb 2", yield: 0.3 },
  { date: "Mar 2", yield: 0.4 },
  { date: "Mar 9", yield: 1.2 },
  { date: "Mar 16", yield: 3.4 },
  { date: "Mar 23", yield: 3.4 },
  { date: "Apr 6", yield: 3.7 },
  { date: "Apr 13", yield: 5.6 },
  { date: "Apr 20", yield: 9.5 },
];

const ACCENT = "#b8860b";
const INK_400 = "#8e9099";
const INK_200 = "#d4d5da";
const FONT = "Inter, system-ui, sans-serif";

export function BtcYieldChart() {
  return (
    <div className="mt-8 mb-4">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        Strategy BTC Yield YTD 2026
      </h4>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 16, right: 24, bottom: 8, left: 8 }}
          >
            <defs>
              <linearGradient id="yieldFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={ACCENT} stopOpacity={0.1} />
                <stop offset="100%" stopColor={ACCENT} stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={INK_200}
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
              axisLine={{ stroke: INK_200 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fontFamily: FONT, fill: INK_400 }}
              axisLine={{ stroke: INK_200 }}
              tickLine={false}
              label={{
                value: "BTC Yield YTD (%)",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fontFamily: FONT, fill: INK_400 },
                offset: 4,
              }}
              domain={[0, 11]}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                fontFamily: FONT,
                fontSize: 12,
                borderRadius: 2,
                border: `1px solid ${INK_200}`,
              }}
              formatter={(value) => [`${value}%`, "BTC Yield YTD"]}
            />
            <Area
              type="monotone"
              dataKey="yield"
              stroke={ACCENT}
              strokeWidth={2}
              fill="url(#yieldFill)"
              isAnimationActive={false}
              dot={{ r: 3, fill: ACCENT, stroke: ACCENT }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-ink-400">
        Source: strategy.com/purchases, SEC 8-K filings
      </p>
    </div>
  );
}
