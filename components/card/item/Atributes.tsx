import styles from './Atributes.module.css';
import Link from 'next/link';

export default async function Atributes({ ingredient, packing, manufacturer }: any) {
    
    return (
        <>
        <section className={styles.atributes}>
            <h6>Состав:</h6>
            <ul className={styles.ingredient}>
                {
                    ingredient.map((ingredient: any) => (
                        <li key={ingredient.id}>
                            <Link href={`/catalog/tags/${ingredient.slug}`}>
                                { ingredient.title }
                            </Link>
                        </li>
                    ))
                }
                </ul>
        </section>
        <section className={styles.atributes}>
            <h6>Культура:</h6>
            <ul className={styles.culture}>
                <li><a href="#">Пшеница озимая,</a></li>
                <li><a href="#">Пшеница яровая,</a></li>
                <li><a href="#">Ячмень яровой</a></li>
            </ul>
        </section>
        <section className={styles.atributes}>
            <h6>Вредный объект:</h6>
            <ul className={styles.harmful}>
                <li><a href="#">Метлица полевая,</a></li>
                <li><a href="#">Овсюг,</a></li>
                <li><a href="#">Однолетние злаковые сорняки,</a></li>
                <li><a href="#">Просо куриное,</a></li>
                <li><a href="#">Просо сорнополевое,</a></li>
                <li><a href="#">Щетинник</a></li>
            </ul>
        </section>
        <section className={styles.atributes}>
            <h6>Производитель:</h6>
            <ul className={styles.manufacturer}>
                <li><a href="#">
                    { manufacturer.map((m: any) => (m.title))}
                    </a></li>
            </ul>
        </section>
        <section className={styles.atributes}>
            <h6>Упаковка:</h6>
            <ul className={styles.package}>
                <li>{ packing.map((p: any) => (p.title))}</li>
            </ul>
        </section>
        </>                  
    )
}