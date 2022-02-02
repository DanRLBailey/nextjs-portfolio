import heroStyles from '../styles/Hero.module.scss'

export default function Home() {
    return (
        <section className={heroStyles.hero}>
            <div className={heroStyles.container}>
                <h1>Daniel Bailey</h1>
                <h2>Software Engineer</h2>
                <h2>based in Greater Manchester, U.K.</h2>
                <div className={heroStyles.social}>
                    <a href="" target="_blank">gmail</a>
                    <a href="https://github.com/DanRLBailey" target="_blank">github</a>
                    <a href="https://www.linkedin.com/in/daniel-bailey-289979162/" target="_blank">linkedin</a>
                </div>
            </div>
        </section>
    )
}