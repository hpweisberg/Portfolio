import styles from './ProjectPreview.module.css'
// import hyphenateWords from "../utilities/hyphenateWords"
import githublogo from '../assets/githubMark.png'

import { techStackBack, techStackFront } from '../data/techStack'


const ProjectPreview = (props) => {

  // const path = hyphenateWords(props.name)
  // console.log(path)


  function getToolImage(toolName) {
    let img = ''
    techStackFront.forEach(tool => {
      if (tool.name === toolName) {
        img = tool.img
      }
    })
    techStackBack.forEach(tool => {
      if (tool.name === toolName) {
        img = tool.img
      }
    })
    return img
  }


  return (
    <>

      <div className={styles.projectCard}>

        <div className={styles.links}>
          <a href={props.repoLink} target='_blank' rel='noreferrer'><img src={githublogo} alt="" /></a>
          <a href={props.deploymentLink} target='_blank' rel='noreferrer'><h2>{props.name}</h2></a>
        </div>
        <div className={styles.imageTechContainer}>

          <div className={styles.techUsed}>
            {props.tools.map((tool, idx) => (
              <img key={idx} src={getToolImage(tool)} alt={tool} />
              ))}
          </div>
          <div className={styles.imageContainer}>
            <img src={props.image} alt="screenshoot of app" />
            {props.hackathonWinner ? 
              <div className={styles.hackathonBanner}><p>HACKATHON WINNER!</p></div>
            : null}
              <p>{props.description}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProjectPreview