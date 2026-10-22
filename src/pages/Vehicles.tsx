import { useLoaderData } from "react-router";

import VehiclesDesktop from "../components/VehiclesDesktop";
import VehiclesMobile from "../components/VehiclesMobile";
import type { vehiclesLoader } from "../loaders/vehicles";

export default function Vehicles() {
  const { vehicles, query } = useLoaderData<typeof vehiclesLoader>();

  return (
    <>
      <VehiclesDesktop vehicles={vehicles} query={query} />
      <VehiclesMobile vehicles={vehicles} query={query} />
    </>
  );
}
