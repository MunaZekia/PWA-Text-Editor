const { UUIDV4, Model, DataTypes } = require('sequelize');
  

const sequelize = require('../config/connection');

  // This class is exporting a model for the library card table
  // It inherits from the Model class
  // It is exporting the LibraryCard class
  


class LibraryCard extends Model {}
  // it is extending the Model class and 
  // adding the following properties to it 
LibraryCard.init( 
  // it is initializing the LibraryCard class with the 
  //following properties
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Use Sequelize's UUID functionality to generate a unique number for the library card instead of making us do it ourselves
    card_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    // TODO: Add a comment describing what this column holds information for 
    reader_id: { 
      // this is the foreign key for the reader table
      type: DataTypes.INTEGER,
      // this is the data type for the column
      references: { 
        // this is the reference to the reader table
        // TODO: Add a comment describing where `reader` comes from
        model: 'reader', 
        // this is the model name for the reader table
        key: 'id', 
        // this is the primary key for the reader table
      },
    },
  },
  {
    sequelize,
    timestamps: false, 
    // this is to prevent the creation of a createdAt and updatedAt column
    freezeTableName: true, 
    // this is to prevent sequelize from pluralizing the table name
    underscored: true, 
    // this is to prevent sequelize from changing the column names to camelCase
    modelName: 'library_card',
    // this is to set the model name to library_card
  }
);

module.exports = LibraryCard; 
// this is to export the LibraryCard class
