import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact =() => {
   return (
    <>
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free to Contact !</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gmail.png")} alt="Email Icon"></img>
                <a href="shwetasingh28072001@gmail.com">shwetasingh28072001@gmail.com</a>
            </li>
             <li className={styles.link}>
                <img src={getImageUrl("contact/linkdln.png")} alt="linkdln Icon"></img>
                <a href="linkedin.com/in/shweta-singh-567988219">linkedin.com/in/shweta-singh-567988219</a>
            </li>
             <li className={styles.link}>
                <img src={getImageUrl("contact/git.png")} alt="Email Icon"></img>
                <a href="https://github.com/SHWETA420">https://github.com/SHWETA420</a>
            </li>
        </ul>
    </footer>
    </>
   )
}