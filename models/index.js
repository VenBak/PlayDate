// Import all of the models
const Owner = require('./Owner');
const Dog = require('./Dog');
const Event = require('./Event');

Owner.hasMany(Dog, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE',
});

Dog.belongsTo(Owner);

// Each event was created by and belongs to only one user (owner)
Event.belongsTo(Owner);

// Owners can create many events
Owner.hasMany(Event, {
  foreignKey: 'owner_id'
});

// Events belong to many owners as people attending the event
Event.belongsToMany(Owner, {
  as: 'attendees',
  foreignKey: 'attendee_id',
  through: 'event_attendees'
});

// Owners can attend many events, regardless of who created the event
Owner.belongsToMany(Event, {
  through: 'event_attendees'
});

module.exports = { Owner, Dog, Event }