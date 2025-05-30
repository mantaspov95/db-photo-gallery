import styles from "./Sidenav.module.scss";
export default function Sidenav() {
  return (
    <div className={`${styles.sidenav} ${styles["sidenav--container"]}`}>
      <span>a</span>
      <span>b</span>
      <span>c</span>
    </div>
  );
}
