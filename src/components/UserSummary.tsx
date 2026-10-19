import type { User } from "../types/user";
import UserAvatar from "./UserAvatar";
import styles from "./UserSummary.module.css";

type UserSummaryProps = {
  user: User;
};

export default function UserSummary({ user }: UserSummaryProps) {
  return (
    <div className={styles.summary}>
      <UserAvatar user={user} />
      <div className={styles.info}>
        <strong className={styles.name}>{user.name}</strong>
        <small className={styles.role}>{user.role}</small>
      </div>
    </div>
  );
}
