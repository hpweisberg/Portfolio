
import styles from './Landing.module.css'
import backgroundImg from '../../assets/hero-image.jpg'
import sandSlideImg from '../../assets/hero-image-sand.png'
import meImg from '../../assets/hero-harrison.png'
import mobileBackground from '../../assets/hero-image-background-crop.png'
import mobileSand from '../../assets/hero-image-sand-crop.png'
import mobileMe from '../../assets/hero-image-me-crop.png'

import { NavLink } from 'react-router-dom'
import { useRef } from 'react'


const Landing = ({ onButtonClick }) => {

  const animateMe = useRef(null)
  const animateSand = useRef(null)
  const animateMeDesktop = useRef(null)
  const animateSandDesktop = useRef(null)
  

  function handleImgClick(){
    animateMe.current.classList.remove(`${styles.animateMeClass}`)
    animateSand.current.classList.remove(`${styles.animateSandClass}`)
    animateMeDesktop.current.classList.remove(`${styles.animateDesktopMeClass}`)
    animateSandDesktop.current.classList.remove(`${styles.animateDesktopSandClass}`)
    void animateMe.current.offsetWidth
    void animateSand.current.offsetWidth
    void animateMeDesktop.current.offsetWidth
    void animateSandDesktop.current.offsetWidth
    animateMe.current.classList.add(`${styles.animateMeClass}`)
    animateSand.current.classList.add(`${styles.animateSandClass}`)
    animateMeDesktop.current.classList.add(`${styles.animateDesktopMeClass}`)
    animateSandDesktop.current.classList.add(`${styles.animateDesktopSandClass}`)
  }


  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.heroImgContainer}>
          <div src={backgroundImg} alt="sand landscape" className={styles.landing}></div>
          <div src={sandSlideImg} alt="sand landscape" className={styles.sand} ref={animateSandDesktop}></div>
          <div src={meImg} alt="sand landscape" className={styles.meImg} ref={animateMeDesktop} onClick={handleImgClick} onLoad={handleImgClick}></div>
        </div>

        <div className={styles.heroContentContainer}>
          <h1>Welcome to my corner of the tech world – I'm </h1>
          <h1 className={styles.name}>HARRISON WEISBERG</h1>
          <div className={styles.mobileImgContainer}>

            <img src={mobileBackground} alt="Harrison sliding on sand" className={styles.mobileImg} />
            <img src={mobileSand} alt="Harrison sliding on sand" className={styles.mobileImg} ref={animateSand} />
            <img src={mobileMe} alt="Harrison sliding on sand" className={`${styles.mobileImg} ${styles.animateMeClass}`} onClick={handleImgClick} onLoad={handleImgClick} ref={animateMe}/>
          </div>
          <h1>
            <span className={styles.subNameSpan}>engineer, designer, creator extraordinaire.</span> Leveraging my years of experience in PR & brand management, I bring a unique perspective to app development. </h1>
          <div className={styles.projectsResume}>
            <NavLink to='/Projects' ><button>PROJECTS</button></NavLink>
            <button onClick={onButtonClick}>RESUME</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing