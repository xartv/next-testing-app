export async function getPost(id: string) {
  return (
    await fetch(`http://localhost:3001/posts/${id}`, {
      next: {
        revalidate: 60,
      },
    })
  ).json();
}
