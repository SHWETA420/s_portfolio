import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imagesrc, description, skills, demo, source } }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.container}>
            <img src={getImageUrl(imagesrc)} alt={`Image of ${title}`} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>

            <p className={`${styles.description} ${expanded ? styles.expanded : styles.clamped}`}>
                {description}
            </p>
            {description.length > 100 && (
                <button className={styles.toggleBtn} onClick={() => setExpanded(!expanded)}>
                    {expanded ? "See less" : "See more"}
                </button>
            )}

            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>Demo</a>
                <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>Source</a>
            </div>
        </div>
    );
};
