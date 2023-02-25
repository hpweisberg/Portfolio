import { useState, useRef, useEffect } from 'react'


import styles from './Nav.module.css'
import { NavLink } from "react-router-dom"
import Hamburger from './Hamburger';

import logo from '../../assets/HWLogo.png'

const Nav = () => {

  const [toggleNav, setToggleNav] = useState(false)
  const mobileLinks = useRef();

  // const navRef = useRef()

  function clickMenu(evt) {
    setToggleNav(!toggleNav)
    console.log(toggleNav);
  }

  useEffect( () => {
    const widthVal = toggleNav ? '0px' : '-300px';
    mobileLinks.current.style.marginLeft = widthVal;
  }, [toggleNav]);



  return (
    <>
      <nav className={styles.navigationBar}>

        <Hamburger clickMenu={clickMenu}/>
        <div ref={mobileLinks} className={styles.mobilePageLinks}>
          <NavLink to='/About' >About</NavLink>
          <NavLink to='/Projects' >Projects</NavLink>
          <NavLink to='/Connect' >Connect</NavLink>
          <NavLink to='/' id={styles.logo} ><img src={logo} alt="HW logo" /></NavLink>
        </div>
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
