import s from "./logo.module.css";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Logo() {
    return (
        <div className={s.logo}>
            <Link href="/">
                <Image src={ logo } alt="logo" width={266}/>
            </Link>
        </div>
    );
}

