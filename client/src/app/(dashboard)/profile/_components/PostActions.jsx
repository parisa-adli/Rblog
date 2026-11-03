"use client";

import { useCallback, useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import useOutsideClick from "@/hooks/useOutsideClick";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import { DeletePost, UpdatePost } from "../posts/_/components/Buttons";

export default function PostActions({ post }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const ref = useOutsideClick(close);

  return (
    <div ref={ref} className="relative shrink-0" onKeyDown={(e) => e.key === "Escape" && close()}>
      <button
        type="button"
        aria-label={`عملیات پست ${post.title}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`grid place-items-center w-8 h-8 rounded-full text-secondary-500 hover:bg-secondary-100 hover:text-secondary-900 ${focusRing}`}
      >
        <EllipsisHorizontalIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      {/* hidden, not unmounted: DeletePost owns its confirm modal state */}
      <div
        className={`${open ? "flex" : "hidden"} absolute left-0 top-full z-10 mt-1 gap-2 rounded-xl border border-secondary-200 bg-secondary-0 p-2 shadow-lg`}
      >
        <UpdatePost id={post._id} />
        <DeletePost post={post} />
      </div>
    </div>
  );
}
