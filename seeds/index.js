// Import all of the functions which will seed the array within each document
const seedParent = require('./parent-seeds');

// Make sure to import sequelize in order to connect to the sql database
const sequelize = require('../config/connection');


// Run a function which goes over all of the functions and the console logs whether it was successfully seeded
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedParent();
  console.log('\n----- PARENT SEEDED -----\n');
  
  process.exit(0);
};

// Call the function
seedAll();
