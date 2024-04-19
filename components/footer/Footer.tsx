import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        
        <div className={styles.top}>
          <section className={styles.about}>
            <h5>О компании</h5>
            <div><p><span>ООО «Премьер-Агро» 140080,</span><br/>
                    Московская обл., г. Лыткарино,<br/>
                    территория промзоны Тураево стр. 39Б<br/></p></div>
            <div><p>Мы специализируемся на оптово-розничной продаже и 
                    поставке химических средств защиты растений, широкого перечня удобрений, 
                    микроэлементов, стимуляторов роста, семян овощных и пропашных культур, 
                    препаратов для дезинфекции, субстратов, клеевых ловушек широкого 
                    назначения, а также биопрепаратов различного спектра действия.</p></div>
            </section>

            <section className={styles.contact}>
              <h5>Контакты</h5>
              <div>
                <div className={styles.mail}><p>agro@pr-agro.ru</p></div>
                <div className={styles.tel}><p>8 (495) 198-07-97</p></div>
              </div>
              <div><p>Время работы: Пн-Пт с 08:00 до 18:00<br/>
                        Выписка счетов, документов, оплата, 
                        консультация и самовывоз в будние дни или по договоренности.</p></div>
            </section>
        </div>
    
        <div className={styles.center}>
          <div className={styles.rating}>
            Счетчик
          </div>
        </div>
    
        <div className={styles.bottom}>
          <p>© 2017-2023 ООО «Премьер-Агро»</p>
          <p>Политика конфиденциальности и обработки данных</p>
          <p>www.pr-agro.ru</p>
        </div>
    </div>
  </footer>
  )
}