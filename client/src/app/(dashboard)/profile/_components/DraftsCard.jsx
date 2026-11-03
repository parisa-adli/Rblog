import Link from "next/link";
import { DocumentTextIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import { toRelativeTime } from "@/utils/dateFormatter";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import { Card, CardHeader } from "./Card";
import { PostThumb } from "./LatestPostsCard";
import PostActions from "./PostActions";

export default async function DraftsCard() {
  // TODO: the Post model has no draft/status field yet, so this shows the latest 2 posts.
  const { posts = [] } = await getPosts("sort=latest&limit=2");

  return (
    <Card className="h-full flex flex-col">
      <CardHeader icon={DocumentTextIcon} title="پیش‌نویس‌ها" href="/profile/posts" />
      {posts.length === 0 ? (
        <Empty resourceName="پیش‌نویسی" />
      ) : (
        <ul className="divide-y divide-secondary-200/70 flex-1">
          {posts.map((post) => {
            const editHref = `/profile/posts/${post._id}/edit`;
            return (
              <li key={post._id} className="group flex items-start gap-3 py-4 first:pt-0">
                <PostThumb post={post} href={editHref} className="w-20 h-16" />
                <div className="flex-1 min-w-0">
                  <Link
                    href={editHref}
                    className={`line-clamp-2 font-bold text-secondary-900 hover:text-primary-900 ${focusRing}`}
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs text-secondary-500 mt-1">
                    آخرین ویرایش: {toRelativeTime(post.updatedAt ?? post.createdAt)}
                  </p>
                </div>
                <PostActions post={post} />
              </li>
            );
          })}
        </ul>
      )}
      <Link
        href="/profile/posts/create"
        className={`mt-4 flex items-center justify-center gap-x-2 rounded-xl border border-primary-900/40 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100/50 transition-colors ${focusRing}`}
      >
        <PencilSquareIcon className="w-5 h-5" aria-hidden="true" />
        ایجاد پست جدید
      </Link>
    </Card>
  );
}
