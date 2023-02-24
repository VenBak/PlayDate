const { Owner } = require('../models');
// Create an array with the data we're going to seed
const ownerData = [
  {
    name: 'Fun time at the park!',
    pic_hyperlink: './images/1',
    location_zip: 90001,
    description: 'Me and the dogs are gonna be at the park playing with balls and discs from 2 to 4. Come join us! Imma bring snack for people and doggos!',
    start_date: '2023-05-04 14:00:00',
    end_date: '2023-05-04 16:00:00',
    owner_id: "1"
  },
  {
    name: 'Dog party fun outside',
    pic_hyperlink: './images/1',
    location_zip: 90001,
    description: 'Gonna be a sweet time, come hangout with us to start your day!',
    start_date: '2023-05-07 06:30:00',
    end_date: '2023-05-07 08:00:00',
    owner_id: "2"
  },
  {
    name: 'Puppertravaganza!',
    pic_hyperlink: './images/1',
    location_zip: 90001,
    description: 'Biggest dog party this side of the lake! Bring your friends, bring your toys, bring your booze, lets celebrate the weather!',
    start_date: '2023-05-14 16:00:00',
    end_date: '2023-05-14 18:30:00',
    owner_id: "3"
  }
];

// Export the function
const seedOwner = () => Owner.bulkCreate(ownerData);

module.exports = seedOwner