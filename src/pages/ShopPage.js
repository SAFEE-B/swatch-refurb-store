// src/pages/ShopPage.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard/ProductCard';
import { gridVariants } from '../components/ProductShowcase/ProductShowcase.styles'; // Reuse grid animation
import { titleVariants } from '../styles/animations'; // Use shared title animation

// Define styles directly here or import from a ShopPage.styles.js file
const ShopContainer = styled.div`
  padding: 12rem 2rem 6rem; /* Add top padding to account for fixed navbar */
  background-color: ${({ theme }) => theme.colors.lightGray};
  min-height: calc(100vh - 80px); /* Adjust based on Navbar/Footer height */
`;

const ShopTitle = styled(motion.h1)`
   text-align: center;
   font-size: 3.5rem;
   margin-bottom: 5rem;
   color: ${({ theme }) => theme.colors.primary};
`;

const ShopGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Receive watches data from App.js
const ShopPage = ({ watches }) => {
   if (!watches || watches.length === 0) {
     return (
       <ShopContainer>
           <ShopTitle>Our Collection</ShopTitle>
           <p style={{textAlign: 'center'}}>No watches available at the moment. Check back soon!</p>
       </ShopContainer>
     );
   }

  return (
    <ShopContainer>
      <ShopTitle
        variants={titleVariants}
        initial="hidden"
        animate="visible" // Animate immediately on page load
      >
        Our Collection
      </ShopTitle>
      <ShopGrid
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {watches.map((watch) => (
          <ProductCard key={watch.id} watch={watch} /> // Pass watch data
        ))}
      </ShopGrid>
    </ShopContainer>
  );
};

export default ShopPage;