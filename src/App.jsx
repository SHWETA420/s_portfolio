import styles from "./App.module.css"
import { About } from "./components/About/about"
import { Contact } from "./components/Contact/Contact"
import { Experiance } from "./components/Experiance/Experiance"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { ProjectCard } from "./components/Projects/ProjectCard"
import { Projects } from "./components/Projects/Projects"

function App() {

  return (
   <>
   <div className={styles.App}>
    <Navbar />
    <Hero/>
    <About/>
    <Experiance/>
    <Projects/>
    <Contact/>
   </div>

   </>
  )
}

export default App
