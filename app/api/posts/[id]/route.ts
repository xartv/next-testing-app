import { NextResponse } from "next/server";
import { posts } from "../posts";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const post = posts.find((post) => post.id === Number(id));

  return NextResponse.json({ post });
}
