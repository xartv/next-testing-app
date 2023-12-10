import { Metadata } from "next";

type PostProps = {
  params: {
    id: string;
  };
};

async function getPost(id: string) {
  return (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
        revalidate: 60,
      },
    })
  ).json();
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await getPost(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await getPost(id);

  console.log(post);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
