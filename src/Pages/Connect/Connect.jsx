import styles from './Connect.module.css'


const Connect = () => {
  return (
    <>
      <div className={styles.connecContainer}>

        <h1 className={styles.connect}>Connect</h1>
        <div className="socialLinks">
          <a href="https://github.com/hpweisberg"><div className={styles.github}></div></a>
          <a href="https://www.linkedin.com/in/harrisonweisberg/"><div className={styles.linkedIn}></div></a>
          <a href="https://twitter.com/Harrison_PW"><div className={styles.twitter}></div></a>
          <div className={styles.resume}></div>
        </div>

        <form action="POST" autoComplete='off'>
          <label htmlFor="nameInput">Name</label>
          <input type="text" name="name" id='name-input'></input>
          <label htmlFor="email-input">Email</label>
          <input type="text" name="email" id='email-input'></input>
          <label htmlFor="message-input">Message</label>
          <input type="text" name="message" id='message-input'></input>

          <button className='send-message-btn' type='submit'>Send</button>
        </form>
      </div>
    </>
  )
}

export default Connect