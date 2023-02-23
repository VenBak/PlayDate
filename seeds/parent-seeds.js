const { Parent } = require('../models');

// Import category from the models 

// Create an array with the data we're going to seed
const parentData = [
    {
      category_name: 'Shirts',
    },
    {
      category_name: 'Shorts',
    },
    {
      category_name: 'Music',
    },
    {
      category_name: 'Hats',
    },
    {
      category_name: 'Shoes',
    },
  ];
  
  // Export the function
  const seedParent = () => Parent.bulkCreate(parentData);
  
  module.exports = seedParent;