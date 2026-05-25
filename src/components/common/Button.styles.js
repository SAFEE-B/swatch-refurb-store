// src/components/common/Button.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  display: inline-block;
  background-color: ${({ theme, primary }) => primary ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 1.2rem 2.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background-color: ${({ theme, primary }) => primary ? theme.colors.accent : theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

// Animation variants for buttons (optional, can be used with Framer Motion)
export const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

// Usage:
// import { StyledButton, buttonVariants } from './Button.styles';
// <StyledButton
//   primary // Optional prop for primary color
//   variants={buttonVariants}
//   whileHover="hover"
//   whileTap="tap"
// >
//   Click Me
// </StyledButton>