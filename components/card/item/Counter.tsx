'use client';
import { useState } from 'react';
import styles from './Counter.module.css';


export default function Counter() {
    const [count, setCount] = useState(1);

    
    return (
        <section>
            <div className={styles['panel']}>
                <div className={styles['counter']}>
                    <button onClick={() => setCount(count - 1)} className={styles['decrement']}>-</button>
                    <div className={styles['count']}>{ count }</div>
                    <button onClick={() => setCount(count + 1)} className={styles['increment']}>+</button>
                </div>
                <button className={styles['button-cart']}>ДОБАВИТЬ</button>
            </div>
        </section>
    )
}