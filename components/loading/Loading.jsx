"use client"
import styles from "./loading.module.css"
import { Oval } from 'react-loader-spinner'

export function Loading() {
  return (
    <section className={styles.loading}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        />
    </section>
  )
}