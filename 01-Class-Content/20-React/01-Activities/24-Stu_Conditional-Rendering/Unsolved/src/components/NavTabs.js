import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// we are able to extract the key value pairs from props by using the destructuring. 
// because the props object is passed in as an argument to the NavTabs function,

function NavTabs({ currentPage, handlePageChange }) {
  // the currentPage and handlePageChange are the key value pairs that we are extracting from the props object.
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"// ternary operator is a shorthand way to write an if/else statement.
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // this is a ternary operator. It is checking if the current page is equal to home. If it is, 
          //then it will return the nav-link active class. If it is not, then it will return the nav-link class.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
          // this is a ternary operator. It is checking if the current page is equal to about. 
          // If it is, then it will return the nav-link active class. If it is not, then it will return the nav-link class.

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing
          // this is a ternary operator. It is checking if the current page is equal to blog.

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          // this is a ternary operator. It is checking if the current page is equal to contact.

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
