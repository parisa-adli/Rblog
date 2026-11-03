import BreadCrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "./_/CreatePostForm";

function page() {
  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ایجاد پست",
            href: "/profile/posts/create",
            active: true,
          },
        ]}
      />
      <CreatePostForm />
    </div>
  );
}
export default page;
