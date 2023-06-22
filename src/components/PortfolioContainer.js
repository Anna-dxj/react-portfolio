import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

import '../styles/PortfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="custom-background">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="page-container">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}