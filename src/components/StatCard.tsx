import styles from "./StatCard.module.css";

type StatCardProps = {
  icon: string;
  tone: "blue" | "cyan" | "orange" | "green" | "red";
  value: number;
  label: string;
  stacked?: boolean;
};

export default function StatCard({
  icon,
  tone,
  value,
  label,
  stacked = false,
}: StatCardProps) {
  return (
    <div className={`${styles.card} ${stacked ? styles.stacked : ""}`}>
      <span className={`${styles.icon} ${styles[tone]}`}>
        <i className={`bi ${icon}`} aria-hidden="true" />
      </span>
      <strong className={styles.value}>{value}</strong>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
