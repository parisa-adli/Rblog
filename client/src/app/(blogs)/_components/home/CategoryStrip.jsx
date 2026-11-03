import Link from "next/link";
import { getCategoriesApi } from "@/services/categoryService";
import { focusRing } from "./PostMeta";

async function CategoryStrip() {
  const { categories = [] } = (await getCategoriesApi()) || {};
  if (!categories.length) return null;

  return (
    <nav aria-label="دسته‌بندی‌ها">
      <ul className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 snap-x">
        <li className="shrink-0 snap-start">
          <Link
            href="/blogs"
            className={`block rounded-full bg-secondary-900 text-secondary-0 px-5 py-2 text-sm font-bold ${focusRing}`}
          >
            همه مطالب
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category._id} className="shrink-0 snap-start">
            <Link
              href={`/blogs/category/${category.slug}`}
              className={`block rounded-full border border-secondary-200 px-5 py-2 text-sm text-secondary-700 hover:border-primary-900 hover:text-primary-900 transition-colors ${focusRing}`}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default CategoryStrip;
