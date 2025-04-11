import { useState } from 'react';
import axios from 'axios';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    bloodGroup: '',
    agreeTerms: false,
    donateBlood: false,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/userRegister`,
        formData
      );

      setMessage(response.data.message);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        bloodGroup: '',
        agreeTerms: false,
        donateBlood: false,
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600">
          Register as a Donor
        </h2>
        {message && (
          <p className="bg-green-500 text-white p-2 rounded mb-3 text-center">
            {message}
          </p>
        )}
        {error && (
          <p className="bg-red-500 text-white p-2 rounded mb-3 text-center">
            {error}
          </p>
        )}
        <form
          className="mt-4"
          onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">
              I agree to the Terms and Conditions
            </label>
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="donateBlood"
              checked={formData.donateBlood}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">I am ready to donate blood</label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
