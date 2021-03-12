import './NavDropdown.css';

const NavDropdown = props => {

  return (
    <ul className="nav-dropdown">
      {props.children}
    </ul>
  )
}

export default NavDropdown;
