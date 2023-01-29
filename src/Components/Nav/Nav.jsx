import { NavLink } from "react-router-dom";

const Nav = () => {
  return ( 
    <>
      <nav className="navigation-bar">
        <NavLink to='/' id='logo'>Harrison</NavLink>
      </nav>
    </>
  )
}

export default Nav;