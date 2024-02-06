import Link from "next/link";
import styles from "./breadcrumbs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Headling({ h1, h2 }: any) {

  
  return (
    <>
    <div className={styles.container}>
      <article>
        <Link href="/shop" className={styles.link}>
          { h2 && <span className={styles.icon}><FontAwesomeIcon icon={faArrowLeft} /></span>}
          <h2>{ h2 }</h2>
        </Link>
        </article>
      <article className={styles.heading}>
        <h1>{ h1 }</h1>
        </article>
    </div>
  </>
  )
}