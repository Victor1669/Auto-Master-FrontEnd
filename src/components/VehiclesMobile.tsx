import { Link } from "react-router";

import type { Vehicle } from "../types/vehicle";
import dashboardStyles from "./DashboardMobile.module.css";
import SearchBar from "./SearchBar";
import VehicleThumb from "./VehicleThumb";
import styles from "./VehiclesMobile.module.css";

type VehiclesMobileProps = {
  vehicles: Vehicle[];
  query: string;
};

export default function VehiclesMobile({
  vehicles,
  query,
}: VehiclesMobileProps) {
  return (
    <section className={`${dashboardStyles.dashboard} d-lg-none`}>
      <header className={styles.header}>
        <Link to="/dashboard" className={styles.back} aria-label="Voltar">
          <i className="bi bi-chevron-left" aria-hidden="true" />
        </Link>
        <h1>Veículos</h1>
      </header>

      <div className={styles.search}>
        <SearchBar placeholder="Buscar veículo ou placa..." />
      </div>

      {vehicles.length === 0 ? (
        <p className={dashboardStyles.empty}>
          {query
            ? `Nenhum veículo encontrado para "${query}".`
            : "Nenhum veículo cadastrado."}
        </p>
      ) : (
        <ul className={dashboardStyles.list}>
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              <Link to={`/veiculos/${vehicle.id}`} className={styles.card}>
                <VehicleThumb vehicle={vehicle} size="lg" />
                <div className={styles.info}>
                  <strong>{vehicle.model}</strong>
                  <p>{vehicle.plate}</p>
                  <p>{vehicle.year}</p>
                </div>
                <i className="bi bi-chevron-right" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
