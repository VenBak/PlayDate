const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our parent model
class Parent extends Model {}

// create fields/columns for parent model
// 2 columns one is id and the other is parent name
Parent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pic_hyperlink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parents_gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marital_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    children: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postpartum: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'parent'
  }
);

module.exports = Parent;