"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { toPersianCompact, toPersianDigits } from "@/utils/numberformatter";

// fill + legend dot per slice, all theme tokens
const COLORS = [
  { fill: "rgb(var(--color-primary-900))", dot: "bg-primary-900" },
  { fill: "rgb(var(--color-success))", dot: "bg-success" },
  { fill: "rgb(var(--color-primary-400))", dot: "bg-primary-400" },
  { fill: "rgb(var(--color-warning))", dot: "bg-warning" },
];

// `data` = [{ id, title, count }], `total` = all posts
export default function CategoryDonut({ data, total }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative w-40 h-40 shrink-0" role="img" aria-label="سهم دسته‌بندی‌ها از پست‌ها">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="title"
              innerRadius="68%"
              outerRadius="100%"
              paddingAngle={2}
              stroke="none"
              isAnimationActive={false}
            >
              {data.map((d, i) => (
                <Cell key={d.id} fill={COLORS[i % COLORS.length].fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 grid place-content-center text-center">
          <span className="text-2xl font-extrabold text-secondary-900">{toPersianCompact(total)}</span>
          <span className="text-xs text-secondary-500">پست</span>
        </div>
      </div>
      <ul className="flex-1 w-full space-y-3">
        {data.map((d, i) => (
          <li key={d.id} className="flex items-center gap-x-3 text-sm">
            <span className={`w-2.5 h-2.5 rounded-full ${COLORS[i % COLORS.length].dot}`} aria-hidden="true" />
            <span className="flex-1 text-secondary-700">{d.title}</span>
            <span className="font-bold text-secondary-900">
              {toPersianDigits(Math.round((d.count / total) * 100))}٪
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
