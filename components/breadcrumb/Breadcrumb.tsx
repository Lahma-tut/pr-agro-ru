import styles from './breadcrumb.module.css'

export default function Breadcrumb({ children }:{children: React.ReactNode}) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.box}>
        { children }
      </div>
    </div>
  )
}