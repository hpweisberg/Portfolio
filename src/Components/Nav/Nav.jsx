import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navigation-bar">
        <NavLink to='/' id='logo'>Harrison</NavLink>
        <div className="nav-APC">
          <NavLink to='/About' id='logo'>About</NavLink>
          <NavLink to='/Projects' id='logo'>Projects</NavLink>
          <NavLink to='/Connect' id='logo'>Connect</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav;