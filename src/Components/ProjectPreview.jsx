import { Link } from "react-router-dom"
import styles from './ProjectPreview.module.css'
import hyphenateWords from "../utilities/hyphenateWords"


const ProjectPreview = (props) => {
  
  console.log('hihi', props.name, props.image)

  const path = hyphenateWords(props.name)
  console.log(path)
  return ( 
    <>

    <Link to={path}>
      <div className={styles.projectCard}>
        <img src={props.image} alt=""/>
        <h2>{props.name}</h2>
      </div>
    </Link>
    </>
  )
}

export default ProjectPreview