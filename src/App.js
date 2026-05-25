// src/App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- Style Imports ---
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles'; // <<< ENSURE THIS LINE IS EXACTLY LIKE THIS

// --- Component Imports ---
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// --- Page Component Imports ---
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import WatchDetailPage from './pages/WatchDetailPage';
import AdminPage from './pages/AdminPage';

// --- Data Imports ---
import { watches as initialWatchesData } from './data/watches';

// --- Main App Component ---
function App() {
  // --- State Management for Watches ---
  const [watches, setWatches] = useState(() => {
    const savedWatches = localStorage.getItem('watches');
    if (savedWatches && savedWatches !== 'undefined' && savedWatches !== 'null') {
        try {
          const parsedWatches = JSON.parse(savedWatches);
          return Array.isArray(parsedWatches) ? parsedWatches : initialWatchesData;
        } catch (error) {
          console.error("Failed to parse watches from localStorage:", error);
          localStorage.removeItem('watches');
          return initialWatchesData;
        }
    }
    return initialWatchesData;
  });

  // Persist watches to localStorage whenever they change
  useEffect(() => {
    if (watches) {
        localStorage.setItem('watches', JSON.stringify(watches));
    } else {
        localStorage.setItem('watches', JSON.stringify([]));
    }
  }, [watches]);

  // --- Inventory Management Functions ---
  const addWatch = (newWatchData) => {
    if (!newWatchData.name || !newWatchData.price || !newWatchData.imageUrl) {
        alert("Please provide at least Name, Price, and Image URL for the new watch.");
        return;
    }
    const newWatch = {
      ...newWatchData,
      id: Date.now() + Math.random().toString(36).substring(2, 7),
      price: parseFloat(newWatchData.price) || 0,
      tags: Array.isArray(newWatchData.tags) ? newWatchData.tags : [],
    };
    setWatches((prevWatches) => [...(prevWatches || []), newWatch]);
    alert(`${newWatch.name} added successfully!`);
  };

  const removeWatch = (watchId) => {
    if (window.confirm("Are you sure you want to remove this watch?")) {
      setWatches((prevWatches) => (prevWatches || []).filter(watch => watch.id !== watchId));
      alert("Watch removed.");
    }
  };

  // --- Component Structure ---
  // Define the AnimatedRoutes component INSIDE App so it can be used in the return statement below
  const AnimatedRoutes = () => {
    const location = useLocation();
    return (
       <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage watches={watches} />} />
                <Route path="/shop" element={<ShopPage watches={watches} />} />
                <Route path="/shop/watch/:watchId" element={<WatchDetailPage watches={watches} />} />
                <Route
                  path="/admin"
                  element={
                    <AdminPage
                      watches={watches}
                      onAddWatch={addWatch}
                      onRemoveWatch={removeWatch}
                    />
                  }
                />
                <Route path="*" element={
                    <div style={{ padding: '12rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
                        <h2>404 - Page Not Found</h2>
                        <p>Oops! The page you're looking for doesn't exist.</p>
                    </div>
                 } />
            </Routes>
       </AnimatePresence>
    );
  } // <<< Closing brace for AnimatedRoutes function

  // --- App Component Return Statement ---
  // This return statement MUST be inside the App function block
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <main>
           {/* Use the AnimatedRoutes component defined above */}
           <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
  // NO CODE SHOULD BE HERE BETWEEN THIS LINE...
} // <<< ...AND THIS CLOSING BRACE FOR THE App FUNCTION

export default App; // Export should be after the function definition