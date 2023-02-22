import styles from './About.module.css'



const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>

        <div className={styles.heroImg}>
        </div>
        <div className={styles.aboutTextContainer}>

          <h1 className={styles.about}>About <span className={styles.popTitle}>Me</span></h1>

          <p>I’m a full stack engineer who is completing a bootcamp at General Assembly. Making the career switch to software engineering was easy for since I grew up with a borderline obsession with tech. Many weekends were spent bouncing from Apple to the Verizon store.</p><p> My thirst for the latest cutting edge tech led me to learning how to build software myself. I started coding with Harvard’s CS50 and I knew this was the path for me right away. Currently I’m working in <span className={styles.pop}>Javascript, React, Typescript</span> but I’m always looking to expand my skillset!</p>

        </div>
      </div>
    </>
  )
}

export default About