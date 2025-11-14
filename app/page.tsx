"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<{
    message: string;
    timestamp: string;
    counter: number;
  } | null>(null);

  const fetchData = async () => {
    const res = await fetch("/api/hello");
    const json = await res.json();
    setData(json);
  };
  const clearCache = async () => {
    await fetch("/api/hello/revalidate");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="mb-2">Teste de Cache API Next.js 16</h1>

      <button
        onClick={() => fetchData()}
        style={{ marginRight: "1rem" }}
        className="cursor-pointer hover:bg-white/90 hover:text-black py-1 px-3"
      >
        Buscar API (Cache)
      </button>
      <button
        onClick={() => clearCache()}
        className="cursor-pointer hover:bg-white/90 hover:text-black py-1 px-3"
      >
        Resetar Cache
      </button>

      {data && (
        <div style={{ marginTop: "2rem" }}>
          <p>
            <strong>Mensagem:</strong> {data.message}
          </p>
          <p>
            <strong>Timestamp:</strong> {data.timestamp}
          </p>
          <p>
            <strong>Counter:</strong> {data.counter}
          </p>
        </div>
      )}
    </div>
  );
}
