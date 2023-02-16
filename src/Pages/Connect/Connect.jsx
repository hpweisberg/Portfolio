import styles from './Connect.module.css'


const Connect = () => {


  return (
    <>
    {/* <Nav /> */}
      <div className={styles.connecContainer}>
        <section className={styles.content}>
          <h1 className={styles.connect}>Connect</h1>
          <div className={styles.socialLinks}>
            <a href="https://github.com/hpweisberg" className={styles.github}><div className={styles.github}></div></a>
            <a href="https://www.linkedin.com/in/harrisonweisberg/" className={styles.linkedIn}><div className={styles.linkedIn}></div></a>
            <a href="https://twitter.com/Harrison_PW" className={styles.twitter}><div className={styles.twitter}></div></a>
            {/* Fix download */}
            <a href="../../../public/harrisonWeisbergResume.pdf" download="harrisonWeisbergResume.pdf" className={styles.resume}><div className={styles.resume}></div></a>
          </div>
        </section>

        <form action="POST" autoComplete='off'>
          <label htmlFor="nameInput">Name</label>
          <input type="text" name="name" id='nameInput'></input>
          <label htmlFor="emailInput">Email</label>
          <input type="text" name="email" id='emailInput'></input>
          <label htmlFor="messageInput">Message</label>
          <input type="text" name="message" id='messageInput'></input>

          <button className={styles.sendMessageBtn} type='submit'>Send</button>
        </form>
      </div>
    </>
  )
}

export default Connect