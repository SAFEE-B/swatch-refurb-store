
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom'; // Use NavLink for active styling
import { Nav, NavLogo, NavMenu, NavItem } from './Navbar.styles'; // Keep your styles
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import styled from 'styled-components'; // <<< Moved import here

// Define styled NavLink based on RouterNavLink for active class styling
const StyledNavLink = styled(RouterNavLink)`
  color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 1.5rem;
    right: 1.5rem;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      transform: scaleX(1);
    }
  }

  /* react-router-dom adds 'active' class by default */
  &.active {
    color: ${({ theme }) => theme.colors.primary};
     &::after {
       transform: scaleX(1);
       background-color: ${({ theme }) => theme.colors.secondary}; // Different color for active
     }
  }
`;


const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Nav variants={navVariants} initial="hidden" animate="visible">
      {/* Link logo to homepage */}
      <NavLogo as={RouterNavLink} to="/">
        <img src={logo} alt="ReSwatch Logo" />
      </NavLogo>

      <NavMenu>
        <NavItem>
          <StyledNavLink to="/" >Home</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/shop">Shop</StyledNavLink>
        </NavItem>
         <NavItem>
            {/* Optionally link to the About section if it's on the homepage */}
            {/* Or create a separate /about page later */}
             <StyledNavLink to="/#about" onClick={(e) => {
                // Handle smooth scroll for hash links on the same page if needed
                if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // If on another page, navigate first, then scroll (requires more complex logic)
                    // For simplicity, just navigate for now.
                }
             }}>About</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/admin">Admin</StyledNavLink> {/* Link to Admin */}
        </NavItem>
        {/* Add other links like Contact if needed */}
      </NavMenu>
    </Nav>
  );
};


export default Navbar;