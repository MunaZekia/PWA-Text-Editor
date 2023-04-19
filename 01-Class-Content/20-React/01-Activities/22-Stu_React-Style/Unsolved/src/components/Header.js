import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

const styles = {// we created a styles object
  // then we created a property called header
  header: {
    background: 'red',
    color: 'white',
    fontSize: '20px',
  },

  };

// TODO: Create a styles object called "styles"

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (// we added a style attribute to the header element
    <header styles= {styles} className="header">
      //we added 
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
