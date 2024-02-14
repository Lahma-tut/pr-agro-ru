import Counter from './Counter';
import styles from './Price.module.css';

export default function Price() {

    return (
        <>
        <section className={styles['price']}>
            <h6>Цена за л/кг:</h6>
            <ul>
                <li className={styles['basic']}>1 962<span className={styles['rub']}>₽</span></li>
                <li className={styles['info']}>рекомендованная на 2024 год</li>
            </ul>
        </section>
        <section className={styles['price']}>
            <h6>Цена за упаковку:</h6>
            <ul>
                <li className={styles['basic-package']}>9 810<span className={styles['rub']}>₽</span></li>
                <li className={styles['info']}>упаковка с НДС 20%</li>
            </ul>
        </section>
        <section className={styles['price']}>
            <h6>Со скидкой л/кг:</h6>
            <ul>
                <li className={styles['discount']}>1 351<span className={styles['rub']}>₽</span></li>
                <li className={styles['info']}>предлагаеммая цена</li>
            </ul>
        </section>
        <section className={styles['price']}>
            <h6>Ваша цена:</h6>
            <ul>
                <li className={styles['discount-package']}>6 756<span className={styles['rub']}>₽</span></li>
                <li className={styles['info']}>дополнительная скидка рассчитывается от объема</li>
            </ul>
        </section>
        <Counter />
        </>
    )
}