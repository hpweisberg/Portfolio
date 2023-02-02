// import { Link, } from "react-router-dom"
import styles from './ProjectPreview.module.css'


const ProjectPreview = (props) => {
  
  console.log('hihi', props.name, props.image)
  return ( 
    <>

      <div className={styles.projectCard}>
        <img src={props.image} alt=""/>
        <h2>{props.name}</h2>
      </div>

    </>
  )
}

export default ProjectPreview