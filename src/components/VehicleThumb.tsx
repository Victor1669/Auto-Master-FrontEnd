import type { Vehicle } from "../types/vehicle";
import styles from "./VehicleThumb.module.css";

type VehicleThumbProps = {
  vehicle: Vehicle;
  size?: "md" | "lg";
};

export default function VehicleThumb({
  vehicle,
  size = "md",
}: VehicleThumbProps) {
  const className = `${styles.thumb} ${size === "lg" ? styles.lg : ""}`;

  if (vehicle.imageUrl) {
    return (
      <img
        src={vehicle.imageUrl}
        alt=""
        className={className}
        draggable={false}
      />
    );
  }

  return (
    <span className={className} aria-hidden="true">
      <i className="bi bi-car-front" />
    </span>
  );
}
