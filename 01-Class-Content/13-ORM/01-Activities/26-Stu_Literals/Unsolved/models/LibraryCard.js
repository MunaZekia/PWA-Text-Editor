const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LibraryCard extends Model {}

LibraryCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    reader_id: { // This is the foreign key
      type: DataTypes.INTEGER,  // This is the data type of the foreign key
      references: {   // This is the reference to the other model
        model: 'reader',  // This is the model name
        key: 'id',  
        // This is the key in the other model that we're referencing
      },

    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'library_card',
  }
);

module.exports = LibraryCard;
