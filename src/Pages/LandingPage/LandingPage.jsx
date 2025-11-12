import Header from "../../Components/LandingHeader/LandingHeader";

import Section1 from "../../Components/LandingSections/Section1";
import Section2 from "../../Components/LandingSections/Section2";
import Section3 from "../../Components/LandingSections/Section3";

import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.Main}>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
