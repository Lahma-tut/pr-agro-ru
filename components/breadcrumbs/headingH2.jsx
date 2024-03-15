'use client'

import styles from "./breadcrumbs.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function HeadingH2({ h2 }) {
  return (
    <>
      <h2 className={styles.h2}>
        <Link href="#" className={styles.link}>
          {h2 && <span className={styles.icon}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </span>}
          { h2 }
        </Link>
      </h2>
    </>
  )
};