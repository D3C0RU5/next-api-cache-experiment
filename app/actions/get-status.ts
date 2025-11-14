import { unstable_cache } from "next/cache";

export const getStatus = unstable_cache(
  async () => {
    return {
      message: "Hello World!",
      timestamp: new Date().toISOString(),
      counter: Math.floor(Math.random() * 1000),
    };
  },
  ["get-status-cache-key"], // chave interna
  {
    tags: ["home-status-tag"], // TAG QUE PERMITE REVALIDAR
    revalidate: 3600, // tempo em segundos
  }
);
