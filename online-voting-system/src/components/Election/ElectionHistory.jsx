import React from 'react';

const ElectionHistoryTable = ({ elections }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Election Title
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Start Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            End Date
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {elections.map((election) => (
          <tr key={election.id}>
            <td className="px-6 py-4 whitespace-nowrap">{election.title}</td>
            <td className="px-6 py-4 whitespace-nowrap">{election.startDate}</td>
            <td className="px-6 py-4 whitespace-nowrap">{election.endDate}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {election.isActive ? 'Active' : 'Inactive'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ElectionHistoryTable;
