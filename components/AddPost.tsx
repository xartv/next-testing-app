export default async function AddPost({
  onSuccess,
}: {
  onSuccess: (id?: number) => Promise<void>;
}) {
  async function createPost(data: FormData) {
    "use server";

    const { title, body } = Object.fromEntries(data);

    const response = await fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, userId: 1 }),
    });

    const post = await response.json();

    await onSuccess(post.id);
  }

  return (
    <form
      id="addPostForm"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "32px",
      }}
      action={createPost}
    >
      <input type="text" placeholder="Enter title" required name="title" />
      <textarea placeholder="Enter body" required name="body" />
      <button>Create</button>
    </form>
  );
}
