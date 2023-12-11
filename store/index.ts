import { getPosts, getPostsBySearch } from "@/services/getPosts";
import { create } from "zustand";

type UsePosts = {
  posts: any[];
  isLoading: boolean;
  getPosts: () => Promise<void>;
  getPostsBySearch: (query: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  isLoading: false,
  getPosts: async () => {
    set({ isLoading: true });
    const posts = await getPosts();
    set({ posts, isLoading: false });
  },
  getPostsBySearch: async (search) => {
    set({ isLoading: true });
    const posts = await getPostsBySearch(search);
    set({ posts, isLoading: false });
  },
}));
