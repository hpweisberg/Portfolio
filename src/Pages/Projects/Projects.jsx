import { myProjects } from '../../data/projects'
import ProjectsList from '../../Components/ProjectsList'
import styles from './Projects.module.css'


// import { useState } from 'react'


const Projects = () => {
  // const [projectData, setProjectData] = useState(projectData)

  return (
    <>
      {/* <Nav /> */}
        <div className={styles.projectsContainer}>
          <ProjectsList myProjects={myProjects} />
        </div>
      </>
      )
}

      export default Projects
