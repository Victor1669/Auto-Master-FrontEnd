import styles from "./CarBackground.module.css";

export function CarBackgroundEnter() {
  return (
    <div className={`${styles.Container} ${styles.Enter}`}>
      <img
        className={`${styles.RedCar}`}
        src="/src/assets/red-car.png"
        alt="red car"
      />
      <span className={`${styles.Detail} ${styles.one}`}></span>
      <span className={`${styles.Detail} ${styles.two}`}></span>
    </div>
  );
}
export function CarBackgroundContent() {
  return (
    <div className={`${styles.Container} ${styles.Content}`}>
      <img
        className={`${styles.RedCar}`}
        src="/src/assets/red-car.png"
        alt="red car"
      />
      <span className={`${styles.Detail} ${styles.three}`}></span>
      <span className={`${styles.Detail} ${styles.four}`}></span>
    </div>
  );
}
