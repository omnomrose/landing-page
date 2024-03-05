import styles from './Header.module.css'
import Image from "next/image";
import Logo from '/public/assets/haven-yellow.svg'
import Link from "next/link";


export default function Header() {


    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Image src={Logo} width={110} height={100} alt="logo" />
                    <div className={styles.links}>
                        <Link href={"/"} className={styles.resources}>resources</Link>
                        <button className={styles.signBtn}>sign up</button>
                    </div>
                </div>
            </main>
        </>
    )

}