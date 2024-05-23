import React, { useState } from 'react';

const UploadParticipants = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/vnd.ms-excel' && selectedFile.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        setError('Invalid file format. Please upload an Excel file.');
        setFile(null);
      } else {
        setFile(selectedFile);
        setError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Process the uploaded file (e.g., send it to the server for further processing)
      console.log('File uploaded:', file);
    } else {
      setError('Please upload a file.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Upload Participants</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} className="p-2 border rounded-md w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Upload</button>
      </form>
    </div>
  );
};

export default UploadParticipants;
