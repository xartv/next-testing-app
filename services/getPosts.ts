export async function getPosts() {
  const response = await fetch("http://localhost:3001/posts");

  if (!response.ok) throw new Error("Wrong fetch posts");

  return response.json();
}

export async function getPostsBySearch(search: string) {
  const response = await fetch(`http://localhost:3001/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to search");

  return response.json();
}
