import Image from "next/image";
import styles from './about.module.css'


export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_img}>
        <Image
          src='/pomidory-v-rukah-21011.jpeg'
          alt='About'
          fill
        />
      </div>
      <div className={styles.about_body}>
        <div className={styles.about_title}>
          <h2>Премьер-Агро</h2>
        </div>
        <div className={styles.about_text}>
          <p>Компания ООО «Премьер-Агро» - специализируется на оптово-розничной продаже и
            поставке химических средств защиты растений, широкого перечня удобрений, микроэлементов,
            стимуляторов роста, семян овощных и пропашных культур, препаратов для дезинфекции
            (воды, оборудования, тары, конструкций), субстратов, клеевых ловушек широкого назначения,
            а также биопрепаратов различного спектра действия.</p>

          <p>Мы начали свой путь в 2017 г. и за этот короткий промежуток времени смогли сформировать
            дружный коллектив профессионалов своего дела, имеющих агрономическое образование и
            практический опыт работы в сельскохозяйственной отрасли более 10 лет.</p>
        </div>
        <button className={styles.about_button}>ПОДРОБНЕЕ</button>
      </div>
    </div>
  )
}