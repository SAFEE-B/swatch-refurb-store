// src/components/HeroSection/HeroSection.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { itemVariants } from '../../styles/animations';
// Optional: Import a background image
// import HeroBgImg from '../../assets/images/hero-bg.jpg';

export const HeroContainer = styled(motion.section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%); // Gradient background
  background-size: cover;
  background-position: center;
  height: 100vh; // Full viewport height
  display: flex;
  flex-direction: column; // Stack content vertically
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.textLight};
  position: relative; // Needed for potential overlays or shapes
  overflow: hidden; // Prevent content spillover
  margin-top: -80px; // Offset the Navbar height (adjust if Navbar height changes)
  padding-top: 80px; // Add padding to compensate for the offset
`;

export const HeroContent = styled(motion.div)`
  z-index: 1;
  max-width: 800px; // Limit content width
  display: flex;
  flex-direction: column;
  align-items: center; // Center items horizontally in the column
`;

export const HeroH1 = styled(motion.h1)`
  font-size: 6rem; // Larger heading
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight}; // Ensure high contrast
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); // Add text shadow

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 4.5rem;
  }
   @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 3.5rem;
  }
`;

export const HeroP = styled(motion.p)`
  font-size: 2.2rem; // Slightly larger paragraph
  margin-bottom: 3rem;
  max-width: 600px; // Limit paragraph width
  font-weight: 400;
   text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const HeroButtonWrapper = styled(motion.div)`
  margin-top: 2rem;
`;

// Optional: Add decorative shapes/elements for artistic flair
export const CircleShape = styled(motion.div)`
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: 0;
`;

export const SquareShape = styled(motion.div)`
   position: absolute;
   top: 100px;
   right: -30px;
   width: 150px;
   height: 150px;
   background-color: rgba(255, 255, 255, 0.08);
   transform: rotate(30deg);
   z-index: 0;
`;