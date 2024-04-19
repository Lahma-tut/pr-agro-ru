import Link from 'next/link'
import styles from './headling.module.css'

type TypeProps = {
  category: string | undefined
  slug?: string | undefined
}

export const H2 = ({ category, slug }: TypeProps) => {
  if (!slug) {
    return (
      <div className={styles.h2_body}>
        <h2>
          <span className={styles.arrow}>&#5130; </span>
            <Link className={styles.link} href={`/catalog`}>
              { category }
            </Link>
        </h2>
      </div>
    )
  } else {
    return (
      <div className={styles.h2_body}>
        <h2>
          <span className={styles.arrow}>&#5130; </span>
          <Link className={styles.link}
            href={`/catalog/category/${slug}`}>
              { category }
          </Link>
        </h2> 
      </div>
    )
  }
}