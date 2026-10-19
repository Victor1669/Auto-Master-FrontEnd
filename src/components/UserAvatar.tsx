import type { User } from "../types/user";
import { getInitials } from "../utils/format";
import styles from "./UserAvatar.module.css";

type UserAvatarProps = {
  user: User;
  size?: "md" | "lg";
};

export default function UserAvatar({ user, size = "md" }: UserAvatarProps) {
  const className = `${styles.avatar} ${size === "lg" ? styles.lg : ""}`;

  if (user.avatarUrl) {
    return (
      <img
        src={user.avatarUrl}
        alt=""
        className={className}
        draggable={false}
      />
    );
  }

  return (
    <span className={className} aria-hidden="true">
      {getInitials(user.name)}
    </span>
  );
}
