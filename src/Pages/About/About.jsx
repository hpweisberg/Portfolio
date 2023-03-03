import styles from './About.module.css'

import aboutImg from '../../assets/about2.jpeg'
// import aboutImg from '../../assets/aboutMe3.png'




const About = ({Stack, techStack}) => {
  return (
    <>
      <div className={styles.aboutContainer}>

        {/* <div className={styles.heroImg}> */}
        {/* </div> */}
        <img src={aboutImg} alt="Harrison on a cliff in Zion National Park" className={styles.heroImg}/>
        <div className={styles.aboutTextContainer}>

          <h1 className={styles.about}>About <span className={styles.popTitle}>Me</span></h1>

          <p>I’m a full stack engineer who has graduated General Assembly's Software Engineering Bootcamp. Making the career switch was easy for me since I grew up with a borderline obsession with tech. Many weekends were spent bouncing from Apple to the Verizon store.</p><p> My thirst for the latest cutting edge tech led me to learning how to build software myself. I started coding with Harvard’s CS50 and I knew this was the path for me right away. Currently I’m working in <span className={styles.pop}>Javascript, React, Typescript</span> but I’m always looking to expand my skillset!</p>

        <Stack techStack={techStack} />
        </div>
      </div>
    </>
  )
}

export default About