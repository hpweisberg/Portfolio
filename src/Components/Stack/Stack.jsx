import { techStackFront, techStackBack } from "../../data/techStack";
import styles from './Stack.module.css'


const Stack = () => {
  // console.log(techStack)
  // const nameOrder = 
  return (
    <>
      <h3 className={styles.frontTitle}>Front-End Tech Stack</h3>
      <div className={styles.stackContainer}>
        {techStackFront.map((tech) =>
          <ul key={tech.name} className={styles.frontStack}>
            <li className={styles.name}>{tech.name}</li>
            <li className={styles.tech}><img src={tech.img} alt="logo" /></li>
          </ul>
        )}
      </div>
      <h3 className={styles.frontTitle}>Back-End Tech Stack</h3>
      <div className={styles.stackContainer}>
        {techStackBack.map((tech) =>
          <ul key={tech.name} className={styles.frontStack}>
            <li className={styles.name}>{tech.name}</li>
            <li className={styles.tech}><img src={tech.img} alt="logo" /></li>
          </ul>
        )}
      </div>
    </>
  )
}

export default Stack;