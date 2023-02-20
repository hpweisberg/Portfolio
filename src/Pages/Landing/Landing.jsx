
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
          <h1 className={styles.name}>HARRISON WEISBERG</h1>
          <ul className={styles.subName}>
            <li>Software Engineer </li>

            <li>Designer </li>
            <li>Creator</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Landing