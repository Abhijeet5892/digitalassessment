import React from 'react';
import { GoAlertFill } from 'react-icons/go';
import './Deletepopup.css';

const Deletepopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="popup-background">
      <div className="delete-popup">
        <h1><GoAlertFill size={35} /> Delete</h1>
        <p className="delete-message">Are you sure you want to delete this item?</p>
        <div className="button-container">
          <button className="confirm-button" onClick={onConfirm}>Confirm</button>
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Deletepopup;
