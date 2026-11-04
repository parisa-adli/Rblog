"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import {
  ArrowLeftStartOnRectangleIcon,
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "@/context/AuthContext";
import useOutsideClick from "@/hooks/useOutsideClick";
import Avatar from "@/ui/Avatar";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";

const itemClass = `flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 ${focusRing}`;

export default function UserMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const ref = useOutsideClick(close);

  return (
    <div ref={ref} className="relative" onKeyDown={(e) => e.key === "Escape" && close()}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="منوی کاربر"
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-x-2 rounded-full p-0.5 xl:pl-2 hover:bg-secondary-0 ${focusRing}`}
      >
        <Avatar src={user?.avatarUrl} width={40} />
        <span className="hidden xl:inline text-sm font-medium text-secondary-800">{user?.name}</span>
        <ChevronDownIcon className="hidden xl:block w-4 h-4 text-secondary-500" aria-hidden="true" />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-30 mt-2 w-44 rounded-xl border border-secondary-200 bg-secondary-0 p-1.5 shadow-lg"
        >
          <Link href="/profile" role="menuitem" className={itemClass} onClick={close}>
            <UserIcon className="w-4 h-4" aria-hidden="true" />
            داشبورد
          </Link>
          <button
            type="button"
            role="menuitem"
            className={`${itemClass} w-full hover:text-error`}
            onClick={() => {
              close();
              logout();
            }}
          >
            <ArrowLeftStartOnRectangleIcon className="w-4 h-4" aria-hidden="true" />
            خروج
          </button>
        </div>
      )}
    </div>
  );
}
