const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model { }

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pic_hyperlink: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "https://res.cloudinary.com/dlkk2oyhp/image/upload/v1677779592/playdate-images/default-event_ocl8t7.png"
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location_zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        isInt: true,
        len: [5, 5]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    host_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'owner',
        key: 'id'
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event'
  }
);

module.exports = Event;