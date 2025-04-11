import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} Blood Bank. All Rights Reserved.
        </p>

        {/* Created By */}
        <p className="mt-2">
          Created by{' '}
          <a
            href="https://www.linkedin.com/in/prince-bhatt-0958a725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline">
            Prince Bhatt
          </a>
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/prince-bhatt-0958a725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/princebhatt03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-2xl hover:scale-110 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
