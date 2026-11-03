"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartBarIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { toPersianCompact, toPersianDigits } from "@/utils/numberformatter";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import { Card, CardHeader } from "./Card";

const RANGES = [
  { key: "7D", label: "۷ روز" },
  { key: "30D", label: "۳۰ روز" },
  { key: "90D", label: "۹۰ روز" },
  { key: "1Y", label: "۱ سال" },
];

// recharts props accept CSS colours, so theme tokens stay in globals.css
const token = (name) => `rgb(var(--color-${name}))`;

function ViewsTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  return (
    <span className="block rounded-lg bg-primary-900 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
      {toPersianCompact(payload[0].value)} بازدید
    </span>
  );
}

// `series` = { "7D": [{ label, views }], "30D": [...], ... }
export default function AnalyticsChart({ series }) {
  const [range, setRange] = useState("7D");
  const data = series[range] ?? [];

  return (
    <Card className="h-full">
      <CardHeader icon={ChartBarIcon} title="آمار وبلاگ">
        <div role="group" aria-label="بازه زمانی" className="hidden md:flex gap-1.5">
          {RANGES.map((r) => (
            <button
              key={r.key}
              type="button"
              aria-pressed={range === r.key}
              onClick={() => setRange(r.key)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${focusRing} ${
                range === r.key
                  ? "bg-primary-900 text-white"
                  : "bg-secondary-100 text-secondary-600 hover:bg-primary-100 hover:text-primary-900"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
        <label className="relative md:hidden">
          <span className="sr-only">بازه زمانی</span>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className={`appearance-none rounded-full bg-primary-100 dark:bg-primary-900/20 py-1 pr-3 pl-7 text-xs font-medium text-primary-900 ${focusRing}`}
          >
            {RANGES.map((r) => (
              <option key={r.key} value={r.key}>
                {r.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-primary-900" aria-hidden="true" />
        </label>
      </CardHeader>

      <div className="h-56 md:h-64 -mx-2" role="img" aria-label={`نمودار بازدید ${RANGES.find((r) => r.key === range).label} اخیر`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 36, right: 8, bottom: 0, left: 8 }}>
            <defs>
              <linearGradient id="analyticsFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={token("primary-900")} stopOpacity={0.3} />
                <stop offset="100%" stopColor={token("primary-900")} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={token("secondary-200")} />
            {/* reversed + right-hand Y axis = mirrored for RTL */}
            <XAxis
              dataKey="label"
              reversed
              tickLine={false}
              axisLine={false}
              tick={{ fill: token("secondary-500"), fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              width={52}
              tick={{ fill: token("secondary-500"), fontSize: 12 }}
              tickFormatter={(v) => (v === 0 ? toPersianDigits(0) : toPersianCompact(v))}
            />
            <Tooltip
              content={<ViewsTooltip />}
              cursor={{ stroke: token("primary-900"), strokeDasharray: "4 4" }}
              position={{ y: 0 }}
              wrapperStyle={{ outline: "none" }}
            />
            <Area
              type="monotone"
              dataKey="views"
              stroke={token("primary-900")}
              strokeWidth={3}
              fill="url(#analyticsFill)"
              activeDot={{ r: 6, fill: token("primary-900"), stroke: token("secondary-0"), strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
