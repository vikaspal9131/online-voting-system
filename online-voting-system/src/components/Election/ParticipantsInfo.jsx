import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ConfirmVotePopup from './ConfirmVote';
import OtpVerificationPopup from './OtpVerification';
import Layout from '../Layout/BasicLayout';

const ParticipantInfo = () => {
  const [participants, setParticipants] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false);

  useEffect(() => {
    // Dummy participant data for demonstration
    const dummyParticipants = [
      { id: 1, name: 'John Doe', age: 30, party: 'Independent', electionId: 1 },
      { id: 2, name: 'Jane Smith', age: 40, party: 'Green Party', electionId: 1 },
      { id: 3, name: 'Alice Johnson', age: 35, party: 'Democratic Party', electionId: 2 },
      // Add more dummy participants as needed
    ];

    setParticipants(dummyParticipants);
  }, []);

  const handleVoteClick = (participant) => {
    setSelectedParticipant(participant);
    setIsConfirmPopupOpen(true);
  };

  const handleConfirmVote = () => {
    setIsConfirmPopupOpen(false);
    setIsOtpPopupOpen(true);
  };

  const handleOtpVerify = (otp) => {
    // Add logic to verify the OTP
    console.log('OTP verified:', otp);
    setIsOtpPopupOpen(false);
    // Add logic to handle successful vote
  };

  const handleCloseConfirmPopup = () => {
    setIsConfirmPopupOpen(false);
  };

  const handleCloseOtpPopup = () => {
    setIsOtpPopupOpen(false);
  };

  return (
    <Layout>
      <h1>Participant Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {participants.map(participant => (
          <motion.div key={participant.id} className="bg-gray-200 p-4 rounded shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className="text-xl font-semibold mb-2">{participant.name}</h2>
            <p className="text-gray-700 mb-2">Age: {participant.age}</p>
            <p className="text-gray-700 mb-2">Party: {participant.party}</p>
            <button onClick={() => handleVoteClick(participant)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block transition duration-300 ease-in-out transform hover:scale-105">Vote</button>
          </motion.div>
        ))}
      </div>
      <ConfirmVotePopup 
        isOpen={isConfirmPopupOpen} 
        onClose={handleCloseConfirmPopup} 
        onConfirm={handleConfirmVote} 
        participant={selectedParticipant} 
      />
      <OtpVerificationPopup 
        isOpen={isOtpPopupOpen} 
        onClose={handleCloseOtpPopup} 
        onVerify={handleOtpVerify} 
      />
    </Layout>
  );
};

export default ParticipantInfo;
