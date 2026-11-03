import { getCategoriesApi } from "@/services/categoryService";
import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import { Card, CardHeader } from "./Card";
import CategoryDonut from "./CategoryDonut";

export default async function TopCategories() {
  const [{ categories = [] }, { posts = [] }] = await Promise.all([
    getCategoriesApi(),
    // shortcut: counts from at most 1000 posts; move to a server-side aggregate if the blog grows past that
    getPosts("limit=1000"),
  ]);

  const counted = categories
    .map((cat) => ({
      id: cat._id,
      title: cat.title,
      count: posts.filter((p) => p.category?._id === cat._id).length,
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  return (
    <Card className="h-full">
      <CardHeader title="دسته‌بندی‌های برتر" href="/profile/categories" />
      {counted.length === 0 ? (
        <Empty resourceName="دسته‌بندی" />
      ) : (
        <CategoryDonut data={counted.slice(0, 4)} total={posts.length} />
      )}
    </Card>
  );
}
