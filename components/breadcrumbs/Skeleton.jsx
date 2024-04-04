import styles from "./skeleton.module.css"

export default function Skeleton() {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.box}>
        <div className={styles.h2}>
          <div></div>
          </div>
        <div className={styles.h1}></div>
      </div>
    </div>
  )
};