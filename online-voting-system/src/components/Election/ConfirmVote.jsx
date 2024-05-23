import React from 'react';

const ConfirmVote = ({ candidate, onConfirm }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Confirm Vote</h2>
        <div className="mb-4">
          <p className="text-gray-700">You are about to vote for:</p>
          <div className="flex items-center mt-2">
            <img src={candidate.image} alt={candidate.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-lg font-semibold">{candidate.name}</p>
              <p className="text-sm text-gray-500">{candidate.party}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={onConfirm} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-2">Confirm</button>
          <button onClick={() => console.log('Cancel')} className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmVote;
