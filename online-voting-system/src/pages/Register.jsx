// Registration.jsx
import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/BasicLayout';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Implement registration logic here
    console.log('Registration successful:', formData);
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
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
              Register
            </button>
          </div>
        </form>
        <div className="mt-6">
          <p className="text-center text-gray-600">Or sign in with</p>
          <div className="flex justify-center mt-4">
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2 flex items-center">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded mr-2 flex items-center">
              <FaFacebook className="mr-2" /> Facebook
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600">Log in</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
