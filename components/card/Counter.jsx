'use client'
import { useState } from 'react'
import styles from './counter.module.css'


export default function Counter() {
	const [count, setCount] = useState(1)


	return (
		<>
			<div className={styles.panel}>
				<div className={styles.counter}>
					<button className={styles.decrement} 
									onClick={() => setCount(count - 1)}>-</button>

					<div className={styles.count}>{ count }</div>

					<button className={styles.increment} 
									onClick={() => setCount(count + 1)}>+</button>
				</div>
				<button className={styles.button_cart}>ДОБАВИТЬ</button>
			</div>
		</>
	)
}