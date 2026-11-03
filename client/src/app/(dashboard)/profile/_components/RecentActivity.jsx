import Link from "next/link";
import {
  BoltIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { getAllCommentsApi } from "@/services/commentService";
import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import { toRelativeTime } from "@/utils/dateFormatter";
import truncateText from "@/utils/truncateText";
import { focusRing } from "@/app/(blogs)/_components/home/PostMeta";
import { Card, CardHeader } from "./Card";

const icons = { comment: ChatBubbleOvalLeftIcon, post: PaperAirplaneIcon };

export default async function RecentActivity() {
  const [{ comments = [] }, { posts = [] }] = await Promise.all([
    getAllCommentsApi(),
    getPosts("sort=latest&limit=4"),
  ]);

  const items = [
    ...comments.slice(0, 4).map((c) => ({
      id: c._id,
      type: "comment",
      title: `نظر جدید از ${c.user?.name ?? "کاربر"} ثبت شد`,
      date: c.createdAt,
      href: "/profile/comments",
    })),
    ...posts.map((p) => ({
      id: p._id,
      type: "post",
      title: `«${truncateText(p.title, 40)}» منتشر شد`,
      date: p.createdAt,
      href: `/blogs/${p.slug}`,
    })),
  ]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <Card className="h-full">
      {/* TODO: no activity page yet */}
      <CardHeader icon={BoltIcon} title="فعالیت‌های اخیر" href="#" />
      {items.length === 0 ? (
        <Empty resourceName="فعالیتی" />
      ) : (
        <ol className="relative">
          {/* timeline line */}
          <span className="absolute right-[5px] top-2 bottom-2 w-px bg-secondary-200" aria-hidden="true" />
          {items.map((item) => {
            const Icon = icons[item.type];
            return (
              <li key={`${item.type}-${item.id}`} className="relative flex gap-3 pr-6 py-2">
                <span
                  className="absolute right-0 top-4 w-[11px] h-[11px] rounded-full bg-primary-900 ring-4 ring-secondary-0"
                  aria-hidden="true"
                />
                <Icon className="w-5 h-5 shrink-0 mt-0.5 text-secondary-600" aria-hidden="true" />
                <div className="min-w-0">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium text-secondary-800 hover:text-primary-900 leading-relaxed ${focusRing}`}
                  >
                    {item.title}
                  </Link>
                  <time dateTime={new Date(item.date).toISOString()} className="block text-xs text-secondary-500">
                    {toRelativeTime(item.date)}
                  </time>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </Card>
  );
}
