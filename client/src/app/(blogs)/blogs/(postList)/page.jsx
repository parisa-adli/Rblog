import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

// how to revalidate, time-based
// export const revalidate = 15;
// after 15s => re-build :
// 1. pass time interval
// 2. new incoming request to rebuild this page
// 3. update data will be shown to the next user

// export const revalidate = 0 => dynamic page => opt out;

// export const experimental_ppr = true;

async function BlogPage({ searchParams }) {
  const queries = await queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = await setCookieOnReq(cookieStore);
  const {posts} = await getPosts(queries, options);

  const { search } = await searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length} برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}
export default BlogPage;

//? FOR ENGLISH TEXT:
// showing 3 result for "dummy"
// const resultText = post.length > 1 ? "results" : "result";
// {`showing ${posts.length} ${resultText} for`}
