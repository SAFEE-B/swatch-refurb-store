// src/components/AboutSwatchSection/AboutSwatchSection.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
  padding: 8rem 2rem;
  background-color: ${({ theme }) => theme.colors.background}; /* White or light background */
   text-align: center;
`;

export const ContentWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionParagraph = styled(motion.p)`
  font-size: 1.7rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 2rem;

  &:last-of-type {
      margin-bottom: 0;
  }
`;
// Add styles for potential images within this section if needed