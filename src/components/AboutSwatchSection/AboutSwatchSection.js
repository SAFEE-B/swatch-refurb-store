// src/components/AboutSwatchSection/AboutSwatchSection.js
import React from 'react';
import { SectionWrapper, ContentWrapper, SectionTitle, SectionParagraph } from './AboutSwatchSection.styles';
import { sectionVariants, titleVariants, itemVariants } from '../../styles/animations';

const AboutSwatchSection = () => {
  return (
    <SectionWrapper
        id="about" // Keep ID if needed for Navbar links
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation on scroll
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible, only once
    >
      <ContentWrapper>
        <SectionTitle variants={titleVariants}>More Than Just Time</SectionTitle>
        <SectionParagraph variants={itemVariants}>
          Born in the 80s during the Swiss watch crisis, Swatch wasn't just a watch; it was a revolution. It brought fun, color, and affordability back to timekeeping, transforming the humble wristwatch into a bold fashion statement and a canvas for artistic expression.
        </SectionParagraph>
        <SectionParagraph variants={itemVariants}>
          From the iconic plastic Gent and Lady models to innovative Scubas, Chronos, and ultra-thin Skins, Swatch constantly pushed boundaries. They collaborated with artists, embraced vibrant designs, and captured the zeitgeist of pop culture, making them instantly collectible and eternally cool.
        </SectionParagraph>
         <SectionParagraph variants={itemVariants}>
          Owning a vintage Swatch is like holding a piece of design history – a playful reminder of a time when watches dared to be different.
        </SectionParagraph>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AboutSwatchSection;