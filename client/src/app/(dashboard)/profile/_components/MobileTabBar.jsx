"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartBarIcon,
  HomeIcon,
  PencilIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";

const tabClass = (active) =>
  `flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-[11px] font-medium transition-colors ${focusRing} ${
    active ? "bg-primary-100 text-primary-900 dark:bg-primary-900/20" : "text-secondary-500 hover:text-primary-900"
  }`;

// Phone-only bottom navigation. main gets matching bottom padding in the dashboard layout.
export default function MobileTabBar({ onMore }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="ناوبری پایین"
      className="md:hidden fixed inset-x-0 bottom-0 z-[9] border-t border-secondary-200 bg-secondary-0/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5 items-end px-2 pt-2 pb-2">
        <li className="flex justify-center">
          <Link href="/profile" className={tabClass(pathname === "/profile")} aria-current={pathname === "/profile" ? "page" : undefined}>
            <HomeIcon className="w-6 h-6" aria-hidden="true" />
            خانه
          </Link>
        </li>
        <li className="flex justify-center">
          <Link
            href="/profile/posts"
            className={tabClass(pathname.startsWith("/profile/posts") && pathname !== "/profile/posts/create")}
          >
            <PencilIcon className="w-6 h-6" aria-hidden="true" />
            پست‌ها
          </Link>
        </li>
        <li className="flex justify-center">
          <Link
            href="/profile/posts/create"
            aria-label="ایجاد پست جدید"
            className={`-mt-8 grid place-items-center w-14 h-14 rounded-full bg-primary-900 text-white shadow-lg shadow-primary-900/40 ring-4 ring-secondary-0 hover:bg-primary-700 ${focusRing}`}
          >
            <PlusIcon className="w-7 h-7" aria-hidden="true" />
          </Link>
        </li>
        <li className="flex justify-center">
          {/* TODO: no analytics page yet */}
          <Link href="#" className={tabClass(false)}>
            <ChartBarIcon className="w-6 h-6" aria-hidden="true" />
            آمار
          </Link>
        </li>
        <li className="flex justify-center">
          <button type="button" onClick={onMore} className={tabClass(false)}>
            <Squares2X2Icon className="w-6 h-6" aria-hidden="true" />
            بیشتر
          </button>
        </li>
      </ul>
    </nav>
  );
}
