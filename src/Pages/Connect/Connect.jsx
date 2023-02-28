import styles from './Connect.module.css'
import github from '../../assets/githubMark.png'
import linkedIn from '../../assets/linkedIn.png'
import twitter from '../../assets/twitter.png'
import resume from '../../assets/resume.png'


const Connect = () => {

  const onButtonClick = () => {
    fetch('HarrisonWeisbergResume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob)
            let alink = document.createElement('a')
            alink.href = fileURL
            alink.download = 'HarrisonWeisbergResume.pdf'
            alink.click()
        })
    })
  }


  return (
    <>
      <div className={styles.connectContainer}>
        <div className={styles.heroImg}>
        </div>
        <div className={styles.connectTextContainer}>
          <section className={styles.connect}>
            <h1>Lets <span className={styles.popTitle}>Chat</span></h1>
            <div className={styles.socialLinks}>
              <a href="https://github.com/hpweisberg" className={styles.github}><img src={github} alt="" /></a>
              <a href="https://www.linkedin.com/in/harrisonweisberg/" className={styles.linkedIn}><img src={linkedIn} alt="" /></a>
              <a href="https://twitter.com/Harrison_PW" className={styles.twitter}><img src={twitter} alt="" /></a>
              <div className={styles.resume} onClick={onButtonClick}><img src={resume} alt="resume" /></div>
            </div>
          </section>

          <form data-netlify="true" autoComplete='off' className={styles.form}>
            <div className={styles.formTop}>
              <div className={styles.topName}>

                <label type='hidden' name='subject' value='Message from harrisonweisberg.com'></label>
                <label htmlFor="nameInput">Name</label>
                <input type="text" name="name" id='nameInput' required></input>
              </div>
              <div className={styles.topEmail}>
                <label htmlFor="emailInput">Email</label>
                <input type="email" name="email" id='emailInput' required></input>
              </div>
            </div>
            <div className={styles.message}>

              <label htmlFor="messageInput">Message</label>
              <textarea type="text" name="message" id='messageInput' required></textarea>
            </div>

            <button className={styles.sendMessageBtn} type='submit'>Send</button>
          </form>
          {/* <form action="POST" autoComplete='off' className={styles.form}>
            <div className={styles.formTop}>
              <div className={styles.topName}>

                <label htmlFor="nameInput">Name</label>
                <input type="text" name="name" id='nameInput' required></input>
              </div>
              <div className={styles.topEmail}>
                <label htmlFor="emailInput">Email</label>
                <input type="text" name="email" id='emailInput' required></input>
              </div>
            </div>
            <div className={styles.message}>

              <label htmlFor="messageInput">Message</label>
              <textarea type="text" name="message" id='messageInput' required></textarea>
            </div>

            <button className={styles.sendMessageBtn} type='submit'>Send</button>
          </form> */}
        </div>
      </div >
    </>
  )
}

export default Connect