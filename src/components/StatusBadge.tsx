import styles from "./StatusBadge.module.css";

type StatusBadgeProps = {
  label: string;
  className?: string;
};

export default function StatusBadge({
  label,
  className = "",
}: StatusBadgeProps) {
  return <span className={`${styles.status} ${className}`}>{label}</span>;
}
