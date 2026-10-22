import type { Vehicle } from "../types/vehicle";
import { normalize } from "./dashboard";
import { vehiclesMock } from "./mocks/vehicles";

type VehiclesParams = {
  query: string;
};

function matchesQuery(vehicle: Vehicle, terms: string[]) {
  const haystack = normalize(
    [
      vehicle.model,
      vehicle.brand,
      vehicle.plate,
      vehicle.plate.replace("-", ""),
      vehicle.year,
      vehicle.client,
    ].join(" "),
  );

  return terms.every((term) => haystack.includes(term));
}

export async function getVehicles({
  query,
}: VehiclesParams): Promise<Vehicle[]> {
  const terms = normalize(query).split(/\s+/).filter(Boolean);

  return vehiclesMock.filter((vehicle) => matchesQuery(vehicle, terms));
}
