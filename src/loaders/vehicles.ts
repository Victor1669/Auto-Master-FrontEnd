import type { LoaderFunctionArgs } from "react-router";

import { getVehicles } from "../services/vehicles";

export async function vehiclesLoader({ request }: LoaderFunctionArgs) {
  const query = new URL(request.url).searchParams.get("q")?.trim() ?? "";
  const vehicles = await getVehicles({ query });

  return { query, vehicles };
}
