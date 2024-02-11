import s from "./logo.module.css";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Logo() {
    return (
        <div className={s.logo}>
            <Image src={ logo } alt="logo" width={266}/>
        </div>
    );
}

