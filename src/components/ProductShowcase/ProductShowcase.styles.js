// src/components/ProductShowcase/ProductShowcase.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleVariants } from '../../styles/animations'; // Import from new file
// ... rest of the imports and code

export const ShowcaseContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGray}; // Light background for contrast
  padding: 8rem 2rem; // More padding
   min-height: 100vh; // Ensure it takes significant space

   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
     padding: 6rem 1rem;
   }
`;

export const ShowcaseTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.primary}; // Use primary color for the title

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.8rem;
    margin-bottom: 3rem;
  }
`;

export const ShowcaseGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Responsive grid
  gap: 3rem; // Space between cards
  max-width: 1200px;
  margin: 0 auto; // Center the grid

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      grid-template-columns: 1fr; // Single column on very small screens
      gap: 2rem;
  }
`;

// Animation variants for the container (staggering children)
export const gridVariants = {
  hidden: { opacity: 1 }, // Container itself is visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Each child card animates 0.2s after the previous one
    }
  }
};

