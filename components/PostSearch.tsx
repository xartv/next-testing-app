"use client";

import { usePosts } from "@/store";
import useSWR from "swr";
import React, { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";

export const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [query, setQuery] = useState("");

  //const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(query);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};
