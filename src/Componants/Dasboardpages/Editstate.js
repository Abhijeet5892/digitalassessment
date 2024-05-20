import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Editstate.css'; // Importing the CSS file for styling

const Editstate = () => {
  const navigate = useNavigate();
  
  // State for managing the selected status
  const [status, setStatus] = useState('Active'); // Default status is 'Active'

  const handleCancelClick = () => {
    navigate('/dashboard/state'); // Navigate back to the State component
  };

  // Function to handle status change
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="editstate-addstate-container">
      <div className="editstate-addstate-header">
        <IoArrowBack size={24} onClick={() => navigate('/dashboard/state')} className="editstate-back-arrow-icon" />
        <h2>Edit State</h2>
      </div>
      <div className="editstate-addstate-form">
        <input type="text" placeholder="State Name" className="editstate-input-box" />
        <input type="text" placeholder="State Code" className="editstate-input-box" />
        {/* Dropdown for selecting status */}
        <select value={status} onChange={handleStatusChange} className="editstate-input-box">
          <option value="Active">Active</option>
          <option value="Realme">Realme</option>
        </select>
      </div>
      <div className="editstate-addstate-buttons">
        <button className="editstate-cancel-button" onClick={handleCancelClick}>Cancel</button>
        <button className="editstate-save-button">Save</button>
      </div>
    </div>
  );
};

export default Editstate;
