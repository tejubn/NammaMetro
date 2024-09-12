// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#2E073F] p-4 flex justify-between items-center shadow-md">
      {/* Logo Section */}
      <Link to="/" className="flex items-center">
        <img 
          src="https://imagesvs.oneindia.com/img/2011/10/20-bangalore-metro-logo.jpg" 
          alt="Logo" 
          className=" h-12 w-24" // Adjust width here
        />
      </Link>

    </header>
  );
};

export default Header;
