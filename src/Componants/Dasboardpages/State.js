import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { GoAlertFill } from 'react-icons/go';
import './State.css'; // Importing the CSS file specific to this component

const DeletePopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="popup-background">
      <div className="delete-popup">
        <h1><GoAlertFill size={35} /> Delete</h1>
        <p className="delete-message">Are you sure you want to delete this item?</p>
        <div className="button-container">
          <button className="confirm-button" onClick={onConfirm}>Confirm</button>
          <button className="cancle-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const State = () => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleAddNewClick = () => {
    navigate('/dashboard/state/addstate'); // Navigate to the Addstate component
  };

  const handleEditClick = () => {
    navigate('/dashboard/state/editstate'); // Navigate to the Editstate component
  };

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    // Simply close the popup without any further action
    setShowDeletePopup(false);
  };

  return (
    <div className="state-container">
      {showDeletePopup && <DeletePopup onCancel={handleCancelDelete} onConfirm={handleConfirmDelete} />}
      <div className="state-top-row">
        <img src="/state.png" alt="State" style={{ width: '40px' }} /> &nbsp; &nbsp;<h2>State</h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="state-search-container">
          <input type="text" placeholder="Search..." className="state-search-box" />
          <button className="state-search-button">
            <i><IoSearchSharp size={30} /></i>
          </button>
        </div>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <button className="state-add-new-button" onClick={handleAddNewClick}>Add New</button>
      </div>
      <table className="state-table">
        <thead>
          <tr>
            <th>id</th>
            <th>State Name</th>
            <th>State Code</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <FaRegEdit size={30} onClick={handleEditClick} />
              <RiDeleteBin6Fill size={30} onClick={handleDeleteClick} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default State; // Ensure default export
