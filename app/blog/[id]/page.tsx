"use client";

import { getPost } from "@/services/getPost";
import { useEffect, useState } from "react";

type PostProps = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: PostProps) {
  const [post, setPost] = useState<{ title: string; body: string }>();

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </>
  );
}
