import s from "./filter.module.css";

export default function Filter() {
  return (
    <div className={s.filter}>
      <details className={s.details}>
        <summary className={s.summary}>Фильтр</summary>
      <section className={s.section}>
        <h4>Производитель</h4>
        <ul>
          <li>
            <input type="checkbox" />
            <div className={s.company}>Adama</div>
            <div className={s.count}>22</div>
          </li>
          <li> 
            <input type="checkbox" />
            <div className={s.company}>Adob</div>
            <div className={s.count}>11</div>
          </li>
          <li>
            <input type="checkbox"/>
            <div className={s.company}>Afd</div>
            <div className={s.count}>2</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className={s.company}>AkzoNobel</div>
            <div className={s.count}>9</div>
          </li>
        </ul>
      </section>
      <section className={s.section}>
        <h4>Культура</h4>
        <ul>
          <li>
            <input type="checkbox" />
            <div className={s.company}>Арбуз</div>
            <div className={s.count}>13</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className={s.company}>Газон</div>
            <div className={s.count}>3</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className={s.company}>Горох</div>
            <div className={s.count}>2</div>
          </li>
          <li>
            <input type="checkbox" />
            <div className={s.company}>Гречка</div>
            <div className={s.count}>3</div>
           </li>
        </ul>
      </section>
      </details>
    </div>
  );
}
