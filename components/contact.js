import cn from 'classnames'
import styles from '../styles/Contact.module.scss'
import Image from 'next/image'

export default function Home() {
    return (
        <section className={styles.contact} id='contact'>
            <div className={styles.links}>
                <div><a href="mailto:danbailey.813@gmail.com"><Image src="/images/mail.svg" height={32} width={32} /></a></div>
                <div><a href="https://github.com/DanRLBailey" target="_blank"><Image src="/images/github.svg" height={32} width={32} /></a></div>
                <div><a href="https://www.linkedin.com/in/daniel-bailey-289979162/" target="_blank"><Image src="/images/linkedin.svg" height={32} width={32} /></a></div>
            </div>
        </section>
    )
}