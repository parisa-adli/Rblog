"use client";

import { useAuth } from "@/context/AuthContext";
import LaptopIllustration from "./illustrations/LaptopIllustration";

export default function WelcomeHeader() {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0];

  return (
    <div className="relative flex items-center gap-4 overflow-hidden">
      <div className="flex-1 min-w-0">
        <p className="inline-block mb-2 xl:mb-3 rounded-full bg-primary-100 dark:bg-primary-900/20 px-3 py-1 text-xs md:text-sm font-medium text-primary-900 xl:bg-transparent xl:dark:bg-transparent xl:p-0 xl:font-bold xl:tracking-wide">
          خوش برگشتی
          {firstName && <span className="hidden xl:inline">، {firstName}</span>}!
        </p>
        <h1 className="max-w-[9em] md:max-w-none text-2xl md:text-4xl xl:text-5xl font-black text-secondary-900 leading-tight mb-2 xl:mb-3">
          داشبورد وبلاگ شما
        </h1>
        <p className="max-w-[16em] md:max-w-none text-sm md:text-lg text-secondary-500">
          ببینید امروز در وبلاگ‌تان چه خبر است.
        </p>
      </div>
      <LaptopIllustration className="w-32 sm:w-44 md:w-64 xl:w-[22rem] shrink-0 -my-2" />
    </div>
  );
}
