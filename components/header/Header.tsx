import styles from "./header.module.css";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import Menu from "./menu/Menu";
import Contacts from "./contacts/Contacts";
import Basket from "./basket/Basket";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <Menu />
      <Basket />
      <Contacts />
    </header>
  );
}