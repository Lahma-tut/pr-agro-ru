'use client'

import styles from './loading.module.css'
import { MutatingDots } from 'react-loader-spinner'

export function Loading() {
  return (
    <section className={styles.loading}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </section>
  )
}