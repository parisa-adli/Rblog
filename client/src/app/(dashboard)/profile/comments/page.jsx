import queryString from "query-string";
import { getPosts } from "@/services/postServices";
import CommentsTable from "./_/components/CommentsTable";

async function page({ searchParams }) {
  const query = queryString.stringify(await searchParams);
  const { totalPages } = await getPosts(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست نظرات</h1>
        {/* <Search /> */}
        {/* <CreatePost /> */}
      </div>
      <CommentsTable />
      {/* <Suspense fallback={<Fallback />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="flex w-full justify-center mt-5">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}
export default page;
