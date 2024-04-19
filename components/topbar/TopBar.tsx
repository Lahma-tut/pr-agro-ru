import styles from './topbar.module.css'

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <ul className={styles.row}>
          <li>Московская обл., г. Лыткарино</li>
          <li>Пн-Пт 08:00 до 18:00 / Сб-Вс выходной</li>
          <li>Доставка</li>
          <li>Яндекс отзывы</li>
      </ul>
  </div>
  )
}