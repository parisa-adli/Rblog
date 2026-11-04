"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import NavLink from "./NavLink";
import UserMenu from "@/app/(dashboard)/profile/_components/UserMenu";
import ThemeToggle from "@/app/(dashboard)/profile/_components/ThemeToggle";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";

// same links as the footer
const navLinks = [
  { path: "/", label: "خانه" },
  { path: "/blogs", label: "بلاگ‌ها" },
  { path: "/about", label: "درباره ما" },
];

function Header() {
  const { user, isLoading } = useAuth();

  return (
    <header className="sticky top-0 z-30 mb-10 border-b border-secondary-200 bg-secondary-0/80 backdrop-blur-md">
      <div className="container xl:max-w-screen-xl flex items-center justify-between gap-x-6 h-16">
        <div className="flex items-center gap-x-6 md:gap-x-10">
          <Link href="/" className={`shrink-0 ${focusRing}`} aria-label="Rblog - خانه">
            {/* one logo per theme; .dark-mode swaps which is visible (same as the footer) */}
            <Image src="/logo/rblog-logo.svg" alt="Rblog" width={110} height={30} className="[.dark-mode_&]:hidden" priority />
            <Image src="/logo/rblog-logo-dark.svg" alt="Rblog" width={110} height={30} className="hidden [.dark-mode_&]:block" priority />
          </Link>
          <nav aria-label="منوی اصلی">
            <ul className="flex items-center gap-x-5 md:gap-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink path={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={`flex items-center gap-x-3 transition-opacity ${isLoading ? "opacity-50 pointer-events-none" : ""}`}>
          <ThemeToggle
            className={`p-2 text-secondary-600 hover:text-primary-900 hover:bg-secondary-100 rounded-full transition-colors ${focusRing}`}
          />
          {user ? (
            <UserMenu />
          ) : (
            <Link
              href="/signin"
              className={`text-sm font-bold text-secondary-0 bg-primary-900 hover:bg-primary-800 px-5 py-2 rounded-full transition-colors ${focusRing}`}
            >
              ورود
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
