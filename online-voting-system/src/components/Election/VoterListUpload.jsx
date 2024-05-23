import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const VotersCRUD = () => {
  const [voters, setVoters] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedVoter, setEditedVoter] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      setVoters(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedVoter({ ...voters[index] });
  };

  const handleSave = () => {
    const updatedVoters = [...voters];
    updatedVoters[editingIndex] = editedVoter;
    setVoters(updatedVoters);
    setEditingIndex(-1);
    setEditedVoter(null);
  };

  const handleDelete = (index) => {
    const updatedVoters = voters.filter((_, i) => i !== index);
    setVoters(updatedVoters);
  };

  const handleChange = (e) => {
    setEditedVoter({ ...editedVoter, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Upload Voters List</h2>
      <div className="mb-4">
        <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} className="p-2 border rounded-md w-full" />
      </div>
      {voters.length > 0 && (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              {Object.keys(voters[0]).map((key) => (
                <th key={key} className="px-4 py-2 border-b">{key}</th>
              ))}
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {voters.map((voter, index) => (
              <tr key={index} className="border-b">
                {Object.keys(voter).map((key) => (
                  <td key={key} className="px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name={key}
                        value={editedVoter[key]}
                        onChange={handleChange}
                        className="p-1 border rounded-md w-full"
                      />
                    ) : (
                      voter[key]
                    )}
                  </td>
                ))}
                <td className="px-4 py-2">
                  {editingIndex === index ? (
                    <button onClick={handleSave} className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600">Save</button>
                  ) : (
                    <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white py-1 px-3 rounded mr-2 hover:bg-yellow-600">Edit</button>
                  )}
                  <button onClick={() => handleDelete(index)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VotersCRUD;
