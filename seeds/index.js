// Import all of the functions which will seed the array within each document
const seedOwner = require('./owner-seeds');
const seedDog = require('./dog-seeds');
const seedEvent = require('./event-seeds');
const seedComment = require('./comment-seeds');

// Make sure to import sequelize in order to connect to the sql database
const sequelize = require('../config/connection');

// Run a function which goes over all of the functions and the console logs whether it was successfully seeded
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedOwner();
  console.log('\n----- OWNERS SEEDED -----\n');

  await seedDog();
  console.log('\n----- DOGS SEEDED -----\n');

  await seedEvent();
  console.log('\n----- EVENTS SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

// Call the function
seedAll();
