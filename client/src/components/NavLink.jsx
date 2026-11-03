"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";

function NavLink({ path, children }) {
  const pathname = usePathname();
  // "/" must match exactly, other sections stay active on their sub-pages
  const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <Link
      href={path}
      aria-current={isActive ? "page" : undefined}
      className={`hidden sm:block relative  py-2 text-sm font-bold transition-colors ${focusRing} ${
        isActive
          ? "text-primary-900"
          : "text-secondary-600 hover:text-secondary-900"
      }`}
    >
      {children}
      {isActive && (
        <span
          className="absolute inset-x-0 -bottom-[13px] h-0.5 rounded-full bg-primary-900"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

export default NavLink;
