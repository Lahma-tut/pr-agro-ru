import Image from "next/image"
import styles from "./card.module.css"
import Atributes from "./Atributes"
import Price from "./Price"

export default function Card({ product }) {
  return (
    <section className={styles.card}>
      <div className={styles.features}>
        <div className={styles.image}>
          <Image src="/korsar-super-vrk-10l.jpeg"
            alt="korsar-super-vrk-10l"
            width={600}
            height={600} />
        </div>
        <div className={styles.desc}>
          <div>{product.description}</div>
          <Atributes
            ingredient={product.ingredient}
            packing={product.packing}
            manufacturer={product.manufacturer}
          />
          <Price />
        </div>
      </div>
      <div className={styles.benefits}>
        <p>
          Здесь будет основной текст!
        </p>
      </div>
    </section>
  )
};