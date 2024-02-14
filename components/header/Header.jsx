"use client"
import styles from "./header.module.css";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Contacts from "./contacts/Contacts";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
            <Image src={ logo } alt="logo" width={220} objectFit="cover"/>
          </Link>
      </div>
      <div className={styles.search}>
        <form className={styles.form}>
              <span className={styles.icon_glass}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
              <input className={styles.input} type='text' placeholder="поиск..." />
          </form>
      </div>
      <nav className={styles.menu} >
          <button className={styles.menu_button}>
            МЕНЮ
          </button>
        </nav>

        <div className={styles.basket}>
          <Link href='#' className={styles.link}>
            КОРЗИНА
            </Link>
        </div>

        <div className={styles.contacts}>
            <h6 className={styles.mail}>agro@pr-agro.ru</h6>
            <h6 className={styles.tel}>8 (495) 198-07-97</h6>
        </div>
    </header>
  );
}