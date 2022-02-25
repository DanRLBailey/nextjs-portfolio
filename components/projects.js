import styles from '../styles/Projects.module.scss'
import projectsData from '../src/projects-data.json'
import { useEffect, useState } from 'react'
import Project from './project'
import cn from 'classnames'
import Image from 'next/image'

export default function Home() {
    const [shownProjects, setShownProjects] = useState(projectsData);
    const [modalShown, setModalShown] = useState(false);
    const [modalData, setModalData] = useState("");
    const [modalVideo, setModalVideo] = useState("");

    const toggleShowProjects = () => {
        if (shownProjects.length > 4)
            setShownProjects(shownProjects.filter((x, i) => i <= 3));
        else
            setShownProjects(projectsData);
    }

    useEffect(() => {
        setShownProjects(shownProjects.filter((x, i) => i <= 3));
    }, [])

    const openModal = (data, video) => {
        setModalShown(true);
        setModalVideo(video);
        setModalData(data);
    }

    const closeModal = () => {
        setModalShown(false);
    }

    return (
        //TODO: Add modals for more info
        <section className={styles.projects} id='projects'>
            <div className={styles.cards}>
                {shownProjects.map((proj) => (<Project data={proj} openModal={openModal} />))}
            </div>
            <div className={styles.toggleContainer}>
                <button onClick={toggleShowProjects}><span>Show More</span></button>
            </div>

            {modalShown &&
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <div className={styles.infoContainer}>
                            <div className={styles.video}>
                                <video src={`/videos/${modalVideo}.mp4`} controls muted autoPlay playsInline></video>
                            </div>
                            <div className={styles.info}>
                                {modalData}
                            </div>
                        </div>
                        <div className={styles.close} onClick={() => closeModal()}>
                            x
                        </div>
                    </div>
                </div>}
        </section>
    )
}