// OtpVerificationPopup.jsx
import React, { useState } from 'react';

const OtpVerificationPopup = ({ isOpen, onClose, onVerify }) => {
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    onVerify(otp);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">OTP Verification</h2>
        <p>Please enter the OTP sent to your registered number:</p>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          className="mt-2 p-2 border rounded w-full"
        />
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
          <button onClick={handleVerify} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPopup;
