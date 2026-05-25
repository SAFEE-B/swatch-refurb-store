// src/styles/theme.js
export const theme = {
  colors: {
    primary: '#FF5733',    // Vibrant Swatch-like color
    secondary: '#3498DB',  // Another playful color
    background: '#FFFFFF',
    text: '#333333',
    textLight: '#FDFDFD',
    accent: '#FFC300',     // Accent color
    lightGray: '#f4f4f4',
    darkGray: '#555555',
  },
  fonts: {
    main: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Clean main font
    heading: "'Poppins', sans-serif", // A slightly more playful heading font (Add via Google Fonts or local files)
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  shadows: {
     small: '0 2px 4px rgba(0, 0, 0, 0.1)',
     medium: '0 5px 15px rgba(0, 0, 0, 0.15)',
     large: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  borderRadius: '8px',
};

// IMPORTANT: If using Google Fonts like 'Poppins', add this line to your public/index.html <head>:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">