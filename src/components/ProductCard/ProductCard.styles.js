// src/components/ProductCard/ProductCard.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardWrapper = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer; // Indicate it's interactive

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px; // Fixed height for consistency
  object-fit: cover; // Crop image nicely
  display: block;
`;

export const CardContent = styled.div`
  padding: 2rem;
  flex-grow: 1; // Allow content to fill space if needed
  display: flex;
  flex-direction: column; // Stack content vertically
  justify-content: space-between; // Push button to bottom
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.text}; // Use default text color for title
  min-height: 4.4rem; // Ensure space for 2 lines of text
`;

export const CardDescription = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 1.5rem;
  flex-grow: 1; // Allow description to take up space
`;

export const CardPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const CardButtonWrapper = styled.div`
  margin-top: auto; // Push button to the bottom
  align-self: flex-start; // Align button to the left
`;

// Card Animation Variants
export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { // Example hover variant for Framer Motion (can be combined with CSS :hover)
      scale: 1.03,
      transition: { duration: 0.3 }
  }
};