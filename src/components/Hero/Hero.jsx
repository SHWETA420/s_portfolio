import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hi, I'am Shweta
                    </h1>
                    <p className={styles.description}>
                        I'm a Full Stack Developer with 2.6 years of experience in .NET, SQL, and React.js. I enjoy building clean, scalable web applications and bringing ideas to life through code.
                    </p>
                    <a
                        className={styles.contactdetail}
                        href={"/assets/hero/Shweta_Resume.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        Download Resume
                    </a>
                </div>
                <img className={styles.heroImg} src={getImageUrl("hero/favicon.png")} alt="Hero image of me"></img>
                <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>
            </section>
        </>
    )
}
