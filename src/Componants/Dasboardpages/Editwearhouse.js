import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Editwearhouse.css'; // Importing the CSS file for styling

const Editwearhouse = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [status, setStatus] = useState('Active'); // Default status is 'Active'

  const handleCancelClick = () => {
    navigate('/dashboard/wearhouse'); // Navigate back to the City component
  };

  const handleSaveClick = () => {
    // Handle save logic here
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Function to handle status change
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };


  return (
    <div className="editwearhouse-addstate-container">
      <div className="editwearhouse-addstate-header">
        <IoArrowBack size={24} onClick={() => navigate('/dashboard/wearhouse')} className="editwearhouse-back-arrow-icon" />
        <h2>Edit wearhouse</h2>
      </div>
      <div className="editwearhouse-addstate-form">
        <input type="text" placeholder="wearhouse Name" className="editwearhouse-input-box" />
        <select value={selectedState} onChange={handleStateChange} className="editwearhouse-input-box">
          <option value="">Select State</option>
          <option value="state1">State 1</option>
          <option value="state2">State 2</option>
          <option value="state3">State 3</option>
          {/* Add more options as needed */}
        </select>
        <select value={selectedCity} onChange={handleCityChange} className="editwearhouse-input-box">
          <option value="">Select City</option>
          {/* Populate options based on the selected state */}
          {selectedState === 'state1' && (
            <>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              {/* Add more cities for state 1 */}
            </>
          )}
          {selectedState === 'state2' && (
            <>
              <option value="city3">City 3</option>
              <option value="city4">City 4</option>
              {/* Add more cities for state 2 */}
            </>
          )}
          {selectedState === 'state3' && (
            <>
              <option value="city5">City 5</option>
              <option value="city6">City 6</option>
              {/* Add more cities for state 3 */}
            </>
          )}
          {/* Add more states with respective cities */}
        </select>
      </div>
      <div className="editwearhouse-addcity-form">
       {/* Dropdown for selecting status */}
       <select value={status} onChange={handleStatusChange} className="editstate-input-box">
          <option value="Active">Active</option>
          <option value="Realme">Realme</option>
        </select>
        </div>
      <div className="editwearhouse-addstate-buttons">
        <button className="editwearhouse-cancel-button" onClick={handleCancelClick}>Cancel</button>
        <button className="editwearhouse-save-button" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default Editwearhouse;
