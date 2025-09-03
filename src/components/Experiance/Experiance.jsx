import React, { useState } from "react";
import styles from "./Experiance.module.css";
import skills from "../../../Data/skills.json";
import history from "../../../Data/history.json";
import { getImage } from "../../utils";

export const Experiance = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <>
            <section id="experience" className={styles.container}>
                <h2 className={styles.title}>Experience</h2>

                {/* Cards Grid */}
                <div className={styles.cardGrid}>
                    {history.map((job, id) => (
                        <div
                            key={id}
                            className={styles.card}
                            onClick={() => setSelectedJob(job)}
                        >
                            <img src={getImage[job.imagesrc.split("/").pop().split(".")[0]]} alt={`${job.organisation} logo`} />
                            <h3>{job.role}</h3>
                            <p>{job.organisation}</p>
                            <span>{job.startDate} - {job.endDate}</span>
                        </div>
                    ))}
                </div>

                {/* Detailed View (on card click) */}
                {selectedJob && (
                    <div className={styles.detailView}>
                        <div className={styles.detailHeader}>
                            <h3>{`${selectedJob.role}, ${selectedJob.organisation}`}</h3>
                            <button onClick={() => setSelectedJob(null)} className={styles.closeButton}>×</button>
                        </div>
                        <p>{`${selectedJob.startDate} - ${selectedJob.endDate}`}</p>
                        <ul>
                            {selectedJob.experiences.map((exp, i) => (
                                <li key={i}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Vertical infinite scroll section */}
                <div className={styles.verticalSlider}>
                    <div className={styles.sliderTrack}>
                        {skills.map((skill, id) => (
                            <div key={id} className={styles.skillSlide}>
                                <img src={getImage[skill.imagesrc.split("/").pop().split(".")[0]]} alt={skill.title} />
                                <p>{skill.title}</p>
                            </div>
                        ))}
                        {skills.map((skill, id) => (
                            <div key={`dup-${id}`} className={styles.skillSlide}>
                                <img src={getImage[skill.imagesrc.split("/").pop().split(".")[0]]} alt={skill.title} />
                                <p>{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
