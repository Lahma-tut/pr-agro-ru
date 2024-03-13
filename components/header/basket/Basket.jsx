'use client'
import styles from "./basket.module.css";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Basket() {
	return (
		<details className={styles.details_nav}>
			<summary className={styles.summary_nav}>КОРЗИНА</summary>
			<ul className={styles.summary_list}>
				<li><Link href='/'>О нас</Link></li>
				<li><Link href='/catalog'>Каталог</Link></li>
				<li><Link href='#'>Доставка</Link></li>
				<li><Link href='#'>Контакты</Link></li>
			</ul>
		</details>
	)
}