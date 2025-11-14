import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  const resetCache = req.headers.get("x-reset-cache");

  if (resetCache) {
    revalidatePath("/api/hello"); // invalida cache nativo do Next.js
  }

  const data = {
    message: "Hello World!",
    timestamp: new Date().toISOString(),
    counter: Math.floor(Math.random() * 1000),
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
    },
  });
}
