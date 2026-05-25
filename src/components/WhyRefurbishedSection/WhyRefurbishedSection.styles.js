// src/components/WhyRefurbishedSection/WhyRefurbishedSection.styles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionWrapper = styled(motion.section)`
    padding: 8rem 2rem;
    background-color: ${({ theme }) => theme.colors.secondary}; /* Different background */
    color: ${({ theme }) => theme.colors.textLight};
`;

export const ContentWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
`;

export const SectionTitle = styled(motion.h2)`
    font-size: 3.5rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.textLight}; /* Light title */
`;

 export const PointsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
    text-align: left;
`;

export const PointItem = styled(motion.div)`
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    backdrop-filter: blur(5px);
`;

 export const PointTitle = styled(motion.h3)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accent}; /* Accent color for point titles */
    margin-bottom: 1rem;
`;

export const PointText = styled(motion.p)`
    font-size: 1.6rem;
    line-height: 1.7;
`;