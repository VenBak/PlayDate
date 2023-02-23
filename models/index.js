// Import all of the models
const Owner = require('./Owner');
const Dog = require('./Dog');

// Owner.hasMany(Dog, {
//     foreignKey: 'owner_id',
//     onDelete: 'CASCADE',
// });

// Dog.belongsTo(Owner, {
//     foreignKey: 'owner_id',
// });

module.exports = { Owner, Dog }