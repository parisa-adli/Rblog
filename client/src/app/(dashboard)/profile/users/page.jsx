import CategoriesTable from "../categories/_/components/CategoriesTable";
import UsersTable from "./_/components/UsersTable";

function CategoriesPage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست کاربران</h1>
        
      </div>
      <UsersTable/>
    </div>
  );
}
export default CategoriesPage;
