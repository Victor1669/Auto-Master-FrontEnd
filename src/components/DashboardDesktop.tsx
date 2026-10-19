import { Link } from "react-router";

import type { AgendaOverview } from "../types/dashboard";
import { formatLongDate } from "../utils/format";
import { appointmentStatusLabels } from "../utils/status";
import StatCard from "./StatCard";
import StatusBadge from "./StatusBadge";
import styles from "./DashboardDesktop.module.css";

type DashboardDesktopProps = {
  agenda: AgendaOverview;
  query: string;
};

export default function DashboardDesktop({
  agenda,
  query,
}: DashboardDesktopProps) {
  const { date, stats, appointments } = agenda;

  return (
    <section className={`${styles.dashboard} d-none d-lg-block`}>
      <header className={styles.header}>
        <div className={styles.title}>
          <i
            className={`bi bi-calendar3 ${styles.titleIcon}`}
            aria-hidden="true"
          />
          <div>
            <h1>Agenda de Hoje</h1>
            <p className={styles.date}>
              <i className="bi bi-calendar-event" aria-hidden="true" />
              {formatLongDate(date)}
            </p>
          </div>
        </div>

        <Link to="/agendamentos/novo" className={`btn btn-automaster ${styles.newButton}`}>
          <i className="bi bi-plus-lg me-2" aria-hidden="true" />
          Novo Agendamento
        </Link>
      </header>

      <div className={styles.stats}>
        <StatCard
          icon="bi-calendar-check"
          tone="blue"
          value={stats.scheduledToday}
          label="Agendamentos hoje"
        />
        <StatCard
          icon="bi-wrench-adjustable"
          tone="cyan"
          value={stats.inProgress}
          label="Em andamento"
        />
        <StatCard
          icon="bi-box-seam"
          tone="orange"
          value={stats.awaitingParts}
          label="Aguardando peças"
        />
        <StatCard
          icon="bi-check-lg"
          tone="green"
          value={stats.completedToday}
          label="Concluídos hoje"
        />
      </div>

      <h2 className={styles.sectionTitle}>
        Próximos Agendamentos
      </h2>

      <div className={styles.agenda}>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Horário</th>
                <th scope="col">Cliente</th>
                <th scope="col">Veículo</th>
                <th scope="col">Serviço</th>
                <th scope="col">Status</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className={styles.time}>{appointment.time}</td>
                  <td>{appointment.client}</td>
                  <td>
                    <span>{appointment.vehicle}</span>
                    <span className={styles.plate}>
                      Placa: {appointment.plate}
                    </span>
                  </td>
                  <td>{appointment.service}</td>
                  <td>
                    <StatusBadge
                      className={styles[appointment.status]}
                      label={appointmentStatusLabels[appointment.status]}
                    />
                  </td>
                  <td>
                    <Link
                      to={`/agendamentos/${appointment.id}`}
                      className={styles.viewButton}
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {appointments.length === 0 && (
          <p className={styles.empty}>
            {query
              ? `Nenhum agendamento encontrado para "${query}".`
              : "Nenhum agendamento para hoje."}
          </p>
        )}
      </div>
    </section>
  );
}
