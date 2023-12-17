import AddPost from "@/components/AddPost";
import { PostSearch } from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export const revalidate = 10;

export default async function Blog() {
  return (
    <>
      <h1>Blog</h1>

      <div style={{ marginBottom: "20px" }}>
        <Link href="/blog/new">Создать пост</Link>
      </div>

      <PostSearch />
      <Posts />

      <hr />

      <AddPost
        onSuccess={async () => {
          "use server";
          revalidatePath("/blog");
        }}
      />
    </>
  );
}
