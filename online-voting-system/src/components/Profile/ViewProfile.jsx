// Profile.jsx
import React from 'react';
import Layout from '../Layout/BasicLayout';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    voterId: 'VOT1234567890',
    aadharId: '1234 5678 9012'
  };

  return (
    <Layout>
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>

        {/* Personal Information Section */}
        <section className="mb-8">
          <h3 className="flex items-center text-xl font-semibold mb-4">
            Personal Information
            <FaEdit className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700" />
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <p className="text-gray-900">{user.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <p className="text-gray-900">{user.address}</p>
          </div>
          </section>


          <section className="mb-8">
          <h3 className="flex items-center text-xl font-semibold mb-4">
            Email & Phone Number
            <FaEdit className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700" />
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <p className="text-gray-900">{user.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <p className="text-gray-900">{user.phone}</p>
          </div>
          </section>
          
        

        {/* Identification Details Section */}
        <section className="mb-8">
          <h3 className="flex items-center text-xl font-semibold mb-4">
            Documents Details
            <FaEdit className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700" />
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Voter ID</label>
            <p className="text-gray-900">{user.voterId}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Aadhar ID</label>
            <p className="text-gray-900">{user.aadharId}</p>
          </div>
        </section>

        
      </div>
    </Layout>
  );
};

export default Profile;
