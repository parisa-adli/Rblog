"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/context/AuthContext";
import Drawer from "@/ui/Drawer";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import SideBar from "./SideBar";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import MobileTabBar from "./MobileTabBar";

const iconBtn = `relative grid place-items-center w-10 h-10 rounded-full text-secondary-700 hover:bg-secondary-0 hover:text-primary-900 transition-colors ${focusRing}`;

function SearchBox() {
  const router = useRouter();
  const inputRef = useRef(null);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const q = inputRef.current.value.trim();
    router.push(q ? `/profile/posts?search=${encodeURIComponent(q)}` : "/profile/posts");
  }

  return (
    <form role="search" onSubmit={onSubmit} className="relative w-full max-w-md">
      <label htmlFor="dashboard-search" className="sr-only">
        جستجو در پست‌ها
      </label>
      <MagnifyingGlassIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" aria-hidden="true" />
      <input
        ref={inputRef}
        id="dashboard-search"
        type="search"
        autoComplete="off"
        placeholder="جستجوی پست‌ها، دسته‌بندی‌ها..."
        className="w-full rounded-xl border border-transparent bg-secondary-0/70 py-3 pr-11 pl-16 text-sm text-secondary-900 placeholder:text-secondary-400 hover:border-primary-300 focus:border-primary-500 focus:bg-secondary-0 focus:ring-2 focus:ring-primary-200 transition"
      />
      <kbd
        dir="ltr"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 rounded-md border border-secondary-200 px-1.5 py-0.5 font-sans text-[11px] text-secondary-500"
      >
        {isMac ? "⌘ K" : "Ctrl K"}
      </kbd>
    </form>
  );
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Drawer portals into document.body, so only render it after mount
  const [mounted, setMounted] = useState(false);
  const { isLoading } = useAuth();

  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => setDrawerOpen(false), [pathname]); // close after navigating from the drawer

  return (
    <>
      <header
        className="sticky top-0 z-[8] bg-secondary-100 backdrop-blur-md"
      >
        {/* dim only the controls while loading; the opaque background must stay solid */}
        <div
          className={`relative flex items-center gap-2 md:gap-4 px-4 md:px-6 xl:px-8 py-3 md:py-4 transition ${isLoading ? "opacity-80" : ""}`}
        >
          {/* mobile: menu right, logo centered, actions left */}
          <button
            type="button"
            className={`${iconBtn} md:hidden`}
            aria-label="باز کردن منو"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <Logo className="md:hidden absolute left-1/2 -translate-x-1/2" />
          <button
            type="button"
            className={`${iconBtn} hidden md:grid lg:hidden`}
            aria-label="باز کردن منو"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="hidden md:flex flex-1">
            <SearchBox />
          </div>

          <div className="flex items-center gap-1 md:gap-2 mr-auto">
            <ThemeToggle className={iconBtn} />
            {/* TODO: no notifications page yet */}
            <Link href="#" className={iconBtn} aria-label="اعلان‌ها (اعلان خوانده‌نشده دارید)">
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              <span className="absolute top-2 left-2.5 w-2 h-2 rounded-full bg-error ring-2 ring-secondary-100" aria-hidden="true" />
            </Link>
            <div className="hidden md:block">
              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      <MobileTabBar onMore={() => setDrawerOpen(true)} />

      {mounted && (
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <SideBar onClose={() => setDrawerOpen(false)} />
        </Drawer>
      )}
    </>
  );
}
