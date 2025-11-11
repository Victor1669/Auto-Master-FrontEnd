import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <div className={styles.section1}>
      <Title />
    </div>
  );
}

function Title() {
  return (
    <h2 className={styles.Title}>
      AutoMaster:
      <span>Reparos e Serviços</span>
    </h2>
  );
}
