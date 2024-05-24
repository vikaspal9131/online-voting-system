// CreateElection.jsx
import React, { useState } from 'react';
import Layout from '../Layout/BasicLayout';

const CreateElection = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: ''
    });
  };

  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Create Election</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div>
            <label htmlFor="date" className="block text-gray-700">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div>
            <label htmlFor="time" className="block text-gray-700">Time</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div>
            <label htmlFor="location" className="block text-gray-700">Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Create Election</button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateElection;
