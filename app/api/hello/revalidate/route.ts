import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  await revalidateTag("home-status-tag", "default");

  return NextResponse.json({
    revalidated: true,
  });
}
