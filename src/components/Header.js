import React, { useState } from 'react';
import Navigation from './Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About')
    const handlePageChange = (page) => setCurrentPage(page)

    const renderPage = () => {
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <About />;
      };


  return (
    <div>
      <h1>Darrell Carter</h1>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
