"use client";

import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  BookOpenIcon,
  ChevronDownIcon,
  LifebuoyIcon,
  PlusIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import SideBarNavs from "./SideBarNavs";
import Logo from "./Logo";
import KeyboardIllustration from "./illustrations/KeyboardIllustration";

const sectionTitle = "px-4 mb-2 text-sm font-medium text-secondary-500";
const quickLink = `flex items-center gap-x-3 rounded-lg px-4 py-2 text-sm text-secondary-600 hover:text-primary-900 ${focusRing}`;

// Visibility per context: xl = image 1, lg = image 2 (narrow), the Drawer (<lg) shows everything useful.
export default function SideBar({ onClose }) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-screen overflow-y-auto p-4 xl:p-5">
      <div className="flex items-center justify-between mb-6 xl:mb-8 px-2 pt-2">
        <Logo />
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن منو"
            className={`grid place-items-center w-9 h-9 rounded-full text-secondary-500 hover:bg-secondary-100 lg:hidden ${focusRing}`}
          >
            <XMarkIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        )}
      </div>

      <nav aria-label="منوی داشبورد" className="flex-1">
        <SideBarNavs />

        <hr className="my-5 border-secondary-200" />

        {/* Quick Links — xl + drawer */}
        <div className="lg:hidden xl:block">
          <p className={sectionTitle}>دسترسی سریع</p>
          <Link href="/" target="_blank" rel="noopener" className={quickLink}>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" aria-hidden="true" />
            مشاهده سایت
            <span className="sr-only">(در تب جدید)</span>
          </Link>
          {/* TODO: no docs / support pages yet */}
          <Link href="#" className={quickLink}>
            <BookOpenIcon className="w-5 h-5" aria-hidden="true" />
            مستندات
          </Link>
          <Link href="#" className={quickLink}>
            <LifebuoyIcon className="w-5 h-5" aria-hidden="true" />
            پشتیبانی
          </Link>
        </div>

        {/* Quick Actions — lg + drawer */}
        <div className="mt-4 xl:hidden">
          <p className={sectionTitle}>اقدام سریع</p>
          <Link
            href="/profile/posts/create"
            className={`mx-2 flex items-center justify-center gap-x-2 rounded-xl bg-primary-900 py-2.5 text-sm font-medium text-white hover:bg-primary-700 ${focusRing}`}
          >
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
            پست جدید
          </Link>
        </div>
      </nav>

      {/* Upgrade card */}
      <div className="my-6 rounded-2xl bg-primary-100/60 dark:bg-primary-900/15 p-4 text-center">
        <KeyboardIllustration className="w-36 mx-auto mb-2 xl:hidden" />
        <SparklesIcon className="hidden xl:block w-6 h-6 mx-auto mb-2 text-primary-900" aria-hidden="true" />
        <p className="font-bold text-secondary-900 mb-1">ارتقا به نسخه حرفه‌ای</p>
        <p className="text-xs text-secondary-500 leading-relaxed mb-3">امکانات بیشتر برای وبلاگ شما.</p>
        {/* TODO: no plans route yet */}
        <Link
          href="#"
          className={`inline-flex items-center gap-x-1.5 rounded-lg bg-primary-900 px-4 py-2 text-xs font-medium text-white hover:bg-primary-700 ${focusRing}`}
        >
          <span className="xl:hidden">مشاهده پلن‌ها</span>
          <span className="hidden xl:inline">ارتقا همین حالا</span>
          <ArrowLeftIcon className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      <Link
        href="/signin"
        className={`flex items-center gap-x-3 rounded-xl px-4 py-2.5 text-sm font-medium text-secondary-600 hover:text-error ${focusRing}`}
      >
        <ArrowLeftStartOnRectangleIcon className="w-5 h-5" aria-hidden="true" />
        خروج
      </Link>

      {/* User card — lg + drawer (xl has it in the top bar) */}
      <Link
        href="/profile"
        className={`xl:hidden mt-3 flex items-center gap-x-1 border-t border-secondary-200 pt-4 px-2 ${focusRing}`}
      >
        <Avatar src={user?.avatarUrl} width={36} />
        <span className="flex-1 min-w-0">
          <span className="block truncate text-sm font-bold text-secondary-900">{user?.name ?? "..."}</span>
          <span className="block text-xs text-secondary-500">مشاهده پروفایل</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-secondary-400" aria-hidden="true" />
      </Link>
    </div>
  );
}
