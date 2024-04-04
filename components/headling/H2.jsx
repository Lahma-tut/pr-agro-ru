import Link from "next/link"
import styles from "./headling.module.css"


export default function H2({ category, slug }) {
  if (!slug) {
    return (
      <div className={styles.body}>
        <span className={styles.arrow}>&#5130; </span>
        <h2>
          <Link className={styles.link} href={`/catalog`}>
            { category }
          </Link>
        </h2>
      </div>
    )
  } else {
    return (
      <div className={styles.body}>
        <span className={styles.arrow}>&#5130; </span>
          <Link className={styles.link}
            href={`/catalog/category/${slug}`}>
              
              <h2>{ category }</h2>

          </Link>
      </div>
    )
  }
};