const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our dog model
class Dog extends Model { }

// create fields/columns for dog model
Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pic_hyperlink: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://res.cloudinary.com/dlkk2oyhp/image/upload/v1677737085/playdate-images/uhdfp3aq73sjmxxk7ezq.png"
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1, 2],
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'owner',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'dog'
    }
);

module.exports = Dog;