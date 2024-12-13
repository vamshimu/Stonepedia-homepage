import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2024 Stonepedia. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:text-gray-400">Facebook</a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a href="#" className="hover:text-gray-400">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
