import styles from './Connect.module.css'


const Connect = () => {
  return ( 
    <>
    
      <h1 className={styles.Connect}>Connect</h1>
      <a href="https://github.com/hpweisberg"><div className='github'></div></a>
      <a href="https://www.linkedin.com/in/harrisonweisberg/"><div className='linkedIn'></div></a>
      <a href="https://twitter.com/Harrison_PW"><div className='twitter'></div></a>
      <div className='resume'></div>
    
      <form action="POST" autoComplete='off'>
        <label htmlFor="name-input">Name</label>
        <input type="text" name="name" id='name-input'></input>
        <label htmlFor="email-input">Email</label>
        <input type="text" name="email" id='email-input'></input>
        <label htmlFor="message-input">Message</label>
        <input type="text" name="message" id='message-input'></input>

        <button className='send-message-btn' type='submit'>Send</button>
      </form>
    </>
  )
}

export default Connect