import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("hello-tag", "default");

  return NextResponse.json({
    revalidated: true,
    tag: "hello-tag",
  });
}
