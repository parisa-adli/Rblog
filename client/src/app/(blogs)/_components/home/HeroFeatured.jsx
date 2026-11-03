import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getPosts } from "@/services/postServices";
import Author from "../../blogs/_components/Author";
import Empty from "@/ui/Empty";
import truncateText from "@/utils/truncateText";
import { toPersianDigits } from "@/utils/numberformatter";
import { ReadingTime, focusRing } from "./PostMeta";

async function HeroFeatured({ options }) {
  // same queries as LatestGrid/PopularPosts, so Next dedupes the fetches
  const [{ posts: latest = [] }, { posts: popular = [] }] = await Promise.all([
    getPosts("sort=latest&limit=8", options),
    getPosts("sort=popular&limit=7", options),
  ]);
  const featured = latest[0];
  if (!featured) return <Empty resourceName="پستی" />;
  const trending = popular.slice(0, 3);

  return (
    <section className="grid grid-cols-12 gap-6 lg:gap-10">
      <article className="group col-span-12 lg:col-span-8">
        <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={featured.coverImageUrl}
            alt={featured.title}
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            quality={90}
          />
        </div>
        {/* content card overlaps the image bottom, offset to the start (right in RTL) */}
        <div className="relative -mt-16 md:-mt-28 mx-3 md:ms-8 md:me-24 rounded-2xl border border-secondary-200 bg-secondary-0 p-5 md:p-8 shadow-sm">
          {featured.category && (
            <Link
              href={`/blogs/category/${featured.category.slug}`}
              className={`inline-block text-xs font-bold text-primary-900 border border-primary-900 px-3 py-1 rounded-full mb-4 ${focusRing}`}
            >
              {featured.category.title}
            </Link>
          )}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-secondary-900 leading-relaxed md:leading-relaxed lg:leading-[1.5] mb-4">
            <Link
              href={`/blogs/${featured.slug}`}
              className={`group-hover:text-primary-900 transition-colors ${focusRing}`}
            >
              {featured.title}
            </Link>
          </h1>
          <p className="text-secondary-600 leading-loose mb-6">
            {truncateText(featured.briefText ?? "", 160)}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-x-4">
              <Author {...featured.author} />
              <ReadingTime minutes={featured.readingTime} />
            </div>
            <Link
              href={`/blogs/${featured.slug}`}
              className={`inline-flex items-center gap-x-2 text-sm font-bold text-primary-900 ${focusRing}`}
            >
              ادامه مطلب
              <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      {trending.length > 0 && (
        <aside className="col-span-12 lg:col-span-4" aria-labelledby="trending-title">
          <h2
            id="trending-title"
            className="text-sm font-bold text-primary-900 mb-4 pb-3 border-b border-secondary-200"
          >
            پرطرفدارهای این روزها
          </h2>
          <ol className="divide-y divide-secondary-200">
            {trending.map((post, i) => (
              <li key={post._id} className="group flex gap-x-4 py-4">
                <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.title}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <span className="text-xs text-secondary-400 font-bold">
                    {toPersianDigits(String(i + 1).padStart(2, "0"))}
                  </span>
                  <h3 className="font-bold text-secondary-800 leading-relaxed">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className={`group-hover:text-primary-900 transition-colors ${focusRing}`}
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <ReadingTime minutes={post.readingTime} />
                </div>
              </li>
            ))}
          </ol>
        </aside>
      )}
    </section>
  );
}
export default HeroFeatured;
