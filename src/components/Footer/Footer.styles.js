import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled(motion.footer)`
  background-color: ${({ theme }) => theme.colors.text}; // Dark footer
  color: ${({ theme }) => theme.colors.lightGray};
  padding: 3rem 2rem;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 1.4rem;
  margin: 0;
  a { color: ${({ theme }) => theme.colors.primary}; } // Highlight links
`;