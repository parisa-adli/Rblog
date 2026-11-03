import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getPosts } from "@/services/postServices";
import Author from "../../blogs/_components/Author";
import Empty from "@/ui/Empty";
import truncateText from "@/utils/truncateText";
import { ReadingTime, SectionHeading, focusRing } from "./PostMeta";

async function LatestGrid({ options }) {
  const { posts = [] } = await getPosts("sort=latest&limit=8", options);
  const latest = posts.slice(1); // posts[0] is the hero

  return (
    <section>
      <SectionHeading label="تازه‌ها" title="آخرین نوشته‌ها">
        <Link
          href="/blogs"
          className={`shrink-0 inline-flex items-center gap-x-2 text-sm font-bold text-primary-900 ${focusRing}`}
        >
          مشاهده همه پست‌ها
          <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
        </Link>
      </SectionHeading>

      {latest.length === 0 ? (
        <Empty resourceName="پستی" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post, i) => {
            const isLead = i === 0;
            return (
              <article
                key={post._id}
                className={`group flex flex-col rounded-2xl border border-secondary-200 p-3 ${
                  isLead ? "md:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-xl mb-4 ${
                    isLead ? "aspect-video lg:aspect-auto lg:flex-1 lg:min-h-80" : "aspect-video"
                  }`}
                >
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    sizes={isLead ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    quality={90}
                  />
                </div>
                <div className="px-1">
                  {post.category && (
                    <p className="text-xs font-bold text-primary-900 mb-2">
                      {post.category.title}
                    </p>
                  )}
                  <h3
                    className={`font-bold text-secondary-800 leading-relaxed mb-3 ${
                      isLead ? "text-xl md:text-3xl md:leading-relaxed" : ""
                    }`}
                  >
                    <Link
                      href={`/blogs/${post.slug}`}
                      className={`group-hover:text-primary-900 transition-colors ${focusRing}`}
                    >
                      {post.title}
                    </Link>
                  </h3>
                  {isLead && (
                    <p className="text-secondary-600 leading-loose mb-4">
                      {truncateText(post.briefText ?? "", 140)}
                    </p>
                  )}
                  <div className="flex items-center justify-between gap-2">
                    <Author {...post.author} />
                    <ReadingTime minutes={post.readingTime} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
export default LatestGrid;
