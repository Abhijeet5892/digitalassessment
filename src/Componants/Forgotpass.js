// ForgotPasswordForm.js

import React, { useState } from 'react';
import './Forgotpass.css'; // Importing external CSS file
import { Link } from 'react-router-dom';

const Forgotpass = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // Logic to send reset password link
    console.log(`Reset password link sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Did you forget your password?</h1>
      <p className="forgot-password-description">
        Enter your email address and we’ll send you a link to restore your password.
      </p>
      <input
        type="email"
        className="forgot-password-input"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="forgot-password-button" onClick={handleResetPassword}>
        Request reset link
      </button>
      <br />
      <a  className="back-to-login-button"> <Link to="/">Back to login</Link></a>
    </div>
  );
};

export default Forgotpass;
