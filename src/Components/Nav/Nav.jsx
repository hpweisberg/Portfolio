import styles from './Nav.module.css'
import { NavLink } from "react-router-dom"

import logo from '../../assets/HWLogo.png'

const Nav = () => {
  return (
    <>
      <nav className={styles.navigationBar}>
        <div className={styles.pageLinks}>
        <NavLink to='/About' >About</NavLink>
        <NavLink to='/Projects' >Projects</NavLink>
        <NavLink to='/Connect' >Connect</NavLink>
        <NavLink to='/' id={styles.logo} ><img src={logo} alt="HW logo" /></NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav;


{/* <nav className={styles.navigationBar}>
      <NavLink to='/' id={styles.logo}>Harrison</NavLink>
      <div className={styles.navAPC}>
        <NavLink to='/About' className={styles.navAPCLink} id={styles.about}>About</NavLink>
        <NavLink to='/Projects' className={styles.navAPCLink} id={styles.projects}>Projects</NavLink>
        <NavLink to='/Connect' className={styles.navAPCLink} id={styles.connect}>Connect</NavLink> */}