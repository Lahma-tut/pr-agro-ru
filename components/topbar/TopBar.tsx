import s from "./topbar.module.css";

export default function TopBar() {
  return (
    <div className={s.box}>
      <ul className={s.row}>
          <li>Московская обл., г. Лыткарино</li>
          <li>Пн-Пт с 08:00 до 18:00</li>
          <li>О компании</li>
          <li>Доставка</li>
          <li>Контакты</li>
      </ul>
  </div>
  );
}