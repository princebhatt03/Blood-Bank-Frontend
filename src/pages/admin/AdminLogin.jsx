import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State for Flash Message
  const [message, setMessage] = useState('');

  // Handle Input Change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/adminLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Login Successful!' });
        localStorage.setItem('adminToken', data.token);
        navigate('/adminHome');
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server Error. Try again later.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Admin Login
        </h2>

        {message && (
          <div
            className={`text-center p-2 rounded ${
              message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white mb-4`}>
            {message.text}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          {/* Username Input */}
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter admin username"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter admin password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/adminRegister')}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
            Register as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
