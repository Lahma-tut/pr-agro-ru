import styles from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="поиск..." />
            <button className={styles.button} type="submit">
                <span className={styles.icon_glass}><FontAwesomeIcon icon={ faMagnifyingGlass } /></span>
            </button>
        </form>
    );
}
