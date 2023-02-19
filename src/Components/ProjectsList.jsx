import ProjectPreivew from './ProjectPreview'
import styles from './ProjectsList.module.css'

const ProjectsList = ({myProjects}) => {

  return (
    <>
      <ul className={styles.projectListBody}>
        {myProjects.map((project, idx) => 
          <li key={idx}>
            <ProjectPreivew image={project.screenshot} name={project.name} deploymentLink={project.deploymentLink} repoLink={project.repoLink} description={project.description}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default ProjectsList

