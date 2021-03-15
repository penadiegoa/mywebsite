import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NavItem.css';

const NavItem = props => {

  const [open, setOpen] = useState(false);
  const path = useLocation().pathname;
  let liClasses = "nav-item";

  if (props.exact) {
    if (path === props.to) {
      liClasses += " active-nav-item";
    }
  } else {
    if (path.includes(props.to)) {
      liClasses += " active-nav-item";
    }
  }

  return (
    <li 
      className={liClasses}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      >
      <a href={props.to} className="nav-item-link">{props.title}</a>
      {open && props.children}
    </li>
  )
}

export default NavItem; 