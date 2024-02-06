import Image from "next/image";
import styles from "./card.module.css";
import Price from "./item/Price";
import Atributes from "./item/Atributes";

export const Card = ({ data }: any) => {
  return (
    <section className={styles.cart}>
      <div className={styles.features}>
         <div className={styles.image}>
          <Image src="/korsar-super-vrk-10l.jpeg" alt="korsar-super-vrk-10l" width={600} height={600} />
         </div>
         <div className={styles.desc}>
          <div>{ data.description }</div>
          <Atributes />
          <Price />
          </div>
      </div>
      <div className={styles.benefits}>
        <p>
          Основной текст
        </p>
        </div>
    </section>
  )
};
