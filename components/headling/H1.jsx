import Link from "next/link"
import styles from "./headling.module.css"

export default function H1({ title }) {
  return (
    <h1 className={styles.h1}>{ title }</h1>
  )
};