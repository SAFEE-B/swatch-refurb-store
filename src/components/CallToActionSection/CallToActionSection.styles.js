// src/components/CallToActionSection/CallToActionSection.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
    padding: 6rem 2rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.accent} 100%);
    text-align: center;
    color: ${({ theme }) => theme.colors.textLight};
`;

 export const SectionTitle = styled(motion.h2)`
    font-size: 3rem;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 600;
`;

 export const ButtonWrapper = styled(motion.div)``; // Simple wrapper for button animation