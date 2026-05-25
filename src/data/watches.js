// src/data/watches.js
// IMPORTANT: Replace with your actual image paths or URLs
import swatch1 from '../assets/images/swatch1.jpg'; // Make sure you have these images
import swatch2 from '../assets/images/swatch2.jpg';
import swatch3 from '../assets/images/swatch3.jpg';
import swatch4 from '../assets/images/swatch4.jpg'; // Add more

export const watches = [
  {
    id: 1,
    name: 'Vintage Pop Swatch "Chrono"',
    description: 'A classic 90s Chrono, meticulously refurbished.',
    price: 120.00,
    imageUrl: swatch1, // Use the imported image variable
    tags: ['chrono', '90s', 'vintage'],
  },
  {
    id: 2,
    name: 'Swatch Gent "Blue Juice"',
    description: 'Bright and bold, restored to its original glory.',
    price: 85.00,
    imageUrl: swatch2,
    tags: ['gent', 'colorful', '80s'],
  },
  {
    id: 3,
    name: 'Skin Swatch "Golden Mesh"',
    description: 'Ultra-thin and elegant, fully functional.',
    price: 95.00,
    imageUrl: swatch3,
    tags: ['skin', 'elegant', 'minimalist'],
  },
   {
    id: 4,
    name: 'Scuba Swatch "Deep Dive"',
    description: 'Ready for adventure, water resistance checked.',
    price: 110.00,
    imageUrl: swatch4, // Make sure swatch4.jpg exists
    tags: ['scuba', 'sporty', 'durable'],
  },
  // Add more watch objects here...
];