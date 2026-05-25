// src/components/Navbar/Navbar.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)`
  background: rgba(255, 255, 255, 0.9); // Slightly transparent white
  backdrop-filter: blur(10px); // Blur effect for modern look
  height: 80px;
  display: flex;
  justify-content: space-between; // Changed to space-between
  align-items: center;
  padding: 0 4rem; // Increased padding
  font-size: 1.8rem;
  position: fixed; // Make it sticky
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: background-color 0.3s ease;

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
     padding: 0 2rem;
     height: 70px;
   }
`;

export const NavLogo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    height: 40px; // Adjust as needed
    width: auto;
    margin-right: 1rem; // Space between logo and potential text
  }

  // If using text logo instead of img
  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    font-size: 2.4rem;
  }

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    img { height: 35px; }
    span { font-size: 2rem; }
   }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    // Basic mobile menu logic placeholder - Needs JS to toggle
    display: none; // Hide by default on smaller screens
    /* Implement drawer or burger menu logic here */
  }
`;

export const NavItem = styled.li`
  height: 80px; // Match Nav height
  display: flex; // Use flex to center vertically
  align-items: center; // Use flex to center vertically
`;

export const NavLink = styled.a` // Use 'a' for now, Link from react-router later if needed
  color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem; // More spacing
  height: 100%;
  cursor: pointer;
  position: relative; // For underline animation
  transition: color 0.3s ease;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: 20px; // Adjust position of underline
    left: 1.5rem;
    right: 1.5rem;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1); // Smooth transition
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      transform: scaleX(1);
    }
  }

  &.active { // Example active class
    color: ${({ theme }) => theme.colors.primary};
     &::after {
       transform: scaleX(1);
     }
  }
`;

// Add styles for a potential mobile menu icon (burger) if needed later