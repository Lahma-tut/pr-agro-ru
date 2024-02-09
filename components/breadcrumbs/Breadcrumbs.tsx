import styles from "./breadcrumbs.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumbs({ h1, h2 }: any) {
  return (
      <section className={styles.breadcrumb}>
        <div className={styles.box}>
          <h2 className={styles.h2}>
            <Link href="#" className={styles.link}>
              { h2 && <span className={styles.icon}>
              <FontAwesomeIcon icon={faArrowLeft} /></span>}
              { h2 }
          </Link>
          </h2>
          <h1 className={styles.h1}>
            { h1 }
            </h1>
        </div>
      </section>
  );
}