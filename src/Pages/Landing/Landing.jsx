import Nav from '../../Components/Nav/Nav'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <>
      <Nav />
      <div className={styles.landingContainer}>
        <div className={styles.landing}></div>
        <div className={styles.landingSand}></div>
        <div className={styles.harrison}></div>

        <div className={styles.heroContainer}>
          <h1 className={styles.name}>Harrison Weisberg</h1>
          <ul className={styles.subName}>
            <li>Software Engineer, </li>
            <li>Designer, </li>
            <li>Creator</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Landing