import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
  return (
    <section>
    <div className={styles.home}>
      <div className={styles.home_item}>
        <p>
          Главная страница в разработке, но каталог работает 🙂
        </p>
        <Link className={styles.link} href="/catalog">Каталог</Link>
      </div>
    </div>
    </section>
  );
}
