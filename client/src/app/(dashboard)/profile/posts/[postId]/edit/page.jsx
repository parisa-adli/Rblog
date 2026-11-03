import { getPostById } from "@/services/postServices";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

async function EditPage({ params }) {
  const { postId } = await params;
  const { post } = await getPostById(await postId);

  if (!post) return notFound();

  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPage;
