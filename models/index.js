// Import all of the models
const Owner = require('./Owner');
const Dog = require('./Dog');
const Event = require('./Event');

Owner.hasMany(Dog, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

Dog.belongsTo(Owner, {
  foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});

// Each event was created by and belongs to only one user (owner)
Event.belongsTo(Owner, {
  as: 'host',
  foreignKey: 'host_id'
});

// Owners can create many events
Owner.hasMany(Event, {
  foreignKey: 'host_id'
});

// Events belong to many owners as people attending the event
Event.belongsToMany(Owner, {
  through: 'event_attendees',
  as: 'attendees',
  foreignKey: 'event_id',
  otherKey: 'attendee_id'
});

// Owners can attend many events, regardless of who created the event
Owner.belongsToMany(Event, {
  through: 'event_attendees',
  foreignKey: 'event_id',
  otherKey: 'attendee_id'
});

module.exports = { Owner, Dog, Event }