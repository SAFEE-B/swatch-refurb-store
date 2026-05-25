import styled from 'styled-components';
import {motion} from 'framer-motion';

export const AboutWrapper = styled(motion.section)`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background}; // White background
`;
export const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;
export const AboutTitle = styled(motion.h2)``; // Reuse title animation
export const AboutText = styled(motion.p)`
  font-size: 1.7rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkGray};
`;