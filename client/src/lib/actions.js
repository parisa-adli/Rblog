"use server";

import { createCommentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export async function createComment(postId, parentId, formData) {
export async function createComment(prevState, { formData, postId, parentId }) {
  try {
    const cookiesStore = await cookies();
    const options = await setCookieOnReq(cookiesStore);

    const rawFormData = {
      postId,
      parentId,
      text: formData.get("text"),
    };
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[slug]");
    return { message };
  } catch (err) {
    const error = err?.response?.data?.message;
    return { error };
  }
}
