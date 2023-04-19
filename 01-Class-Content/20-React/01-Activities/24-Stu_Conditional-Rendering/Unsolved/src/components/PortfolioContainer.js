import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    // this method is used to render the page based on the current page
    if (currentPage === 'Home') {
      // if the current page is home, then return the home page
      return <Home />;
    }
    if (currentPage === 'About') {
      // if the current page is about, then return the about page
      return <About />;
    }
    if (currentPage === 'Blog') {
      // if the current page is blog, then return the blog page
      // then return the blog page
      return <Blog />;
    }
    return <Contact />;// if the current page is contact, then return the contact page
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */} // we are passing the current page and the handle page change method as props. Which means that we can use the current page and the handle page change method in the NavTabs component
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // we are passing the current page and the handle page change method as props. Which means that we can use the current page and the handle page change method in the NavTabs component */}
      {/* // TODO: Add a comment explaining what is happening on the following line */}
       // we are calling the render page method, whcih will render the page based on the current page
      {renderPage()}
      
    </div>
  );
}
