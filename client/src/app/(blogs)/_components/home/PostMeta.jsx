import { ClockIcon } from "@heroicons/react/24/outline";
import { toPersianDigits } from "@/utils/numberformatter";

export const focusRing =
  "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-0";

export function ReadingTime({ minutes }) {
  return (
    <span className="inline-flex items-center gap-x-1 text-xs text-secondary-500">
      <ClockIcon className="w-4 h-4" aria-hidden="true" />
      {toPersianDigits(minutes ?? 0)} دقیقه مطالعه
    </span>
  );
}

export function SectionHeading({ label, title, children }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <div>
        <p className="text-sm font-bold text-primary-900 mb-2">{label}</p>
        <h2 className="text-2xl md:text-4xl font-black text-secondary-900 leading-relaxed">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
