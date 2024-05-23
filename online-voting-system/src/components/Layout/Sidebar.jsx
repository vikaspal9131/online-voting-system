import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Sidebar</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="mt-4">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 1</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 2</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Option 3</li>
          {/* Add more sidebar options as needed */}
        </ul>
      </div>
      <div className="p-4 border-t border-gray-700">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
