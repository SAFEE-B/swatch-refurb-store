import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ContactWrapper = styled(motion.section)`
    padding: 6rem 2rem;
    background: ${({ theme }) => theme.colors.secondary}; // Use a different background
    color: ${({ theme }) => theme.colors.textLight};
`;
export const ContactContent = styled.div`
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    h2 { color: ${({ theme }) => theme.colors.textLight}; } // Override default heading color
`;
export const ContactForm = styled(motion.form)` /* Style your form elements */`;
export const ContactInfo = styled(motion.div)`/* Style contact details */ `;