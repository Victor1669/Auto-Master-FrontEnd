import { Link } from "react-router";

import type { Vehicle } from "../types/vehicle";
import dashboardStyles from "./DashboardDesktop.module.css";
import VehicleThumb from "./VehicleThumb";
import styles from "./VehiclesDesktop.module.css";

type VehiclesDesktopProps = {
  vehicles: Vehicle[];
  query: string;
};

export default function VehiclesDesktop({
  vehicles,
  query,
}: VehiclesDesktopProps) {
  return (
    <section className={`${dashboardStyles.dashboard} d-none d-lg-block`}>
      <header className={dashboardStyles.header}>
        <div className={dashboardStyles.title}>
          <i
            className={`bi bi-car-front ${dashboardStyles.titleIcon}`}
            aria-hidden="true"
          />
          <h1>Veículos Cadastrados</h1>
        </div>

        <Link
          to="/veiculos/novo"
          className={`btn btn-automaster ${dashboardStyles.newButton}`}
        >
          <i className="bi bi-plus-lg me-2" aria-hidden="true" />
          Cadastrar Veículo
        </Link>
      </header>

      <div className={dashboardStyles.agenda}>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" aria-label="Foto" />
                <th scope="col">Placa</th>
                <th scope="col">Modelo</th>
                <th scope="col">Marca</th>
                <th scope="col">Ano</th>
                <th scope="col">Cliente</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td className={styles.photo}>
                    <VehicleThumb vehicle={vehicle} />
                  </td>
                  <td className={styles.plate}>{vehicle.plate}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.year}</td>
                  <td>{vehicle.client}</td>
                  <td>
                    <div className={styles.actions}>
                      <Link
                        to={`/veiculos/${vehicle.id}/editar`}
                        className={dashboardStyles.viewButton}
                      >
                        <i className="bi bi-pencil me-1" aria-hidden="true" />
                        Editar
                      </Link>
                      <Link
                        to={`/veiculos/${vehicle.id}`}
                        className={dashboardStyles.viewButton}
                      >
                        Ver
                      </Link>
                      <button
                        type="button"
                        className={styles.more}
                        aria-label={`Mais ações para ${vehicle.model}`}
                      >
                        <i
                          className="bi bi-three-dots-vertical"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {vehicles.length === 0 && (
          <p className={dashboardStyles.empty}>
            {query
              ? `Nenhum veículo encontrado para "${query}".`
              : "Nenhum veículo cadastrado."}
          </p>
        )}
      </div>
    </section>
  );
}
