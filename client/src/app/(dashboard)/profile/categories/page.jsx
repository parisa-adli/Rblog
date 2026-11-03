import Search from "@/ui/Search";
import { CreateCategory } from "./_/components/Buttons";
import CategoriesTable from "./_/components/CategoriesTable";

async function CategoriesPage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست دسته بندی ها</h1>
        <Search />
        <CreateCategory />
      </div>
      <CategoriesTable />
    </div>
  );
}
export default CategoriesPage;
