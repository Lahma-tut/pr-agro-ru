'use client'
import { LuMenuSquare } from 'react-icons/lu'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import styles from './menu.module.css'
import Link from 'next/link'

export default function Menu() {
	return (
		<>
				<ul className={styles.list}>
					<li>
						<Link href='/catalog'>
							<HiOutlineMenuAlt2 className={styles.icon}/>
						</Link>
						</li>
				</ul>
		</>
	)
}
