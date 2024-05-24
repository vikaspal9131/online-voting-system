// ConfirmVotePopup.jsx
import React from 'react';

const ConfirmVotePopup = ({ isOpen, onClose, onConfirm, participant }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Confirm Vote</h2>
        <p>Are you sure you want to vote for:</p>
        <div className="my-4">
          <p><strong>Name:</strong> {participant.name}</p>
          <p><strong>Age:</strong> {participant.age}</p>
          <p><strong>Party:</strong> {participant.party}</p>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
          <button onClick={onConfirm} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmVotePopup;
