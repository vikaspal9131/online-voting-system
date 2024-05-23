// ForgotPassword.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout/BasicLayout';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement forgot password logic here
    console.log('Password reset requested for:', email);
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        {submitted ? (
          <div>
            <p className="text-green-600">Password reset instructions have been sent to your email.</p>
            <Link to="/login" className="text-blue-500 hover:text-blue-600">Back to Login</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default ForgotPassword;
