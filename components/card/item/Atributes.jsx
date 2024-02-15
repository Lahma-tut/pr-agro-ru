import styles from './Atributes.module.css';
import Link from 'next/link';

export default async function Atributes({ ingredient, manufacturer, packing }) {
    
    return (
        <>
        <section className={styles.atributes}>
            <h6 className={styles.h6}>Состав:</h6>
            <ul className={styles.ingredient}>
                {
                    ingredient.map((ingredient) => (
                        <li key={ingredient.id}>
                            <Link href={`/catalog/ingredient/${ingredient.slug}`}>
                                { ingredient.title }
                            </Link>
                        </li>
                    ))
                }
                </ul>
        </section>
        <section className={styles.atributes}>
            <h6 className={styles.h6}>Культура:</h6>
            <ul className={styles.culture}>
                <li><a href="#">Пшеница озимая,</a></li>
                <li><a href="#">Пшеница яровая,</a></li>
                <li><a href="#">Ячмень яровой</a></li>
            </ul>
        </section>
        <section className={styles.atributes}>
            <h6 className={styles.h6}>Вредный объект:</h6>
            <ul className={styles.harmful}>
                <li><a href="#">Метлица полевая,</a></li>
                <li><a href="#">Овсюг,</a></li>
                <li><a href="#">Однолетние злаковые сорняки,</a></li>
                <li><a href="#">Просо куриное,</a></li>
                <li><a href="#">Просо сорнополевое,</a></li>
                <li><a href="#">Щетинник</a></li>
            </ul>
        </section>
        <section className={styles.manufacturer}>
            <h6 className={styles.h6}>Производитель:</h6>
            <div className={styles.item}>
                <Link href="#">{ manufacturer.map((m) => (m.title))}</Link>
            </div>
        </section>
        <section className={styles.package}>
            <h6 className={styles.h6}>Упаковка:</h6>
            <div className={styles.item}>{ packing.map((p) => (p.title))}<span> л</span></div>
        </section>
        </>                  
    )
}