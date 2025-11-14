"use client";

import { useState } from "react";

type HomeTemplateProps = {
  initialData: { message: string; timestamp: string; counter: number };
};

export default function HomeTemplate({ initialData }: HomeTemplateProps) {
  const [data, setData] = useState(initialData);

  const clearCache = async () => {
    await fetch("/api/hello/revalidate");
    alert("Cache resetado! Recarregue a página para ver novos dados.");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="mb-2">Teste de Cache API Next.js 16 (attempt 4)</h1>

      <button
        onClick={clearCache}
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
