import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.belowLine}>
                        <p>© rose nguyen</p>
                        <Link style={{ textDecoration: 'none' }} href={"https://github.com/mpedrano/Haven"}>
                            <p>Haven Github Repo</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}