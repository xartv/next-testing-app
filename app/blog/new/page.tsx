import AddPost from "@/components/AddPost";
import { redirect } from "next/navigation";

export default async function NewPost() {
  return (
    <>
      <h1>Create new post</h1>

      <AddPost
        onSuccess={async (id) => {
          "use server";
          redirect(`/blog/${id}`);
        }}
      />
    </>
  );
}
