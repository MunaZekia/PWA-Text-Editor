import React from 'react';
// TODO: Create a `name` variable
const name = 'Muna';
//number of letters in name
const numLetters = name.length;
numLetters = 4;


// TODO: Create a `thoughts` variable
const thoughts = 'React is fun!';
// This should be a string regarding what you think of React

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {Muna}
          
          <h1>Hi! My name is (Muna)</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has (4) letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React (is fun!)</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
