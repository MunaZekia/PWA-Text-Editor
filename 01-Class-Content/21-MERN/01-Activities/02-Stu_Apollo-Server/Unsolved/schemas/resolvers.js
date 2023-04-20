const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression 
// this code is the resolver, 
//it is the code that is being executed
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement 
      // this is the query that is being made
      // and the data that is being returned
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
