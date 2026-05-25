// src/components/ProductCard/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import {
  CardWrapper, // Keep your styled components
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice,
  CardButtonWrapper,
  cardVariants
} from './ProductCard.styles';
import { StyledButton, buttonVariants } from '../common/Button.styles';

// Use forwardRef for Framer Motion stagger animations
const ProductCard = React.forwardRef(({ watch }, ref) => {
  // Handle potential missing data gracefully
  const watchId = watch?.id ?? 'unknown';
  const watchName = watch?.name ?? 'Unnamed Watch';
  const watchPrice = typeof watch?.price === 'number' ? watch.price : 0;

  return (
    // Wrap the entire CardWrapper content with a Link
    // Use watchId from state/props
    <Link to={`/shop/watch/${watchId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <CardWrapper
        ref={ref}
        variants={cardVariants}
        // Let Framer Motion handle initial/animate via parent (ShopGrid)
      >
        {/* Prevent image loading errors if URL is missing */}
        <CardImage src={watch?.imageUrl || '/images/placeholder.jpg'} alt={watchName} loading="lazy" />
        <CardContent>
          <div>
            <CardTitle>{watchName}</CardTitle>
            <CardDescription>{watch?.description || 'No description.'}</CardDescription>
          </div>
          <div>
            <CardPrice>${watchPrice.toFixed(2)}</CardPrice>
            {/* Keep button for visual cue, but navigation is via card click */}
            {/* Prevent Link navigation if button is clicked (optional) */}
            <CardButtonWrapper onClick={(e) => e.preventDefault()}>
              <StyledButton
                 secondary
                 variants={buttonVariants}
                 whileHover="hover"
                 whileTap="tap"
                 // Example: Add to cart simulation (doesn't navigate)
                 onClick={(e) => {
                    e.stopPropagation(); // Prevent Link navigation
                    alert(`Added ${watchName} to cart! (Not implemented)`);
                 }}
                 // Make button non-navigating for accessibility if card navigates
                 // role="button" aria-label={`Add ${watchName} to cart`}
                 as="div" // Render as div to avoid nested interactive elements warning if Link wraps everything
                 style={{ display: 'inline-block' }} // Maintain button appearance
              >
                View Details {/* Or Add to Cart */}
              </StyledButton>
            </CardButtonWrapper>
          </div>
        </CardContent>
      </CardWrapper>
    </Link>
  );
});

export default ProductCard;