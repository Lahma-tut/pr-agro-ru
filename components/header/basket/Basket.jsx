'use client'
import s from "./basket.module.css";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Basket() {
    return (
        <button>
            <div className={s.icon_basket}>
                <FontAwesomeIcon icon={faBasketShopping} />
            </div>
        </button>

    )
}