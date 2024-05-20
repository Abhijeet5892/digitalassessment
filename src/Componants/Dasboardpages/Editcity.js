import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Editcity.css'; // Importing the CSS file for styling

const Editcity = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState(''); // State to manage the selected state value
  const [status, setStatus] = useState('Active'); // Default status is 'Active'

  const handleCancelClick = () => {
    navigate('/dashboard/city'); // Navigate back to the City component
  };

  const handleSaveClick = () => {
    // Handle save logic here
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value); // Update the selected state value
  };

   // Function to handle status change
   const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="editcity-addstate-container">
      <div className="editcity-addstate-header">
        <IoArrowBack size={24} onClick={() => navigate('/dashboard/city')} className="editcity-back-arrow-icon" />
        <h2>Edit City</h2>
      </div>
      <div className="editcity-addstate-form">
        <input type="text" placeholder="City Name" className="editcity-input-box" />
        <input type="text" placeholder="City Code" className="editcity-input-box" />
        <select value={selectedState} onChange={handleStateChange} className="editcity-input-box">
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          <option value="state3">State 3</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="editcity-addcity-form">
       {/* Dropdown for selecting status */}
       <select value={status} onChange={handleStatusChange} className="editstate-input-box">
          <option value="Active">Active</option>
          <option value="Realme">Realme</option>
        </select>
        </div>
      <div className="editcity-addstate-buttons">
        <button className="editcity-cancel-button" onClick={handleCancelClick}>Cancel</button>
        <button className="editcity-save-button" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default Editcity;
