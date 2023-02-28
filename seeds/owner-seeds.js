const { Owner } = require('../models');
// Create an array with the data we're going to seed
const ownerData = [
  {
    username: 'smithm',
    password: 'password1',
    pic_hyperlink: './images/1',
    first_name: 'myles',
    last_name: 'smith',
    gender: 'M',
    location_zip: 90001,
    dogs: "1",
    description: 'Looking for playdates for my youngest boy, he loves to go the trampoline park and is looking for friends to be active with'
  },
  {
    username: 'bobby',
    password: 'password123',
    pic_hyperlink: './images/2',
    first_name: 'Bob',
    last_name: 'Grent',
    gender: 'M',
    location_zip: 20141,
    dogs: "2",
    description: 'I love playing the guitar, but not as much as my sweet Biscuit, looking for playdates with creativity as the focus'
  },
  {
    username: 'florence',
    password: 'italy1968',
    pic_hyperlink: './images/3',
    first_name: 'Florence',
    last_name: 'Swane',
    gender: 'F',
    location_zip: 77001,
    dogs: "3",
    description: 'I love wine and tapas, but preferrably enjoy it with company and distracted doggos'
  }
];

// Export the function
const seedOwner = () => Owner.bulkCreate(ownerData, {
  individualHooks: true
});

module.exports = seedOwner