import BreadCrumbs from "@/ui/BreadCrumbs";
import CreateCategoryForm from "./_/CreateCategoryForm";

function page() {
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
      <CreateCategoryForm />
    </div>
  );
}
export default page;
