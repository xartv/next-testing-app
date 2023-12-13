"use client";

import { Metadata } from "next";
import { useEffect, useState } from "react";

type PostProps = {
  params: {
    id: string;
  };
};

async function getPost(id: string) {
  return (
    await fetch(`/api/posts/${id}`, {
      next: {
        revalidate: 60,
      },
    })
  ).json();
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await getPost(id);

  return {
    title: post.title,
  };
}

export default function Post({ params: { id } }: PostProps) {
  const [post, setPost] = useState<{ title: string; body: string }>();

  useEffect(() => {
    getPost(id).then((data) => setPost(data.post));
  }, [id]);

  console.log(post);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </>
  );
}
