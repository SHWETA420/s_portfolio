import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.tittle} href="/">Portfolio</a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeTcon.png")
                : getImageUrl("nav/menuTcon.png")
            }
            alt="menu icon"
          />
        </button>

        <ul
          className={`${styles.menuitems} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={()=>setMenuOpen(false)}>

          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
