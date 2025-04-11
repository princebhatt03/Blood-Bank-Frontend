import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-red-300 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Blood Bank</h1>
        <p className="mt-2 text-lg">Donate blood, save lives.</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Why Donate Blood?
            </h2>
            <p className="mt-2 text-gray-600">
              Your donation can save lives! Blood donation helps patients
              suffering from severe illnesses, accidents, or medical conditions.
              Be a hero today.
            </p>
          </div>

          {/* Right Side - Links */}
          <div className="space-y-4">
            <Link
              to="/userRegister"
              className="block bg-red-500 text-white py-3 px-6 rounded-lg text-center hover:bg-red-700 transition">
              Register Donar
            </Link>
            <Link
              to="/adminRegister"
              className="block bg-blue-500 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition">
              Admin Registration
            </Link>
            <Link
              to="/adminLogin"
              className="block bg-pink-500 text-white py-3 px-6 rounded-lg text-center hover:bg-pink-700 transition">
              Admin Login
            </Link>
            <Link
              to="/contact"
              className="block bg-purple-500 text-white py-3 px-6 rounded-lg text-center hover:bg-purple-700 transition">
              Register Patient
            </Link>
            <Link
              to="/terms"
              className="block bg-gray-700 text-white py-3 px-6 rounded-lg text-center hover:bg-gray-900 transition">
              Terms & Conditions
            </Link>
            <Link
              to="/about"
              className="block bg-green-500 text-white py-3 px-6 rounded-lg text-center hover:bg-green-700 transition">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
