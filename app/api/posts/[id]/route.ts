import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import { posts } from "../posts";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const userAgentHeader = headers().get("User-Agent");

  const cookie = cookies().get("Cookie_2")?.value;

  const post = posts.find((post) => post.id === Number(id));

  return NextResponse.json({ post, userAgentHeader, cookie });
}
