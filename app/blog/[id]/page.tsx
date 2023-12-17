import { getPost } from "@/services/getPost";

import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

type PostProps = {
  params: {
    id: string;
  };
};

async function removePost(id: string) {
  "use server";

  await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/blog");
  redirect("/blog");
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await getPost(id);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>

      <form action={removePost.bind(null, id)}>
        <button>Delete post</button>
      </form>

      <Link href={`/blog/${id}/edit`}>Edit</Link>
    </>
  );
}
