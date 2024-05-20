import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { GoAlertFill } from 'react-icons/go';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const LogoutPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="popup-background">
      <div className="logout-popup">
        <h1><GoAlertFill size={35} /> Log Out</h1>
        <p className="logout-message">Are you sure you want to log out?</p>
        <div className="button-container">
          <button className="confirm-button" onClick={onConfirm}>Confirm</button>
          <button className="delete-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    setShowLogoutPopup(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  const handleConfirmLogout = () => {
    navigate('/');
  };

  return (
    <div>
      {showLogoutPopup && <LogoutPopup onCancel={handleCancelLogout} onConfirm={handleConfirmLogout} />}
      <div className="navbar">
        <img src="/icon.png" alt="Logo" />
        <FaSignOutAlt size={30} onClick={handleLogout} />
      </div>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <NavLink to="/dashboard/home" end activeClassName="active">
                <img src="/home.png" alt="Home" style={{ width: '30px' }} />&nbsp; <h3>Home</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/state" activeClassName="active">
                <img src="/state.png" alt="State" style={{ width: '30px' }} /> &nbsp; <h3>State</h3> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/city" activeClassName="active">
                <img src="/city.png" alt="City" style={{ width: '30px' }} />  &nbsp;<h3>City</h3> 
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/wearhouse" activeClassName="active">
                <img src="/wearhouse.png" alt="Warehouse" style={{ width: '30px' }} /> &nbsp;<h3>Warehouse</h3> 
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
