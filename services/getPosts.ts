export async function getPosts() {
  const response = await fetch("/api/posts");

  if (!response.ok) throw new Error("Wrong fetch posts");

  return response.json();
}

export async function getPostsBySearch(search: string) {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to search");

  return response.json();
}
