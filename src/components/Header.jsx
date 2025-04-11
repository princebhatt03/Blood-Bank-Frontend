import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Blood Bank</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link
            to="/"
            className="hover:underline">
            Home
          </Link>
          <Link
            to="/userRegister"
            className="hover:underline">
            Register
          </Link>
          <Link
            to="/about"
            className="hover:underline">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-red-700 text-center p-4 space-y-4">
          <Link
            to="/"
            className="block hover:underline">
            Home
          </Link>
          <Link
            to="/userRegister"
            className="block hover:underline">
            Register
          </Link>
          <Link
            to="/about"
            className="block hover:underline">
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:underline">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
