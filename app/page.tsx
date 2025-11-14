import HomeTemplate from "./components/home-template";

export default async function HOme() {
  const data = await fetch("http://localhost:3000/api/hello", {
    next: {
      revalidate: 60,
      tags: ["hello-tag"],
    },
  }).then((r) => r.json());

  return <HomeTemplate initialData={data} />;
}
