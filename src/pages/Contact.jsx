import React, { useState } from 'react';

const Contact = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    fullName: '',
    aadhaar: '',
    mobile: '',
    bloodGroup: '',
    details: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://blood-bank-backend-n110.onrender.com/registerPatient',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(patient),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Patient Registered Successfully!');
        setErrorMessage(''); // Clear error message
        setPatient({
          fullName: '',
          aadhaar: '',
          mobile: '',
          bloodGroup: '',
          details: '',
        });
      } else {
        setErrorMessage(data.message || 'Error registering patient.');
        setSuccessMessage(''); // Clear success message
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Server Error! Please try again.');
      setSuccessMessage('');
    }

    // Remove flash messages after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">
        Register for Blood Requirement
      </h2>

      {/* Flash Messages */}
      {successMessage && (
        <div className="bg-green-500 text-white p-2 rounded mb-3 text-center">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-500 text-white p-2 rounded mb-3 text-center">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Patient's Full Name"
          value={patient.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="text"
          name="aadhaar"
          placeholder="Aadhaar Card Number"
          value={patient.aadhaar}
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={patient.mobile}
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group Required"
          value={patient.bloodGroup}
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <textarea
          name="details"
          placeholder="Why is blood required? Mention Disease if any..."
          value={patient.details}
          onChange={handleChange}
          required
          className="w-full p-2 border mb-3 rounded"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded">
          Register Patient
        </button>
        <button
          type="submit"
          onClick={() => navigate('/adminHome')}
          className="w-full mt-1 bg-green-600 text-white p-2 rounded">
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default Contact;
