import Link from "next/link"
import styles from "./headling.module.css"


export default function H2({ category, slug }) {
  if (!slug) {
    return (
      <div className={styles.body}>
        <h2 className={styles.h2}>
          <span className={styles.arrow}>&#5130; </span>
            <Link className={styles.link} href={`/catalog`}>
              { category }
            </Link>
        </h2>
      </div>
    )
  } else {
    return (
      <div className={styles.body}>
        <h2 className={styles.h2}>
          <span className={styles.arrow}>&#5130; </span>
          <Link className={styles.link}
            href={`/catalog/category/${slug}`}>
              { category }
          </Link>
        </h2> 
      </div>
    )
  }
};