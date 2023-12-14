import { getPosts } from "@/services/getPosts";
import { Metadata } from "next";
import { useEffect, useState } from "react";

type PostProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

async function getPost(id: string) {
  return (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60,
      },
    })
  ).json();
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await getPost(id);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </>
  );
}
