import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Blood Bank is a platform that connects voluntary blood donors with
          those in need. Our mission is to make blood donation easier,
          accessible, and efficient.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Our Vision
        </h2>
        <p className="text-gray-700">
          We aim to create a strong network of donors and ensure that no one has
          to struggle to find blood in emergencies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Fast and easy donor registration.</li>
          <li>Secure and private donor database.</li>
          <li>24/7 availability for urgent needs.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
