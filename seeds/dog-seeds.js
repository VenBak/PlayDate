const { Dog } = require('../models');

const dogData = [
    {
        pic_hyperlink: "./#blank",
        name: "Sparks",
        age: "1",
        breed: "chihuahua",
        gender: "Female",
        owner_id: 1,
    },
    {
        pic_hyperlink: "./#blank",
        name: "Biscuit",
        age: "4",
        breed: "boxer",
        gender: "Male",
        owner_id: 2,
    },
    {
        pic_hyperlink: "./#blank",
        name: "Chief",
        age: "1",
        breed: "heeler",
        gender: "Male",
        owner_id: 3,
    },
];

// Export the function
const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;