const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    edition: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    is_paperback: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    reader_id: { // this is the name of the column
      type: DataTypes.INTEGER, // this is the type of the column
      references: {
        model: 'reader',  // this is the name of the model
        key: 'id'         // this is the name of the column
      }
    } 
  

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;
