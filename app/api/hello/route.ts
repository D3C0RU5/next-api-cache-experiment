// import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 10;

export async function GET(req: Request) {
  // const reset = req.headers.get("x-reset-cache");

  // if (reset) {
  //   await revalidatePath("/api/hello");
  // }
  const data = {
    message: "Hello World!",
    timestamp: new Date().toISOString(),
    counter: Math.floor(Math.random() * 1000),
  };

  return NextResponse.json(data, {
    headers: {
      "x-next-cache-tags": "hello-tag",
    },
  });
}
