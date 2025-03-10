import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 sm:h-24 md:h-28 lg:h-32 
                    flex items-center justify-center z-50">
      
      <div className="w-full max-w-screen-md flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img src="/img/filterspyler-logo.png" className="h-10 sm:h-14 md:h-16 lg:h-20" alt="Logo" />
          <a href="/" className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            FILTERSPYLER
          </a>
        </div>

        <div className="flex space-x-6 text-md">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">Product</a>
          <a href="#" className="hover:text-gray-300 transition">Purchase</a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
