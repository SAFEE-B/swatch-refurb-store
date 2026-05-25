// src/components/FeaturedProducts/FeaturedProducts.js
import React from 'react';
import { SectionWrapper, SectionTitle, ProductsGrid } from './FeaturedProducts.styles';
import ProductCard from '../ProductCard/ProductCard'; // Import the card component
import { sectionVariants, titleVariants, gridVariants } from '../../styles/animations'; // Import variants

// Receive watches data as a prop
const FeaturedProducts = ({ watches }) => {
  // Select a few watches to feature (e.g., the first 3 or 4)
  // In a real app, you might have a 'featured' flag in your data
  const featured = watches.slice(0, 3); // Show the first 3 watches

  if (!featured || featured.length === 0) {
      return null; // Don't render the section if no featured watches
  }

  return (
    <SectionWrapper
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
    >
      <SectionTitle variants={titleVariants}>Featured Finds</SectionTitle>
      <ProductsGrid variants={gridVariants}> {/* Apply grid variants for stagger */}
        {featured.map((watch) => (
          // ProductCard itself has variants, they will be staggered by ProductsGrid
          <ProductCard key={watch.id} watch={watch} />
        ))}
      </ProductsGrid>
    </SectionWrapper>
  );
};

export default FeaturedProducts;