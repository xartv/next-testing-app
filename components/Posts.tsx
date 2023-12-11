"use client";

import { usePosts } from "@/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";

function Posts() {
  const [posts, isLoading, getPosts] = usePosts(
    (state) => [state.posts, state.isLoading, state.getPosts],
    shallow
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const content = posts.map((post: any) => (
    <li key={post.id}>
      <Link href={`/blog/${post.id}`}>{post.title}</Link>
    </li>
  ));

  if (isLoading) return <h3>Loading... </h3>;

  return <ul>{content}</ul>;
}

export default Posts;
