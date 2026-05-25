import React from 'react';
import { FooterContainer, FooterText } from './Footer.styles';

const Footer = () => {
  const footerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, delay: 0.5 }} // Fade in slowly
  }
  return (
    <FooterContainer
        variants={footerVariants}
        initial="hidden"
        whileInView="visible" // Animate when footer scrolls into view
        viewport={{ once: true }} // Only animate once
    >
      <FooterText>
        © {new Date().getFullYear()} ReSwatch. All Rights Reserved. | Refurbished with ❤️
        {/* Add social links or other footer content here */}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;