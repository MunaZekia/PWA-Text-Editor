const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

LibraryCard.belongsTo(Reader, { // This is the model name
  foreignKey: 'reader_id', 
  // This is the column name in the LibraryCard table
  // This is the column name in the LibraryCard table
});

module.exports = { Reader, Book, LibraryCard };
