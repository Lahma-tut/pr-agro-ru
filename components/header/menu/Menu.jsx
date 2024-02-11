'use client'
import s from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Menu() {
    return (
    <nav className={s.menu} >
        <button className={s.button}>
            <span className={s.icon_menu}><FontAwesomeIcon icon={faBars} /></span>
            {/* <Link className={s.link} href="/shop">КАТАЛОГ</Link> */}
            {/* <ul className={s.submenu}>
                <li><Link href="/">О нас</Link></li>
                <li><Link href="/shop">Каталог</Link></li>
                <li><Link href="#">Доставка</Link></li>
                <li><Link href="#">Контакты</Link></li>
            </ul> */}
        </button>
    </nav>
    );
}
