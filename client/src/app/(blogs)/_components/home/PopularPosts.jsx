import Link from "next/link";
import { getPosts } from "@/services/postServices";
import Author from "../../blogs/_components/Author";
import Empty from "@/ui/Empty";
import { toPersianDigits } from "@/utils/numberformatter";
import { ReadingTime, SectionHeading, focusRing } from "./PostMeta";

async function PopularPosts({ options }) {
  const { posts = [] } = await getPosts("sort=popular&limit=7", options);
  const picks = posts.slice(3); // first 3 are shown as "trending" in the hero

  return (
    <section>
      <SectionHeading label="انتخاب سردبیر" title="محبوب‌ترین‌ها" />
      {picks.length === 0 ? (
        <Empty resourceName="پستی" />
      ) : (
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {picks.map((post, i) => (
            <li key={post._id} className="group border-t border-secondary-200 pt-4">
              <span
                aria-hidden="true"
                className="block text-6xl md:text-7xl font-black text-transparent [-webkit-text-stroke:1.5px_rgb(var(--color-primary-900))] mb-4"
              >
                {toPersianDigits(String(i + 1).padStart(2, "0"))}
              </span>
              <h3 className="font-bold text-lg text-secondary-800 leading-relaxed mb-4">
                <Link
                  href={`/blogs/${post.slug}`}
                  className={`group-hover:text-primary-900 transition-colors ${focusRing}`}
                >
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center justify-between gap-2">
                <Author {...post.author} />
                <ReadingTime minutes={post.readingTime} />
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
export default PopularPosts;
