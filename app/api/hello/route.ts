import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const data = {
    message: "Hello World!",
    timestamp: new Date().toISOString(),
    counter: Math.floor(Math.random() * 1000),
  };

  return NextResponse.json(data);
}
