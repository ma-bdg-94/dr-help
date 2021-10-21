import { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = props => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Dr. Help
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/forum"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Forum
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/institutions"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Institutions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/subjects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Academic Subjects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

Navigation.propTypes = {

}

export default Navigation
