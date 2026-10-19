import type { LoaderFunctionArgs } from "react-router";

import { getAgendaOverview, getMechanicOverview } from "../services/dashboard";

export async function dashboardLoader({ request }: LoaderFunctionArgs) {
  const query = new URL(request.url).searchParams.get("q")?.trim() ?? "";

  const [agenda, mechanic] = await Promise.all([
    getAgendaOverview({ query }),
    getMechanicOverview(),
  ]);

  return { query, agenda, mechanic };
}
