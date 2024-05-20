import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Addcity.css'; // Importing the CSS file for styling

const Addcity = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState(''); // State to manage the selected state value

  const handleCancelClick = () => {
    navigate('/dashboard/city'); // Navigate back to the City component
  };

  const handleSaveClick = () => {
    // Handle save logic here
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value); // Update the selected state value
  };

  return (
    <div className="city-addstate-container">
      <div className="city-addstate-header">
        <IoArrowBack size={24} onClick={() => navigate('/dashboard/city')} className="city-back-arrow-icon" />
        <h2>Add City</h2>
      </div>
      <div className="city-addstate-form">
        <input type="text" placeholder="City Name" className="city-input-box" />
        <input type="text" placeholder="City Code" className="city-input-box" />
        <select value={selectedState} onChange={handleStateChange} className="city-input-box">
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          <option value="state3">State 3</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="city-addstate-buttons">
        <button className="city-cancel-button" onClick={handleCancelClick}>Cancel</button>
        <button className="city-save-button" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default Addcity;
