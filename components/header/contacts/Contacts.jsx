import s from "./contacts.module.css";

export default function Contacts() {
    return (
        <div className={s.contacts}>
            <h6 className={s.mail}>agro@pr-agro.ru</h6>
            <h6 className={s.tel}>8 (495) 198-07-97</h6>
        </div>
    );
}