// src/pages/HomePage.js
import React from 'react';
import { motion } from 'framer-motion'; // Import motion for page transition

// Import Sections
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSwatchSection from '../components/AboutSwatchSection/AboutSwatchSection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import WhyRefurbishedSection from '../components/WhyRefurbishedSection/WhyRefurbishedSection';
import CallToActionSection from '../components/CallToActionSection/CallToActionSection';

// Define page transition variants (optional)
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.5 } },
  out: { opacity: 0, transition: { duration: 0.3 } }
};

// Accept watches as a prop from App.js
const HomePage = ({ watches }) => {
  // Ensure watches is an array before passing to FeaturedProducts
  const validWatches = Array.isArray(watches) ? watches : [];

  return (
    // Add motion wrapper for potential page transitions
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
    >
      <HeroSection />
      <AboutSwatchSection />
      {/* Pass the watches data to FeaturedProducts */}
      <FeaturedProducts watches={validWatches} />
      <WhyRefurbishedSection />
      <CallToActionSection />
    </motion.div>
  );
};

export default HomePage;