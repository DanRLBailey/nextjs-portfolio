import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'

import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useEffect } from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Bailey</title>
        <meta name="description" content="Daniel Bailey - Software Engineer" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <Nav/>

      <Hero/>

      <Projects/>

      <Skills/>

      <Contact/>

    </div>
  )
}
