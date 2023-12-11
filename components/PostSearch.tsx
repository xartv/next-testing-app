"use client";

import { usePosts } from "@/store";
import React, { FormEventHandler, useState } from "react";

export const PostSearch = () => {
  const [query, setQuery] = useState("");

  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    getPostsBySearch(query);
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
