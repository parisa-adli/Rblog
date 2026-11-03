import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";

export const cardClass =
  "rounded-2xl border border-secondary-200/70 bg-secondary-0 shadow-[0_8px_30px_-12px] shadow-primary-900/10 dark:shadow-none";

export function Card({ className = "", children }) {
  return <section className={`${cardClass} p-5 md:p-6 ${className}`}>{children}</section>;
}

export function CardHeader({ icon: Icon, title, href, children }) {
  return (
    <div className="flex items-center justify-between gap-3 mb-5">
      <h2 className="flex items-center gap-x-3 text-base md:text-lg font-bold text-secondary-900">
        {Icon && <Icon className="w-6 h-6 text-primary-900" aria-hidden="true" />}
        {title}
      </h2>
      {children}
      {href && (
        <Link
          href={href}
          className={`inline-flex items-center gap-x-1 text-sm font-medium text-primary-900 hover:text-primary-700 ${focusRing}`}
        >
          مشاهده همه
          <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
