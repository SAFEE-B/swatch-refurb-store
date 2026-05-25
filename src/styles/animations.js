// src/styles/animations.js
export const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
  export const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
 // src/styles/animations.js (snippet)

export const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } // <<< FIXED using standard ease
    }
};
  export const gridVariants = { // Keep or modify existing grid variants
    hidden: { opacity: 1 }, // Container itself doesn't fade, children do
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger product cards
      }
    }
  };
  
  // Add more variants as needed (e.g., for image reveals)
  export const imageVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };