import styles from "./breadcrumbs.module.css";
import HeadingH2 from "./headingH2";

export default function Breadcrumbs({ h1, h2 }) {
  return (
      <div className={styles.breadcrumb}>
        <div className={styles.box}>
          <HeadingH2 h2={h2}/>
          <h1 className={styles.h1}>{ h1 }</h1>
        </div>
      </div>
  )
};