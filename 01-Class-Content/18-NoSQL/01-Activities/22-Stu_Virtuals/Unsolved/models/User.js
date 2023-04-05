const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {virtuals: true, // this is the default, so you don't need to include it. true means that virtuals will be included in the JSON
  },
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
    
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName').get(function() {
  
// TODO: Create a getter for the virtual that returns the full name of the user (first + last)
  // the getter is a function that returns the full name of the user
return `${this.first} ${this.last}`;
// ${this.first} is the first name of the user and ${this.last} is the last name of the user/ The ${} is a template literal
});
// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`
userSchema.virtual('fullName').set(function(fullName) {
  // we are setting the full name and splitting it into first and last names
  const array = this.fullName.split(' ');
  // the split function splits the full name into an array of two strings
 first = array[0];
 last = array[1];
  this.set = ({first: array[0], last: array[1]});

});

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
