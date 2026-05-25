// src/components/FeaturedProducts/FeaturedProducts.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
    padding: 8rem 2rem;
    background-color: ${({ theme }) => theme.colors.lightGray}; /* Contrasting background */
`;

export const SectionTitle = styled(motion.h2)`
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 5rem;
    color: ${({ theme }) => theme.colors.secondary}; /* Use secondary color */
`;

// Reuse the grid styling concept from ShopPage or ProductShowcase
export const ProductsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;