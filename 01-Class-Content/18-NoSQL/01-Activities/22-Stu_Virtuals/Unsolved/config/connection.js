const { connect, connection } = require('mongoose');

connect('mongodb://localhost/fullnameVirtual', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;



//Explain and execute CRUD operations using Mongoose subdocuments
//The CRUD operations are Create, Read, Update, and Delete.
// and using Mongoose subdocuments to create a one-to-many relationship between two models.


