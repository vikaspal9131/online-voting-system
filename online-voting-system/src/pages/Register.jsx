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
// <<<<<<< HEAD
    <div className="w-96 boreder-2 flex flex-col justify-center items-center p-6 bg-white rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-8">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 mb-3 border-b border-black w-72 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 border-b border-black w-72 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1  border-b border-black w-72 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1  border-b border-black w-72 focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1  border-b border-black w-72 focus:outline-none" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full">Register</button>
      </form>
    </div>
    // <Layout>
    //   <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    //     <h2 className="text-2xl font-semibold mb-4">Register</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
    //           Name
    //         </label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
    //           value={formData.name}
    //           onChange={handleChange}
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           value={formData.password}
    //           onChange={handleChange}
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
    //           Confirm Password
    //         </label>
    //         <input
    //           type="password"
    //           id="confirmPassword"
    //           name="confirmPassword"
    //           value={formData.confirmPassword}
    //           onChange={handleChange}
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           required
    //         />
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <button
    //           type="submit"
    //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //         >
    //           Register
    //         </button>
    //       </div>
    //     </form>
    //     <div className="mt-6">
    //       <p className="text-center text-gray-600">Or sign in with</p>
    //       <div className="flex justify-center mt-4">
    //         <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2 flex items-center">
    //           <FaGoogle className="mr-2" /> Google
    //         </button>
    //         <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded mr-2 flex items-center">
    //           <FaFacebook className="mr-2" /> Facebook
    //         </button>
    //         <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">
    //           <FaLinkedin className="mr-2" /> LinkedIn
    //         </button>
    //       </div>
    //     </div>
    //     <div className="mt-4 text-center">
    //       <p className="text-gray-600">
    //         Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600">Log in</Link>
    //       </p>
    //     </div>
    //   </div>
    // </Layout>

  );
};

export default Registration;
