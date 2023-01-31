import styles from './Projects.module.css'



const Projects = () => {
  return (
    <>
    <div className="projectsContainer">

      <h3 className={styles.Projects}>Check out some of my projects</h3>

      <div className={styles.projectCard}>
        <div className={styles.projectCardTopText}>
          <div className={styles.projectCardText}>
            <a href="https://harrison-snake.netlify.app/"><h3 className={styles.projectName}>MAMBA</h3></a>
            <a href="https://github.com/hpweisberg/snake#readme"><div className={styles.githubLogo}></div></a>
          </div>
          <p className={styles.projectDiscription}>A take on the classic game of Snake. Players help NBA legend Kobe Bryant, aka, “Black Mamba” secure as many NBA Championship Trophies as possible without getting a technical foul!</p>
        </div>
        <a href="https://harrison-snake.netlify.app/"><div className={styles.projectImageMobile}>{styles.Mamba}</div></a>
      </div>

      <div className={styles.projectCard}>
        <div className={styles.projectImageMobile}>{styles.Fly}</div>
        <div className={styles.projectCardTopText}>
          <div className={styles.projectCardText}>
            <a href="https://flyy-harrisonw.fly.dev/"><h3 className={styles.projectName}>FLYy</h3></a>
            <a href="https://github.com/hpweisberg/FLYy#readme"><div className={styles.githubLogo}></div></a>
          </div>
          <p className={styles.projectDiscription}>A take on the classic game of Snake. Players help NBA legend Kobe Bryant, aka, “Black Mamba” secure as many NBA Championship Trophies as possible without getting a technical foul!</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Projects