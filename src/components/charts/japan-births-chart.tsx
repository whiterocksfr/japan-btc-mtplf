"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceDot,
} from "recharts";

const data = [
  { year: "1949", births: 2500 },
  { year: "1973", births: 2000 },
  { year: "1990", births: 1222 },
  { year: "2000", births: 1191 },
  { year: "2010", births: 1071 },
  { year: "2015", births: 1006 },
  { year: "2020", births: 841 },
  { year: "2022", births: 799 },
  { year: "2024", births: 686 },
  { year: "2025", births: 706 },
];

const CHART_2 = "#c27826";
const ACCENT = "#b8860b";
const INK_400 = "#8e9099";
const INK_200 = "#d4d5da";
const FONT = "Inter, system-ui, sans-serif";

export function JapanBirthsChart() {
  return (
    <div className="mt-8 mb-4">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
        Japan Annual Births (Thousands)
      </h4>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
                value: "Births (thousands)",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fontFamily: FONT, fill: INK_400 },
                offset: 4,
              }}
              domain={[0, 2800]}
              tickFormatter={(v: number) => v.toLocaleString()}
            />
            <Tooltip
              contentStyle={{
                fontFamily: FONT,
                fontSize: 12,
                borderRadius: 2,
                border: `1px solid ${INK_200}`,
              }}
              formatter={(value) => [
                `${Number(value).toLocaleString()}K`,
                "Annual Births",
              ]}
            />
            <Line
              type="monotone"
              dataKey="births"
              stroke={CHART_2}
              strokeWidth={2}
              dot={{ r: 3, fill: CHART_2, stroke: CHART_2 }}
              isAnimationActive={false}
            />
            <ReferenceDot
              x="2025"
              y={706}
              r={6}
              fill={ACCENT}
              stroke={ACCENT}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-ink-400">
        Source: Macrotrends Japan Birth Rate, Nippon.com
      </p>
    </div>
  );
}
