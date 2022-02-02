import projectStyles from '../styles/Projects.module.scss'

export default function Home() {
    return (
        <section className={projectStyles.projects}>
            <div className={projectStyles.cards}>
                <div className={projectStyles.card}>
                    <h1>Final Year Project</h1>
                    <div className={projectStyles.tech}>
                        <span className={projectStyles.technologies}>C#</span>
                        <span className={projectStyles.technologies}>Unity</span>
                    </div>
                </div>
                <div className={projectStyles.card}>
                    <h1>Rhythm-Based Runner</h1>
                    <div className={projectStyles.tech}>
                        <span className={projectStyles.technologies}>C#</span>
                        <span className={projectStyles.technologies}>Unity</span>
                    </div>
                </div>
                <div className={projectStyles.card}>
                    <h1>Vue Calendar Holidays</h1>
                    <div className={projectStyles.tech}>
                        <span className={projectStyles.technologies}>VueJS</span>
                        <span className={projectStyles.technologies}>SASS</span>
                        <span className={projectStyles.technologies}>REST</span>
                    </div>
                </div>
            </div>
        </section>
    )
}