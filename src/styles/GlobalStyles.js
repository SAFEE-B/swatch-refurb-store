// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth; // For smooth scrolling to sections
    font-size: 62.5%; // 1rem = 10px for easier rem calculations

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 56.25%; // 1rem = 9px
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 50%; // 1rem = 8px
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    font-size: 1.6rem; // Default font size (16px)
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; // Prevent horizontal scroll
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary}; // Example: Headings use primary color
  }

   h1 { font-size: 4.0rem; }
   h2 { font-size: 3.2rem; }
   h3 { font-size: 2.4rem; }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
  }

  section {
    padding: 6rem 2rem;
     @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 4rem 1rem;
     }
  }

  .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
       @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: 0 1rem;
       }
  }
`;

export default GlobalStyles;