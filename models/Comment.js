const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Event = require('./Event');
const Owner = require('./Owner');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Owner,
          key: 'id'
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Event,
          key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;