import { myProjects } from "../data/projects"
import findProject from "../utilities/findProjects"

import { useParams } from "react-router-dom"
import Nav from "../Components/Nav/Nav"


const ProjectDetails = () => {
  const proj = useParams()
  console.log('hiiiisisis', proj)
  const project = findProject(proj.ProjectDetails)
  return (
    <>
      <Nav />
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <img src={project.screenshot} alt='' />
      <a href={project.repoLink}><button>GitHub</button></a>
      <a href={project.deploymentLink}><button>Link</button></a>
    </>
  )
}

export default ProjectDetails