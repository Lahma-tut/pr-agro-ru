'use client'
import styles from './basket.module.css'
import Link from 'next/link'
import { RiShoppingCartLine } from 'react-icons/ri'


export default function Basket() {
	return (
		<>
			<ul className={styles.list}>
				<li>
					<Link href='/'>
						<RiShoppingCartLine className={styles.icon} />
					</Link>
					</li>
			</ul>
		</>
	)
}