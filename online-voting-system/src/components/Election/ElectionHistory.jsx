import React from 'react';

const ElectionHistory = () => {
  const history = [
    { id: 1, title: '2020 Presidential Election', date: '2020-11-03', result: 'Completed' },
    { id: 2, title: '2018 Midterm Election', date: '2018-11-06', result: 'Completed' },
    { id: 3, title: '2020 Presidential Election', date: '2020-11-03', result: 'Completed' },
    { id: 4, title: '2018 Midterm Election', date: '2018-11-06', result: 'Completed' },
    // Add more history items here
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Election History</h2>
      <table className="bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Title</th>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Result</th>
          </tr>
        </thead>
        <tbody>
          {history.map(item => (
            <tr key={item.id} className="border-b">
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">{item.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ElectionHistory;
