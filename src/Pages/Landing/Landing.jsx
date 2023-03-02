
import styles from './Landing.module.css'
import backgroundImg from '../../assets/hero-image.jpg'
import sandSlideImg from '../../assets/hero-image-sand.png'
import meImg from '../../assets/hero-harrison.png'
import mobileImg from '../../assets/mobileLanding.png'
import mobileBackground from '../../assets/hero-image-background-crop.png'
import mobileSand from '../../assets/hero-image-sand-crop.png'
import mobileMe from '../../assets/hero-image-me-crop.png'
import { NavLink } from 'react-router-dom'



const Landing = ({ onButtonClick }) => {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.heroImgContainer}>
          <div src={backgroundImg} alt="sand landscape" className={styles.landing}></div>
          <div src={sandSlideImg} alt="sand landscape" className={styles.sand}></div>
          <div src={meImg} alt="sand landscape" className={styles.meImg}></div>
        </div>

        <div className={styles.heroContentContainer}>
          <h1>Welcome to my corner of the tech world – I'm </h1>
          <h1 className={styles.name}>HARRISON WEISBERG</h1>
          <div className={styles.mobileImgContainer}>

            <img src={mobileBackground} alt="Harrison sliding on sand" className={styles.mobileImg} />
            <img src={mobileSand} alt="Harrison sliding on sand" className={styles.mobileImg} />
            <img src={mobileMe} alt="Harrison sliding on sand" className={styles.mobileImg} />
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