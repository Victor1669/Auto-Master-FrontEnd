import { useState } from "react";
import { Link } from "react-router";

import type { MechanicOverview, OrderStatus } from "../types/dashboard";
import { padCount } from "../utils/format";
import { orderStatusLabels } from "../utils/status";
import StatCard from "./StatCard";
import StatusBadge from "./StatusBadge";
import UserAvatar from "./UserAvatar";
import styles from "./DashboardMobile.module.css";

const tabs: OrderStatus[] = ["em_andamento", "aguardando_pecas", "concluida"];

type DashboardMobileProps = {
  overview: MechanicOverview;
};

export default function DashboardMobile({ overview }: DashboardMobileProps) {
  const { mechanic, stats, orders } = overview;
  const [activeStatus, setActiveStatus] = useState<OrderStatus>("em_andamento");

  const visibleOrders = orders.filter((order) => order.status === activeStatus);
  const firstName = mechanic.name.split(" ")[0];

  return (
    <section className={`${styles.dashboard} d-lg-none`}>
      <header className={styles.header}>
        <UserAvatar user={mechanic} size="lg" />
        <div>
          <h1>Olá, {firstName}!</h1>
          <p>{mechanic.role}</p>
        </div>
      </header>

      <div className={styles.stats}>
        <StatCard
          icon="bi-clipboard2-pulse"
          tone="red"
          stacked
          value={stats.openOrders}
          label="Ordens em aberto"
        />
        <StatCard
          icon="bi-check-lg"
          tone="green"
          stacked
          value={stats.completedToday}
          label="Concluídas hoje"
        />
      </div>

      <h2 className={styles.title}>Ordens de Serviço</h2>

      <div className={styles.tabs} role="tablist" aria-label="Status das ordens">
        {tabs.map((status) => (
          <button
            key={status}
            type="button"
            role="tab"
            aria-selected={activeStatus === status}
            className={styles.tab}
            onClick={() => setActiveStatus(status)}
          >
            <span>{orderStatusLabels[status]}</span>
            <span className={styles.count}>
              {padCount(orders.filter((order) => order.status === status).length)}
            </span>
          </button>
        ))}
      </div>

      {visibleOrders.length === 0 ? (
        <p className={styles.empty}>
          Nenhuma ordem nesta categoria.
        </p>
      ) : (
        <ul className={styles.list} role="tabpanel">
          {visibleOrders.map((order) => (
            <li key={order.id}>
              <Link
                to={`/ordens-de-servico/${order.id}`}
                className={styles.card}
              >
                <div className={styles.main}>
                  <strong className={styles.code}>#{order.code}</strong>
                  <p className={styles.info}>
                    {order.vehicle} • Placa: {order.plate}
                  </p>
                  <p className={styles.info}>Serviço: {order.service}</p>
                </div>
                <div className={styles.side}>
                  <StatusBadge
                    className={styles[order.status]}
                    label={orderStatusLabels[order.status]}
                  />
                  <i className="bi bi-chevron-right" aria-hidden="true" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
