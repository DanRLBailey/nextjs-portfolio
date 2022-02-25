import cn from 'classnames'
import styles from '../styles/Skills.module.scss'

export default function Home() {
    return (
        <section className={styles.skills} id='skills'>
            <div className={cn(styles.cards, styles.main)}>
                <div className={styles.card}>
                    C#
                </div>
                <div className={styles.card}>
                    C++
                </div>
                <div className={styles.card}>
                    MVC
                </div>
                <div className={styles.card}>
                    Razor
                </div>
                <div className={styles.card}>
                    Unity/UE4
                </div>
                <div className={styles.card}>
                    SQL
                </div>
                <div className={styles.card}>
                    Git/Github
                </div>
                <div className={styles.card}>
                    TDD
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    HTML
                </div>
                <div className={styles.card}>
                    CSS
                </div>
                <div className={styles.card}>
                    SASS
                </div>
                <div className={styles.card}>
                    Bootstrap
                </div>
                <div className={styles.card}>
                    JS
                </div>
                <div className={styles.card}>
                    jQuery
                </div>
                <div className={styles.card}>
                    TS
                </div>
                <div className={styles.card}>
                    React
                </div>
                <div className={styles.card}>
                    Vue
                </div>
                <div className={styles.card}>
                    NextJS
                </div>
            </div>
        </section>
    )
}