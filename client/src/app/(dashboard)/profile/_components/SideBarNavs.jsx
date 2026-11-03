"use client";

import {
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
  PhotoIcon,
  TagIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";

// href "#" = no route yet (TODO)
const sidebarNavs = [
  { title: "داشبورد", icon: HomeIcon, href: "/profile" },
  { title: "پست‌ها", icon: DocumentTextIcon, href: "/profile/posts" },
  { title: "دسته‌بندی‌ها", icon: FolderIcon, href: "/profile/categories" },
  { title: "نظرات", icon: ChatBubbleOvalLeftIcon, href: "/profile/comments" },
  { title: "کاربران", icon: UsersIcon, href: "/profile/users" },
  { title: "برچسب‌ها", icon: TagIcon, href: "#" },
  { title: "رسانه", icon: PhotoIcon, href: "#" },
  { title: "آمار", icon: ChartBarIcon, href: "#" },
  { title: "تنظیمات", icon: Cog6ToothIcon, href: "#" },
];

function isActive(pathname, href) {
  if (href === "#") return false;
  if (href === "/profile") return pathname === "/profile";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SideBarNavs() {
  const pathname = usePathname();
  return (
    <ul className="space-y-1">
      {sidebarNavs.map(({ title, icon: Icon, href }) => {
        const active = isActive(pathname, href);
        return (
          <li key={title}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={classNames(
                "flex items-center gap-x-3 rounded-xl py-2.5 xl:py-3 px-4 text-sm xl:text-base font-medium transition-colors",
                focusRing,
                active
                  ? "bg-primary-100 text-primary-900 font-bold dark:bg-primary-900/20"
                  : "text-secondary-600 hover:bg-secondary-100 hover:text-primary-900"
              )}
            >
              <Icon className="w-5 h-5 xl:w-6 xl:h-6" aria-hidden="true" />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
