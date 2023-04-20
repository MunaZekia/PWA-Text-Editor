const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  type Class 
  // this is the type of the data that is being returned{
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  type Query { // this is the query, 
    //which matches the query in the resolver
    // it is the query that is being made by 
    //the client
    //the front end is making a query to the backend
    classes: [Class]
  }
`;

module.exports = typeDefs;
