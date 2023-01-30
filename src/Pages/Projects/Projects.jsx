import styles from './Projects.module.css'



const Projects = () => {
  return (
    <>

      <h3 className={styles.Projects}>Check out some of my projects</h3>

      <div className='project-card'>
        <div className='project-card-top-text'>
          <div className='project-card-text'>
            <a href="https://harrison-snake.netlify.app/"><h3 className='project-name'>MAMBA</h3></a>
            <a href="https://github.com/hpweisberg/snake#readme"><div className='github-logo'></div></a>
          </div>
          <p className='project-discription'>A take on the classic game of Snake. Players help NBA legend Kobe Bryant, aka, “Black Mamba” secure as many NBA Championship Trophies as possible without getting a technical foul!</p>
        </div>
        <a href="https://harrison-snake.netlify.app/"><div className='project-image-mobile'>{styles.Mamba}</div></a>
      </div>

      <div className='project-card'>
        <div className='project-image-mobile'>{styles.Fly}</div>
        <div className='project-card-top-text'>
          <div className='project-card-text'>
            <a href="https://flyy-harrisonw.fly.dev/"><h3 className='project-name'>FLYy</h3></a>
            <a href="https://github.com/hpweisberg/FLYy#readme"><div className='github-logo'></div></a>
          </div>
          <p className='project-discription'>A take on the classic game of Snake. Players help NBA legend Kobe Bryant, aka, “Black Mamba” secure as many NBA Championship Trophies as possible without getting a technical foul!</p>
        </div>
      </div>

    </>
  )
}

export default Projects