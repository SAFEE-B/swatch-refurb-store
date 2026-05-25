// src/components/CallToActionSection/CallToActionSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { SectionWrapper, SectionTitle, ButtonWrapper } from './CallToActionSection.styles';
import { StyledButton, buttonVariants } from '../common/Button.styles'; // Import shared button
import { sectionVariants, titleVariants, itemVariants } from '../../styles/animations';

const CallToActionSection = () => {
  return (
    <SectionWrapper
         variants={sectionVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
    >
        <SectionTitle variants={titleVariants}>Ready to Find Your Perfect Swatch?</SectionTitle>
        <ButtonWrapper variants={itemVariants}>
            <StyledButton
                as={Link} // Render button as a Link
                to="/shop" // Navigate to shop page
                primary // Use primary style
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                Explore the Collection
            </StyledButton>
        </ButtonWrapper>
    </SectionWrapper>
  );
};

export default CallToActionSection;