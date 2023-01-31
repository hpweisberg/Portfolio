import styles from './Nav.module.css'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <nav className={styles.navigationBar}>
        <NavLink to='/' id={styles.logo}>Harrison</NavLink>
        <div className={styles.navAPC}>
          <NavLink to='/About' className={styles.navAPCLink} id={styles.about}>About</NavLink>
          <NavLink to='/Projects' className={styles.navAPCLink} id={styles.projects}>Projects</NavLink>
          <NavLink to='/Connect' className={styles.navAPCLink} id={styles.connect}>Connect</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav;