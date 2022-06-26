import styles from "./styles.module.css";

export function LoadingSpinner() {
  return (
    <div className={styles.containerStyle}>
      <div className={styles.circleStyle} />
    </div>
  );
}
