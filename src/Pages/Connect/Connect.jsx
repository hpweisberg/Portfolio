import styles from './Connect.module.css'
import github from '../../assets/githubMark.png'
import linkedIn from '../../assets/linkedIn.png'
import twitter from '../../assets/twitter.png'
import resume from '../../assets/resume.png'


const Connect = () => {


  return (
    <>
      <div className={styles.connectContainer}>
        <div className={styles.heroImg}>
        </div>
        <div className={styles.connectTextContainer}>
          <section className={styles.connect}>
            <h1>Lets Chat</h1>
            <div className={styles.socialLinks}>
              <a href="https://github.com/hpweisberg" className={styles.github}><img src={github} alt="" /></a>
              <a href="https://www.linkedin.com/in/harrisonweisberg/" className={styles.linkedIn}><img src={linkedIn} alt="" /></a>
              <a href="https://twitter.com/Harrison_PW" className={styles.twitter}><img src={twitter} alt="" /></a>
              {/* Fix download */}
              <a href="./public/HarrisonWeisbergResume.pdf" download='HarrisonWeisbergResume.pdf' className={styles.resume}><img src={resume} alt="resume" /></a>
            </div>
          </section>

          <form action="POST" autoComplete='off' className={styles.form}>
            <div className={styles.formTop}>
              <div className={styles.topName}>

                <label htmlFor="nameInput">Name</label>
                <input type="text" name="name" id='nameInput'></input>
              </div>
              <div className={styles.topEmail}>
                <label htmlFor="emailInput">Email</label>
                <input type="text" name="email" id='emailInput'></input>
              </div>
            </div>
            <div className={styles.message}>

              <label htmlFor="messageInput">Message</label>
              <textarea type="text" name="message" id='messageInput'></textarea>
            </div>

            <button className={styles.sendMessageBtn} type='submit'>Send</button>
          </form>
        </div>
      </div >
    </>
  )
}

export default Connect