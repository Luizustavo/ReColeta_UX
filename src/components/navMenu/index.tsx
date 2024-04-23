import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import './style.css';

interface NavLinkProps {
  to: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, text }) => {
  return (
    <RouterNavLink to={to} className="nav-link">
      {text}
    </RouterNavLink>
  );
}

export default NavLink;