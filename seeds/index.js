// Import all of the functions which will seed the array within each document
const seedOwner = require('./owner-seeds');
const seedDog = require('./dog-seeds');

// Make sure to import sequelize in order to connect to the sql database
const sequelize = require('../config/connection');


// Run a function which goes over all of the functions and the console logs whether it was successfully seeded
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedOwner();
  console.log('\n----- OWNER SEEDED -----\n');

  await seedDog();
  console.log('\n----- DOG SEEDED -----\n');

  await seedEvent();
  console.log('\n----- EVENT SEEDED -----\n');

  process.exit(0);
};

// Call the function
seedAll();
