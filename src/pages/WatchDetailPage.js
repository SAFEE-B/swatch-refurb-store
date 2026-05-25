// src/pages/WatchDetailPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams to get ID from URL
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { itemVariants } from '../styles/animations'; // Re-use animation
import { StyledButton } from '../components/common/Button.styles'; // Reuse button

// Styles for the Detail Page
const DetailContainer = styled(motion.div)`
  padding: 12rem 2rem 6rem; /* Adjust top padding for navbar */
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns: image | details */
  gap: 4rem;
  min-height: calc(100vh - 80px); /* Adjust for nav/footer */

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr; /* Stack on smaller screens */
    gap: 2rem;
     padding: 10rem 1rem 4rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  img {
    width: 100%;
    max-width: 400px; // Limit image size slightly
    height: auto;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadows.large};
     display: block;
     margin: 0 auto; // Center image if container is wider
  }
`;

const DetailsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const WatchTitle = styled(motion.h1)`
  font-size: 3.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const WatchPrice = styled(motion.p)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
`;

const WatchDescription = styled(motion.p)`
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 3rem;
  flex-grow: 1; /* Allow description to take space */
`;

const BackLink = styled(Link)`
   display: inline-block;
   margin-bottom: 2rem;
   color: ${({ theme }) => theme.colors.darkGray};
   text-decoration: none;
   font-weight: 500;
   &:hover {
     color: ${({ theme }) => theme.colors.primary};
   }
`;

const containerVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};


// Receive watches data from App.js
const WatchDetailPage = ({ watches }) => {
  const { watchId } = useParams(); // Get the 'watchId' from the URL parameter

  // Find the specific watch using the ID.
  // Note: In a real app, you'd fetch this single watch from an API.
  // Comparing ID as string since URL params are strings
  const watch = watches.find(w => w.id.toString() === watchId);

  if (!watch) {
    return (
        <div style={{ padding: '12rem 2rem', textAlign: 'center' }}>
            <h2>Watch Not Found</h2>
            <p>Sorry, we couldn't find the watch you're looking for.</p>
            <BackLink to="/shop">Back to Shop</BackLink>
        </div>
    );
  }

  return (
    <DetailContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      <ImageWrapper variants={itemVariants}>
        <img src={watch.imageUrl} alt={watch.name} />
      </ImageWrapper>

      <DetailsWrapper>
        <BackLink to="/shop">← Back to Shop</BackLink>
        <WatchTitle variants={itemVariants}>{watch.name}</WatchTitle>
        <WatchPrice variants={itemVariants}>${watch.price.toFixed(2)}</WatchPrice>
        <WatchDescription variants={itemVariants}>
          {watch.description || "No description available."} {/* Add fallback */}
        </WatchDescription>
        {watch.tags && watch.tags.length > 0 && (
             <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
                 <strong>Tags:</strong> {watch.tags.join(', ')}
             </motion.div>
        )}
        <motion.div variants={itemVariants}>
             <StyledButton primary onClick={() => alert(`Added ${watch.name} to cart! (Not implemented)`)}>
                 Add to Cart
             </StyledButton>
        </motion.div>
      </DetailsWrapper>
    </DetailContainer>
  );
};

export default WatchDetailPage;