// src/App.jsx

import React from 'react';

const App = () => {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      author: 'Author 1'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
      author: 'Author 2'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3',
      author: 'Author 3'
    }
  ];

  return (
    <div className="App flex justify-center items-center h-screen ">
      {cards.map(card => (
        <div key={card.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mr-7">
          <div className="px-4 py-2">
            <h2 className="text-gray-800 text-lg font-semibold">{card.title}</h2>
            <p className="text-gray-600 mt-1">{card.description}</p>
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <p className="text-gray-200">{card.author}</p>
            <a href="#" className="text-white">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;