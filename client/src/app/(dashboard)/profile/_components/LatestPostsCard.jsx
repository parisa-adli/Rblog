import Image from "next/image";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon, EyeIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import { toPersianCompact, toPersianDigits } from "@/utils/numberformatter";
import { toRelativeTime } from "@/utils/dateFormatter";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import { Card, CardHeader } from "./Card";
import PostActions from "./PostActions";

const typeBadge = {
  free: { label: "رایگان", className: "bg-success/10 text-success" },
  premium: { label: "ویژه", className: "bg-primary-100 text-primary-900 dark:bg-primary-900/20" },
};

export function TypeBadge({ type, className = "" }) {
  const badge = typeBadge[type] ?? typeBadge.free;
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className} ${className}`}>
      {badge.label}
    </span>
  );
}

export function PostThumb({ post, href, className = "" }) {
  const img = (
    <Image
      src={post.coverImageUrl}
      alt={post.title}
      fill
      sizes="96px"
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
  return (
    <div className={`relative shrink-0 overflow-hidden rounded-xl bg-secondary-100 ${className}`}>
      {href ? (
        <Link href={href} tabIndex={-1} aria-hidden="true" className="absolute inset-0">
          {img}
        </Link>
      ) : (
        img
      )}
    </div>
  );
}

// `views` = view count per row (mock until the API exposes it)
export default async function LatestPostsCard({ views = [] }) {
  const { posts = [] } = await getPosts("sort=latest&limit=5");

  return (
    <Card>
      <CardHeader icon={ListBulletIcon} title="آخرین پست‌ها" href="/profile/posts" />
      {posts.length === 0 ? (
        <Empty resourceName="پستی" />
      ) : (
        <ul className="divide-y divide-secondary-200/70">
          {posts.map((post, i) => (
            <li
              key={post._id}
              className="group flex items-center gap-3 md:gap-4 py-3 first:pt-0 last:pb-0 -mx-2 px-2 rounded-xl hover:bg-secondary-50 transition-colors"
            >
              <PostThumb post={post} href={`/blogs/${post.slug}`} className="w-16 h-14 md:w-20 md:h-14" />
              <div className="flex-1 min-w-0">
                <Link
                  href={`/blogs/${post.slug}`}
                  className={`line-clamp-2 md:line-clamp-1 text-sm md:text-base font-bold text-secondary-900 hover:text-primary-900 ${focusRing}`}
                >
                  {post.title}
                </Link>
                <p className="hidden md:block text-xs text-secondary-500 mt-1">
                  منتشر شده {toRelativeTime(post.createdAt)}
                  {post.category?.title && <> &bull; {post.category.title}</>}
                </p>
                <TypeBadge type={post.type} className="md:hidden mt-1" />
              </div>
              <TypeBadge type={post.type} className="hidden md:inline-block" />
              <span className="hidden md:inline-flex w-20 items-center gap-x-1.5 text-sm text-secondary-600">
                <EyeIcon className="w-5 h-5 text-secondary-400" aria-hidden="true" />
                <span className="sr-only">بازدید:</span>
                {toPersianCompact(views[i] ?? 0)}
              </span>
              <span className="hidden md:inline-flex w-14 items-center gap-x-1.5 text-sm text-secondary-600">
                <ChatBubbleOvalLeftIcon className="w-5 h-5 text-secondary-400" aria-hidden="true" />
                <span className="sr-only">نظر:</span>
                {toPersianDigits(post.commentsCount ?? 0)}
              </span>
              <PostActions post={post} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
