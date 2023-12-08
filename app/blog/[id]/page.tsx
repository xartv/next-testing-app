import { Metadata } from "next";

type PostProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  return {
    title: `Post ${id}`,
  };
}

export default function Post({ params: { id } }: PostProps) {
  return <h1>POST {id}</h1>;
}
