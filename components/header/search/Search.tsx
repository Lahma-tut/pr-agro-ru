'use client'
import s from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    return (
        <form className={s.form}>
            <span className={s.icon_glass}><FontAwesomeIcon icon={ faMagnifyingGlass } /></span>
            <input className={s.input} type='text' placeholder="Поиск" />
        </form>
    );
}