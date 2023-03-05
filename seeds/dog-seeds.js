const { Dog } = require('../models');

const dogData = [
    {
        pic_hyperlink: "./#blank",
        name: "Sparks",
        age: "8", //months old
        breed: "chihuahua",
        gender: "Female",
        owner_id: 1,
    },
    {
        pic_hyperlink: "./#blank",
        name: "Biscuit",
        age: "48", //months old (4 years old)
        breed: "boxer",
        gender: "Male",
        owner_id: 2,
    },
    {
        pic_hyperlink: "./#blank",
        name: "Chief",
        age: "12",//months old (1 year old)
        breed: "heeler",
        gender: "Male",
        owner_id: 3,
    },
    {
        pic_hyperlink: "./#blank",
        name: "Chief",
        age: "36", //months old (3 years old)
        breed: "Boxer",
        gender: "Male",
        owner_id: 4,
    },
];

// Export the function
const seedDog = () => Dog.bulkCreate(dogData);

module.exports = seedDog;