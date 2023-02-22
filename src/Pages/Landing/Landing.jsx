
import styles from './Landing.module.css'
import backgroundImg from '../../assets/hero-image.jpg'
import sandSlideImg from '../../assets/hero-image-sand.png'
import meImg from '../../assets/hero-harrison.png'



const Landing = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.heroImgContainer}>
          <div src={backgroundImg} alt="sand landscape" className={styles.landing}></div>
          <div src={sandSlideImg} alt="sand landscape" className={styles.sand}></div>
          <div src={meImg} alt="sand landscape" className={styles.meImg}></div>
        </div>

        <div className={styles.heroContentContainer}>
          <h1>Welcome to my corner of the tech world – I'm  <br/><span className={styles.name}>HARRISON WEISBERG</span> <span className={styles.subNameSpan}>engineer, designer, creator extraordinaire.</span> Leveraging my years of experience in PR, brand management, and analytics, I bring a unique perspective to app development. </h1>
          <h2>
          Whether you need a <span className={styles.pop}>sleek</span> and user-friendly interface, <span className={styles.pop}>powerful</span> backend architecture, or a <span className={styles.pop}>custom-made</span> solution that meets your unique needs, I have the skills to bring your vision to life. Let's collaborate and create an app that not only functions flawlessly but also engages and delights users!</h2>
          {/* <h1 className={styles.name}>HI, I'M HARRISON WEISBERG</h1> */}
          {/* <ul className={styles.subName}>
            <li>Software Engineer </li>
            <li>Designer </li>
            <li>Creator</li>
          </ul> */}
        </div>
      </div>
    </>
  )
}

export default Landing