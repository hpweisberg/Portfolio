import { useState } from 'react'


import styles from './Nav.module.css'
import { NavLink } from "react-router-dom"

import logo from '../../assets/HWLogo.png'

const Nav = () => {

  const [toggleNav, setToggleNav] = useState(false)

  // const navRef = useRef()

  function clickMenu(evt) {
    setToggleNav(!toggleNav)
  }



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
