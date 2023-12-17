import { PostSearch } from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Next testing app",
};

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>

      <div style={{ marginBottom: "20px" }}>
        <Link href="/blog/addPost">Создать пост</Link>
      </div>

      <PostSearch />
      <Posts />
    </>
  );
}
