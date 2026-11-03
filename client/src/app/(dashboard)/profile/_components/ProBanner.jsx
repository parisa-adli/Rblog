import Link from "next/link";
import { ArrowLeftIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import RocketIllustration from "./illustrations/RocketIllustration";

export default function ProBanner() {
  return (
    <section className="relative h-full overflow-hidden rounded-2xl border border-secondary-200/70 bg-primary-100/60 dark:bg-primary-900/15 p-6 md:p-8">
      <div className="relative z-10 max-w-xs">
        <SparklesIcon className="w-7 h-7 text-warning mb-3" aria-hidden="true" />
        <h2 className="text-xl md:text-2xl font-extrabold text-secondary-900 mb-2">
          نسخه حرفه‌ای را باز کنید
        </h2>
        <p className="text-sm text-secondary-600 leading-relaxed mb-5">
          آمار پیشرفته، طراحی سفارشی و امکانات قدرتمندتر برای وبلاگ شما.
        </p>
        {/* TODO: no pricing/upgrade route yet */}
        <Link
          href="#"
          className={`inline-flex items-center gap-x-2 rounded-xl bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-700 transition-colors ${focusRing}`}
        >
          ارتقا همین حالا
          <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
      <RocketIllustration className="absolute left-0 bottom-0 w-40 md:w-52 opacity-90 sm:opacity-100 pointer-events-none" />
    </section>
  );
}
