// src/components/HeroSection/HeroSection.js
import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroButtonWrapper, CircleShape, SquareShape } from './HeroSection.styles';
import { StyledButton, buttonVariants } from '../common/Button.styles'; // Import shared button

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const shapeVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "circOut", delay: 0.5 }, // Delayed appearance
  },
  float: { // Continuous subtle movement
      y: ["0px", "10px", "0px"],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut"}
  }
};


const HeroSection = () => {
   const scrollToShop = () => {
     document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
   };

  return (
    <HeroContainer
      id="hero" // Add ID for scrolling
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        {/* Decorative Shapes */}
        <CircleShape variants={shapeVariants} initial="hidden" animate={["visible", "float"]} />
        <SquareShape variants={shapeVariants} initial="hidden" animate={["visible", "float"]} />

        <HeroContent>
            <HeroH1 variants={itemVariants}>
            Timeless Style, Reborn.
            </HeroH1>
            <HeroP variants={itemVariants}>
            Discover unique, expertly refurbished Swatch watches. Classic designs brought back to life.
            </HeroP>
            <HeroButtonWrapper variants={itemVariants}>
            <StyledButton
                primary // Use the primary style
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={scrollToShop} // Scroll to shop section
            >
                Shop Collection
            </StyledButton>
            </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;