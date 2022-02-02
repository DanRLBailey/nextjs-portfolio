import navStyles from '../styles/Nav.module.scss'

export default function Home() {
    return (
        <div className={navStyles.navbar}>
            <ul className={navStyles.links}>
                
            <li><div className={navStyles.spacer}></div></li>
                <li>
                    <div>
                        <a href="#home">
                            H
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#skills">
                            S
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#projects">
                            P
                        </a>
                    </div>
                </li>
                <li><div className={navStyles.spacer}></div></li>
                <li><div className={navStyles.spacer}></div></li>
                <li>
                    <div>
                        <a href="#contact">
                            C
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}