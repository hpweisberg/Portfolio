import styles from './Landing.module.css'

const Landing = () => {
  return (
    <>
      {/* <div className={styles.heroContainer}> */}
      <div className={styles.landing}></div>
      <div className={styles.landingSand}></div>
      <div className={styles.harrison}></div>

        <div className={styles.name}>Harrison Weisberg</div>
        <ul className={styles.subName}>
          <li>Software Engineer, </li>
          <li>Designer, </li>
          <li>Creator</li>
        </ul>
      {/* </div> */}
    </>
  )
}

export default Landing