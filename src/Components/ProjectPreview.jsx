import styles from './ProjectPreview.module.css'
import hyphenateWords from "../utilities/hyphenateWords"
import githublogo from '../assets/githubMark.png'


const ProjectPreview = (props) => {

  console.log('hihi', props.name, props.image, props.deploymentLink)

  const path = hyphenateWords(props.name)
  console.log(path)
  return (
    <>

      <div className={styles.projectCard}>
        <div className={styles.links}>
          <a href={props.repoLink} target='_blank' rel='noreferrer'><img src={githublogo} alt="" /></a>
          <a href={props.deploymentLink} target='_blank' rel='noreferrer'><h2>{props.name}</h2></a>
        </div>
        <div className={styles.imageContainer}>
          <img src={props.image} alt="screenshoot of app" />
          <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectPreview