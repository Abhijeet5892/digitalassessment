import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Addstate.css'; // Importing the CSS file for styling

const Addstate = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/dashboard/state'); // Navigate back to the State component
  };

  return (
    <div className="state-addstate-container">
      <div className="state-addstate-header">
        <IoArrowBack size={24} onClick={() => navigate('/dashboard/state')} className="state-back-arrow-icon" />
        <h2>Add State</h2>
      </div>
      <div className="state-addstate-form">
        <input type="text" placeholder="State Name" className="state-input-box" />
        <input type="text" placeholder="State Code" className="state-input-box" />
      </div>
      <div className="state-addstate-buttons">
        <button className="state-cancel-button" onClick={handleCancelClick}>Cancel</button>
        <button className="state-save-button">Save</button>
      </div>
    </div>
  );
};

export default Addstate;
