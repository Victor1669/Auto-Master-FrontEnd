import { Outlet, useLoaderData } from "react-router";

import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import SearchBar from "../components/SearchBar";
import UserSummary from "../components/UserSummary";
import type { appLoader } from "../loaders/app";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  const { user } = useLoaderData<typeof appLoader>();

  return (
    <div className={styles.app} data-bs-theme="dark">
      <NavbarDesktop user={user} />

      <div className={styles.main}>
        <header className={`${styles.topbar} d-none d-lg-flex`}>
          <SearchBar />
          <div className="ms-auto">
            <UserSummary user={user} />
          </div>
        </header>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>

      <NavbarMobile />
    </div>
  );
}
