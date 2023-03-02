// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities. 

const { Model, DataTypes } = require('sequelize');
// Import the connection to the database
const sequelize = require('../config/connection');
// Create the Dish model

class Dish extends Model { }

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER, // This is the data type
      allowNull: false, 
      // This means that the column cannot be empty
      primaryKey: true, // This is the primary key 
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish',
  }
);

module.exports = Dish;
