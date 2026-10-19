import { useLoaderData } from "react-router";

import DashboardDesktop from "../components/DashboardDesktop";
import DashboardMobile from "../components/DashboardMobile";
import type { dashboardLoader } from "../loaders/dashboard";

export default function Dashboard() {
  const { agenda, mechanic, query } = useLoaderData<typeof dashboardLoader>();

  return (
    <>
      <DashboardDesktop agenda={agenda} query={query} />
      <DashboardMobile overview={mechanic} />
    </>
  );
}
