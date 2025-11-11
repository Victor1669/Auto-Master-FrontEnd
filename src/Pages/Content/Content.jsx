import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import TabBar from "../../Components/TabBar/TabBar";
import { CarBackgroundContent } from "../../Components/CarBackground/CarBackground";

import { useAuth } from "../../Context/AuthContext";

import styles from "./Content.module.css";

export default function Content() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className={styles.content}>
      <CarBackgroundContent />
      <TabBar />
      <div className={styles.Outlet}>
        <Outlet />
      </div>
    </div>
  );
}
