import React from 'react';
import { useParams } from 'react-router-dom';

const PatientDetails = () => {
  const { id } = useParams();
  const patient = {
    fullName: 'Rahul Sharma',
    aadhaar: '1234-5678-9012',
    mobile: '9876543210',
    bloodGroup: 'O+',
    details: 'Need blood due to surgery',
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Patient Details</h2>
      <p>
        <strong>Full Name:</strong> {patient.fullName}
      </p>
      <p>
        <strong>Aadhaar:</strong> {patient.aadhaar}
      </p>
      <p>
        <strong>Mobile:</strong> {patient.mobile}
      </p>
      <p>
        <strong>Blood Group:</strong> {patient.bloodGroup}
      </p>
      <p>
        <strong>Details:</strong> {patient.details}
      </p>

      <div className="flex justify-between mt-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Provide Help
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Delete Patient
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
