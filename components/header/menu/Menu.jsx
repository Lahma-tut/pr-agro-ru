'use client';

import styles from './menu.module.css';
import Link from 'next/link';

export default function Menu() {
    return (
        <div className={styles.nav_conteiner}>
            <details className={styles.details_nav}>
                <summary className={styles.summary_nav}>МЕНЮ</summary>
                    <ul className={styles.summary_list}>
                        <li><Link href='/'>О нас</Link></li>
                        <li><Link href='/catalog'>Каталог</Link></li>
                        <li><Link href='#'>Доставка</Link></li>
                        <li><Link href='#'>Контакты</Link></li>
                    </ul>
            </details>
        </div>
    )
};
