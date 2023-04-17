import React from 'react';
// TODO: Add a comment explaining what this import statement is doing
import HelloReact from './components/HelloReact';
// this is importing the HelloReact component from the components folder
// HelloReact is a function that returns a div with the text "Hello React!"

// TODO: Add a comment explaining the purpose of the App component
function App() {// this is the App component, which means it is a function that returns the HelloReact component
  return <HelloReact />;
  // this is the return statement, which is what is rendered to the page
}

export default App;

// pros and cons of react
// pros: it is a library, not a framework, so it is more flexible
// cons: the downside is that it is more complex to set up and needs more configuration. meaning you have to do more work to get it to work
