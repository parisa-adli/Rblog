import BreadCrumbs from "@/ui/BreadCrumbs";
import CreateCategoryForm from "../../create/_/CreateCategoryForm";
import { getCategoriesApi } from "@/services/categoryService";

async function page({ params }) {
  const { categoryId } = await params;
  const { categories } = await getCategoriesApi();
  const selectedCategory = categories.find((c) => c._id === categoryId);

  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "دسته بندی ها",
            href: "/profile/categories",
          },
          {
            label: "ایجاد دسته بندی",
            href: "/profile/categories/create",
            active: true,
          },
        ]}
      />
      <CreateCategoryForm categoryToEdit={selectedCategory} />
    </div>
  );
}
export default page;
