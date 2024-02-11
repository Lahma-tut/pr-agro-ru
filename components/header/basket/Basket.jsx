'use client'
import s from "./basket.module.css";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Basket() {
    return (
        <div className={s.basket}>
            <div className={s.icon_basket}><FontAwesomeIcon icon={faBasketShopping} /></div>
            <Link href='#' className={s.link}></Link>
        </div>
    )
}