import styles from './Atributes.module.css';

export default function Atributes() {
    return (
        <>
        <section className={styles['atributes']}>
            <h6>Состав:</h6>
            <ul className={styles['ingredient']}>
                <li><span>49 г/л</span><a href="#">Клоквинтосет-мексил</a></li>
                <li><span>70 г/л</span><a href="#">Феноксапроп-П-этил</a></li>
                </ul>
        </section>
        <section className={styles['atributes']}>
            <h6>Культура:</h6>
            <ul className={styles['culture']}>
                <li><a href="#">Пшеница озимая,</a></li>
                <li><a href="#">Пшеница яровая,</a></li>
                <li><a href="#">Ячмень яровой</a></li>
            </ul>
        </section>
        <section className={styles['atributes']}>
            <h6>Вредный объект:</h6>
            <ul className={styles['harmful']}>
                <li><a href="#">Метлица полевая,</a></li>
                <li><a href="#">Овсюг,</a></li>
                <li><a href="#">Однолетние злаковые сорняки,</a></li>
                <li><a href="#">Просо куриное,</a></li>
                <li><a href="#">Просо сорнополевое,</a></li>
                <li><a href="#">Щетинник</a></li>
            </ul>
        </section>
        <section className={styles['atributes']}>
            <h6>Производитель:</h6>
            <ul className={styles['manufacturer']}>
                <li><a href="#">Avgust</a></li>
            </ul>
        </section>
        <section className={styles['atributes']}>
            <h6>Упаковка:</h6>
            <ul className={styles['package']}>
                <li>5 л</li>
            </ul>
        </section>
        </>                  
    )
}