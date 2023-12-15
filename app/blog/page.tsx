import { PostSearch } from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next testing app",
};

export const revalidate = 10;

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>

      <PostSearch />
      <Posts />
    </>
  );
}
