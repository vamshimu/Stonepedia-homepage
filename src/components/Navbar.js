import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => (
  <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Stonepedia</h1>
    <div className="space-x-6">
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#products" className="hover:text-gray-400">Products</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </div>
    <FaSearch className="text-xl cursor-pointer" />
  </nav>
);

export default Navbar;
