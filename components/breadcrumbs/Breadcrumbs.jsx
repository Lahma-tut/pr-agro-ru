import styles from "./breadcrumbs.module.css"

export default function Breadcrumbs({ children }) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.box}>
        { children }
      </div>
    </div>
  )
};