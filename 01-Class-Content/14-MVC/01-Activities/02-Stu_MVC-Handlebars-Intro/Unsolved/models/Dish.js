// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.

// TODO: Add a comment indicating how this file fits into the MVC framework. 
  
  // This file is part of the model in the MVC framework 
// TODO: What is it responsible for handling?
  //  This file is responsible for handling the data for the dishes
// TODO: What does it export?
// This file exports the Dish model
// what is MVC?
// Model View Controller
// Model - the data // the code that defines the data
// View - the user interface // the code that displays the data
// Controller - the logic // the code that connects the model and the view
       


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model {}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
