import styles from '../styles/Nav.module.scss'
import { useEffect, useState } from 'react'
import cn from 'classnames';
import Image from 'next/image'

export default function Home() {
    const [tooltipText, updateTooltipText] = useState("");
    const [tooltipShown, setShowTooltip] = useState(false);
    const [tooltipAnim, setShowTooltipAnim] = useState(styles.hidden);

    function showTooltip(text) {
        setShowTooltip(true);
        updateTooltipText(text);
        setShowTooltipAnim(styles.shown);
    }

    function hideTooltip() {
        setShowTooltip(false);
        setShowTooltipAnim(styles.hidden);
    }

    return (
        <section className={styles.navbar}>
            <div className={cn({ [styles.tooltipContainer]: true, [styles.shown]: tooltipShown })}>
                <span className={styles.tooltip}>{tooltipText}</span>
            </div>
            <ul className={styles.links}>
                <li className={styles.spacer}><div className={styles.spacer}></div></li>
                <li onMouseEnter={() => showTooltip("Home")} onMouseLeave={hideTooltip}>
                    <div>
                        <a href="#home">
                            <Image src="/images/home.svg" height={32} width={32} />
                        </a>
                    </div>
                </li>
                <li onMouseEnter={() => showTooltip("Projects")} onMouseLeave={hideTooltip}>
                    <div>
                        <a href="#projects">
                            <Image src="/images/code.svg" height={32} width={32} />
                        </a>
                    </div>
                </li>
                <li onMouseEnter={() => showTooltip("Skills")} onMouseLeave={hideTooltip}>
                    <div>
                        <a href="#skills">
                            <Image src="/images/check-circle.svg" height={32} width={32} />
                        </a>
                    </div>
                </li>
                <li className={styles.spacer}><div className={styles.spacer}></div></li>
                <li className={styles.spacer}><div className={styles.spacer}></div></li>
                <li onMouseEnter={() => showTooltip("Contacts")} onMouseLeave={hideTooltip}>
                    <div>
                        <a href="#contact">
                            <Image src="/images/user.svg" height={32} width={32} />
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
}