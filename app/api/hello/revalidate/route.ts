import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("TAG", "default"); // invalida cache da tag
  return NextResponse.json({ revalidated: true, tag: "TAG" });
}
