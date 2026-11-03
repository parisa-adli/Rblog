"use client";

import { useId } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import {
  ArrowUpIcon,
  ChatBubbleOvalLeftIcon,
  DocumentTextIcon,
  EyeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { toPersianCompact, toPersianDigits } from "@/utils/numberformatter";
import { cardClass } from "./Card";

// icon + circle/sparkline colour per card, picked by a string `type`
// (a server component can't pass icon components to this client component)
const types = {
  posts: { icon: DocumentTextIcon, circle: "bg-primary-100 text-primary-900 dark:bg-primary-900/20", line: "text-primary-900" },
  views: { icon: EyeIcon, circle: "bg-success/10 text-success", line: "text-success" },
  users: { icon: UserGroupIcon, circle: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400", line: "text-blue-500" },
  comments: { icon: ChatBubbleOvalLeftIcon, circle: "bg-warning/10 text-warning", line: "text-warning" },
};

function Sparkline({ data, className }) {
  const id = "spark" + useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <div className={`h-10 w-24 md:w-28 ${className}`} aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity={0.25} />
              <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke="currentColor"
            strokeWidth={2}
            fill={`url(#${id})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function StatCard({ type, label, value, trend, series }) {
  const t = types[type];
  const Icon = t.icon;
  return (
    <div
      className={`${cardClass} p-4 md:p-5 flex flex-col xl:flex-row gap-3 xl:gap-4 transition-transform hover:-translate-y-0.5`}
    >
      <span className={`grid place-items-center shrink-0 w-12 h-12 xl:w-16 xl:h-16 rounded-full ${t.circle}`}>
        <Icon className="w-6 h-6 xl:w-7 xl:h-7" aria-hidden="true" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-2xl xl:text-3xl font-extrabold text-secondary-900">
          {toPersianCompact(value)}
        </p>
        <p className="text-sm text-secondary-500 mb-2">{label}</p>
        <div className="flex items-end justify-between gap-2">
          <span className="inline-flex items-center gap-x-0.5 text-xs font-bold text-success" dir="ltr">
            <ArrowUpIcon className="w-3 h-3" aria-hidden="true" />
            {toPersianDigits(trend)}٪
            <span className="sr-only">رشد</span>
          </span>
          <Sparkline data={series} className={t.line} />
        </div>
      </div>
    </div>
  );
}
