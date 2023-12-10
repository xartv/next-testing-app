import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if(!response.ok) throw new Error('Wrong fetch posts')

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next testing app",
};

export default async function Blog() {
  const posts = await getData();

  const content = posts.map((post: any) => (
    <li key={post.id}>
      <Link href={`/blog/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <>
      <h1>Blog</h1>

      <ul>{content}</ul>
    </>
  );
}
