const { Parent } = require('../models');

// Import category from the models 

// Create an array with the data we're going to seed
const parentData = [
{
    username: 'smithm',
    password: 'password1',
    pic: './images/1',
    first_name: 'myles',
    last_name: 'smith',
    gender: 'M',
    marital_status: 'single',
    location_zip: 90001,
    children: [1, 2, 3],
    postpartum: 'false',
    description: 'Looking for playdates for my youngest boy, he loves to go the trampoline park and is looking for friends to be active with'
},
{
    username: 'bobby',
    password: 'password123',
    pic: './images/2',
    first_name: 'Bob',
    last_name: 'Grent',
    gender: 'M',
    marital_status: 'married',
    location_zip: 10001,
    children: [4],
    postpartum: 'false',
    description: 'I love playing the guitar, but not as much as my sweet Mathilda, looking for playdates with creativity as the focus'
},
{
    username: 'florence',
    password: 'italy1968',
    pic: './images/3',
    first_name: 'Florence',
    last_name: 'Swane',
    gender: 'F',
    marital_status: 'engaged',
    location_zip: 77001,
    children: [5, 6],
    postpartum: 'false',
    description: 'I love wine and tapas, but preferrably enjoy it with company and distracted kids'
},

];
  
  // Export the function
  const seedParent = () => Parent.bulkCreate(parentData);
  
  module.exports = seedParent;