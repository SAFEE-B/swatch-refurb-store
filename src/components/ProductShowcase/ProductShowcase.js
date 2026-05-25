// src/components/ProductShowcase/ProductShowcase.js
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { watches } from '../../data/watches'; // Import placeholder data
import { ShowcaseContainer, ShowcaseTitle, ShowcaseGrid, gridVariants } from './ProductShowcase.styles';
import { useInView } from 'framer-motion'; // To trigger animation on scroll
import { useRef } from 'react';
// Make sure this line exists and is correct
import { titleVariants } from '../../styles/animations';

const ProductShowcase = () => {
  const ref = useRef(null);
  // Trigger animation when the grid comes into view
  // `once: true` makes it animate only the first time it enters the viewport
  // `margin: "-100px 0px"` triggers animation a bit before it's fully in view
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <ShowcaseContainer id="shop"> {/* Add ID for scrolling */}
      <div className="container"> {/* Use container for max-width */}
         <ShowcaseTitle
              ref={ref} // Attach ref to title or grid container
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
         >
            Our Refurbished Collection
         </ShowcaseTitle>
        <ShowcaseGrid
          ref={ref} // Attach ref to trigger animation based on grid visibility
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Control animation based on inView status
        >
          {watches.map((watch) => (
             // Pass the watch data and key. Framer Motion automatically uses cardVariants from ProductCard
            <ProductCard key={watch.id} watch={watch} />
          ))}
        </ShowcaseGrid>
      </div>
    </ShowcaseContainer>
  );
};

export default ProductShowcase;