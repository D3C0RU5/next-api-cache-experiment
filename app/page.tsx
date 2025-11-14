"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ message: string; timestamp: string; counter: number } | null>(null);

  const fetchData = async (resetCache = false) => {
    const headers: Record<string, string> = {};

    if (resetCache) {
      headers["x-reset-cache"] = "1"; // força cache zero
    }

    const res = await fetch("/api/hello", {
      headers,
      // Remova cache: "no-store" para permitir cache do browser/CDN
      // cache: "no-store",
    });
    const json = await res.json();
    setData(json);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Teste de Cache API Next.js 16</h1>
      
      <button onClick={() => fetchData(false)} style={{ marginRight: "1rem" }}>
        Buscar API (Cache)
      </button>
      <button onClick={() => fetchData(true)}>
        Resetar Cache
      </button>

      {data && (
        <div style={{ marginTop: "2rem" }}>
          <p><strong>Mensagem:</strong> {data.message}</p>
          <p><strong>Timestamp:</strong> {data.timestamp}</p>
          <p><strong>Counter:</strong> {data.counter}</p>
        </div>
      )}
    </div>
  );
}
