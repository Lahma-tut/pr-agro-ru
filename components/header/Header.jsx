import styles from './header.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import Link from 'next/link'
import Menu from './menu/Menu'
import Basket from './basket/Basket'
import Search from './search/Search'

function Header() {
	return (
	<header className={styles.header}>
		<div className={styles.logo}>
			<Link href='/'>
				<Image src={logo} alt='logo' width={210} objectFit='cover' />
			</Link>
		</div>
		<div className={styles.search}>
			<Search />
		</div>
		<nav className={styles.menu} >
			<Menu />
		</nav>
		<div className={styles.basket}>
			<Basket />
		</div>
		<div className={styles.contacts}>
			<h6 className={styles.mail}>agro@pr-agro.ru</h6>
			<h6 className={styles.tel}>8 (495) 198-07-97</h6>
		</div>
	</header>
	)
}

export default Header;