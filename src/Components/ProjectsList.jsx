import ProjectPreivew from './ProjectPreview'
import styles from './ProjectsList.module.css'


const ProjectsList = ({myProjects}) => {


  return (
    <>
      <ul className={styles.projectListBody}>
        {myProjects.map((project, idx) => 
          <li key={idx}>
            <ProjectPreivew image={project.screenshot} name={project.name} deploymentLink={project.deploymentLink} repoLink={project.repoLink} description={project.description} tools={project.tools} hackathonWinner={project.hackathon}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default ProjectsList

