import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handling input change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        'https://blood-bank-backend-n110.onrender.com/adminRegister',
        formData
      );

      if (response.status === 201) {
        setSuccess('Admin registered successfully!');
        setTimeout(() => navigate('/adminHome'), 1000);
      }
    } catch (err) {
      setError(
        err.response?.data?.error || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Registration
        </h2>

        {error && (
          <p className="bg-red-500 text-white p-2 rounded mb-3 text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="bg-green-500 text-white p-2 rounded mb-3 text-center">
            {success}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Unique Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Register as Admin
          </button>
          <button
            type="submit"
            onClick={() => navigate('/adminLogin')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
