// Import all of the models
const Parent = require('./Parent');
const Child = require('./Child');

Parent.hasMany(Child, {
    foreignKey: 'parent_id',
});

Child.belongsTo(Parent, {
    foreignKey: 'parent_id',
});

module.exports = { Parent, Child }