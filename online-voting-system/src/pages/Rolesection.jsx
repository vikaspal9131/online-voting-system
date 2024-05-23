// src/components/UserCard.jsx

import React from 'react';

const UserCard = ({ name, age, email, role, logo, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={logo} alt="User Logo" className="w-10 h-10 mr-2" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">Age: {age}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Role</h3>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
