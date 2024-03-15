"use client"
import styles from "./loading.module.css"
import { FallingLines } from 'react-loader-spinner'

export function Loading() {
  return (
    <section className={styles.loading}>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
        />
    </section>
  )
}