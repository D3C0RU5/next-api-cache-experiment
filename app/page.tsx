import { getStatus } from "./actions/get-status";
import HomeTemplate from "./components/home-template";

export default async function Home() {
  const data = await getStatus();
  return <HomeTemplate initialData={data} />;
}
