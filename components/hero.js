import styles from "../styles/Hero.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div>
          <h1>Daniel Bailey</h1>
          <h2>Full-Time Software Engineer</h2>
          <h2>based in Greater Manchester, U.K.</h2>
          <div className={styles.social}>
            <div>
              <a href="https://github.com/DanRLBailey" target="_blank">
                <Image src="/images/github.svg" height={32} width={32} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/daniel-bailey-289979162/"
                target="_blank"
              >
                <Image src="/images/linkedin.svg" height={32} width={32} />
              </a>
            </div>
            <div>
              <a href="../CV-PDF.pdf" target="_blank">
                <span>CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
