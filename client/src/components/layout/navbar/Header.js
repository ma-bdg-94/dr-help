import { useState } from 'react'
import PropTypes from 'prop-types'

// import UI components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="dark" dark className="navbar">
        <NavbarBrand href="/" className="navbar-brand">Dr. Help</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr nav" navbar >
            <NavItem className="nav-item">
              <NavLink href="/components/" className="nav-link">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="nav-link">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {

}

export default Header
