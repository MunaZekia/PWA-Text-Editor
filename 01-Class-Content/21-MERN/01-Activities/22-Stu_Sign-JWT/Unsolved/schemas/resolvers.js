const { AuthenticationError } = require('apollo-server-express');
// import the Thought and User models
const { User, Thought } = require('../models');
// this line of code will import the signToken function 
//from the auth.js file in the utils folder
const { signToken } = require('../utils/auth'); 
// import signToken from the auth.js file in the utils folder

const resolvers = {
  // it takes the query and then it runs the function that is associated with it
  Query: { //  it is the object that holds all of the queries, 
    //such as users, user, thoughts, and thought
    users: async () => { // this is the query that will return all of the users
      return User.find().populate('thoughts');
      // it will return all of the users
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below 
    
    addUser: async (parent, args) => {// this will add a user
      const user = await User.create(args);// then it will create a user, using the args
      const token = signToken(user);// it will sign the token, 
      //and it will pass in the user

      return { token, user }; // this will return the token and the user
    },
    // TODO: Add comments to each line of code below to describe the functionality below
    login: async (parent, { email, password }) => {
      // this is the mutation that will log in a user and it will take in the email and the password
      //mutation is a way to change the data in the database
      const user = await User.findOne({ email });
      // it will find the user by the email

      if (!user) { // ! means not
        // if there is no user, it will throw an error
        throw new AuthenticationError('Incorrect credentials');
        // this is the error that will be thrown, which says incorrect credentials
      }

      const correctPw = await user.isCorrectPassword(password);
      // it will check to see if the password is correct

      if (!correctPw) {// if the password is not correct
        throw new AuthenticationError('Incorrect credentials');
        // it will throw an error
      }

      const token = signToken(user);// this will sign the token,
      // if the user manage to log in then it will sign the token
      // the token is the user's id
      return { token, user };// it will return the token and the user
      
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      // this is the mutation that will add a thought
      const thought = await Thought.create({ thoughtText, thoughtAuthor });
      // it will create a thought

      await User.findOneAndUpdate(// it will find the user by the id
        { username: thoughtAuthor },// it will find the user by the username
        { $addToSet: { thoughts: thought._id } }// `addToSet` will add the thought to the user's thoughts array
      );

      return thought;// it will return the thought
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => 
  {// this is the mutation that will add a comment,
      return Thought.findOneAndUpdate(// it will find the thought by the id
        { _id: thoughtId },// it will find the thought by the id
        {
          $addToSet: { comments: { commentText, commentAuthor } },
          // it will add the comment to the thought's comments array
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      // this is the mutation that will remove a thought
      return Thought.findOneAndDelete({ _id: thoughtId });
      // it will find the thought by the id and delete it
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      // this is the mutation that will remove a comment
      return Thought.findOneAndUpdate(
        // it will find the thought by the id
        { _id: thoughtId },// it will find the thought by the id
        { $pull: { comments: { _id: commentId } } },// it will pull the comment from the thought's comments array
        { new: true }// it will return the updated thought
      );
      // what is sign token?
      // it is a function that will take in a user and it will sign the token
      // its grabing the json web token then it will sign it
      // take the payload and sign it with the secret or the key
    },
  },
};

module.exports = resolvers;
