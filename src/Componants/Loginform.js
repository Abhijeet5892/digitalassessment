import React, { useState } from 'react';
import './Loginform.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = () => {
        // You can replace these hardcoded values with your actual authentication logic
        const expectedEmail = 'abc@gmail.com';
        const expectedPassword = '123';

        if (email === expectedEmail && password === expectedPassword) {
            // If email and password match, navigate to Dashboard page
            window.location.href = '/dashboard';
        } else {
            // If email and password don't match, show error message
            setLoginError(true);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
                <h3>Welcome to Digitalflake Admin</h3>
                <div className="input-container">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        className="input-field"
                    />
                </div>
                <div className="input-container">
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="Password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        className="input-field"
                    />
                </div>
                {loginError && <p className="error-message">Incorrect email or password</p>}
                <a className="forgot-password"><Link to="/Forgotpass">Forgot Password?</Link></a>
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginForm;
