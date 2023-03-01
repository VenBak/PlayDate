const { Comment } = require('../models');

const data = [];

const comments = ["Can't wait, thanks for doing this!",
"Me and the pups will be there with snacks!",
"Sounds totally rad!",
"Seriously, thanks for organizing this.",
"If you need any help with setup or details, shoot me a text, I'm free all day!"];

function generateSeeds() {
  let numSeededUsers = 3;
  let numSeededEvents = 3;
  let numFillerComments = comments.length;
  let numComments = Math.floor(Math.random()*5 + 2); //Random num comments between 2 and 6
  for (let i = 1; i <= numSeededEvents; i++) {
    for (let j = 0; j < numComments; j++) {
      let seedObj = {
        text: comments[Math.floor((Math.random()*numFillerComments))],
        owner_id: Math.floor(Math.random()*numSeededUsers + 1),
        event_id: i
      }
      data.push(seedObj);
    }
  }
};

// Export the function
const seedComment = () => {
  seedComment();
  Comment.bulkCreate(data);
};

module.exports = seedComment;