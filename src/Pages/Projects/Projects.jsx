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
        <h1 className={styles.projects}>Check out my work</h1>
          <ProjectsList myProjects={myProjects} />

        </div>
      </div>
    </>
  )
}

export default Projects
