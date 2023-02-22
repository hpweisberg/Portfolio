import { myProjects } from '../../data/projects'
import ProjectsList from '../../Components/ProjectsList'
import styles from './Projects.module.css'


// import { useState } from 'react'


const Projects = () => {
  // const [projectData, setProjectData] = useState(projectData)

  return (
    <>
      <div className={styles.projectsContainer}>
        <div className={styles.heroImg}>
        </div>
        <div className={styles.projectTextContainer}>
          <h1 className={styles.projects}>Check Out My <span className={styles.popTitle}>Work</span></h1>
          <p className={styles.projectDis}>During my bootcamp, I had the opportunity to work on a variety of projects that challenged me to think creatively and strategically. From developing <span className={styles.pop}> full-stack web applications </span> to building <span className={styles.pop}>robust APIs, </span> each project helped me hone my skills as a software engineer and designer. 
          </p>
          <ProjectsList myProjects={myProjects} />

        </div>
      </div>
    </>
  )
}

export default Projects
