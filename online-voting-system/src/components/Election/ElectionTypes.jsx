import React from 'react';
import electionTypes from './ElectionTypesList';

const ElectionForm = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Create Election</h2>
      <div className="mb-4">
        <label htmlFor="electionType" className="block text-sm font-medium text-gray-700">Election Type</label>
        <select id="electionType" name="electionType" className="mt-1 p-2 border rounded-md w-full">
          {electionTypes.map(electionType => (
            <option key={electionType.id} value={electionType.id}>{electionType.name}</option>
          ))}
        </select>
      </div>
      {/* Other form fields */}
      <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Create</button>
    </div>
  );
};

export default ElectionForm;
