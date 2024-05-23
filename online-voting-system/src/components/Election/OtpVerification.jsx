import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === '1234') { // Replace '1234' with the actual OTP to verify
      // OTP is correct, add your logic here (e.g., navigate to the next step)
      console.log('OTP verified successfully');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Verify OTP</button>
      </form>
    </div>
  );
};

export default OTPVerification;
