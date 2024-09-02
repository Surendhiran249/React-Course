import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login functionality here
    console.log('Login button clicked');
    navigate('/homepage');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Navigate to the signup page
    navigate('/');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add forgot password functionality here
    console.log('Forgot password button clicked');
  };

  return (
    <div className="login-container">
      <h2>Welcome to FreshCart</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <a href="#" className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>
        {isLogin ? (
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <button className="sign-up-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        )}
        <p className="new-user">
          New User?{' '}
          <a href="#" className="sign-up" onClick={handleSignUp}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
