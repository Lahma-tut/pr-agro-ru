import Link from 'next/link'
import styles from './headling.module.css'

type Props = {
  title: string | undefined
}

export const H1 = ({ title }: Props) => {
  return (
    <div className={styles.h1_body} >
      <h1>{ title }</h1>
    </div>
  )
}