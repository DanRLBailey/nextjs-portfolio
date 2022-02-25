import styles from '../styles/Projects.module.scss'
import projectsData from '../src/projects-data.json'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'

export default function Project({ data, openModal }) {
    const [infoShown, setInfoShown] = useState(false);
    const [infoData, setInfoData] = useState("");
    const [infoVideo, setInfoVideo] = useState("");

    const toggleInfo = (data, video) => {
        infoShown ? closeInfo() : openInfo(data, video);
    }

    const openInfo = (data, video) => {
        setInfoShown(true);
        setInfoVideo(video);
        setInfoData(data);
    }

    const closeInfo = () => {
        setInfoShown(false);
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.cell}>
                    <h1>{data.Name}</h1>
                    {data.Tagline !== ""
                        ? <span className={styles.tagline}>{data.Tagline}</span>
                        : ""}

                    <div className={styles.tech}>
                        {data.Technologies.map((tech, i) => (
                            <span className={styles.technologies} key={i}>{tech}</span>
                        ))}
                    </div>
                </div>
                {(data.Links.length > 0 || data.UseModal) &&
                    (<div className={cn(styles.cell, styles.linksContainer)}>
                        <div className={styles.links}>
                            {data.Links.map((link, i) => (
                                <div className={styles.link} key={i}>
                                    <a className={styles.linkHex} href={link.Link} target="_blank">
                                        {link.Site.toLowerCase() === "github"
                                            ? <Image src="/images/github.svg" height={32} width={32} />
                                            : <Image src="/images/external-link.svg" height={32} width={32} />}
                                    </a>
                                </div>
                            ))}
                            {data.UseModal && (
                                <div className={styles.link} >
                                    <a className={styles.linkHex} onClick={() => toggleInfo(data.Description, data.VideoName)}>
                                        <Image src="/images/info.svg" height={32} width={32} />
                                    </a>
                                </div>)
                            }
                        </div>
                    </div>)
                }
            </div>
            {(infoShown) &&
                <div className={styles.card}>
                    <div className={styles.info}>
                        {/* <span class={styles.infoData}>{infoData}</span> */}
                        {data.Descriptions.length > 0 &&
                        <ul>
                            {data.Descriptions.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>}
                        <video src={`/videos/${data.VideoName}.mp4`} controls></video>
                    </div>
                </div>
            }
        </div>
    )
}