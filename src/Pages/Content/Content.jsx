import { Outlet } from "react-router-dom";

import TabBar from "../../Components/TabBar/TabBar";

import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.content}>
      <TabBar />
      <Outlet />
    </div>
  );
}
