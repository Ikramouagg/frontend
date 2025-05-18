import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styler.css';
import "boxicons/css/boxicons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Registration form state
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Tenant' // Default role
  });

  const handleRegisterClick = () => {
    setIsActive(true);
    setError('');
  };

  const handleLoginClick = () => {
    setIsActive(false);
    setError('');
  };

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Redirect to home page
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Show success message and switch to login
      setError('Registration successful! Please login.');
      setIsActive(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      {error && (
        <div className="error-message" style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          backgroundColor: error.includes('successful') ? '#28a745' : '#dc3545',
          color: 'white',
          borderRadius: '5px',
          zIndex: 1000
        }}>
          {error}
        </div>
      )}

      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              name="email"
              placeholder="Username"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={registerData.name}
              onChange={handleRegisterChange}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="input-box">
            <select
              name="role"
              value={registerData.role}
              onChange={handleRegisterChange}
              style={{
                width: '100%',
                padding: '10px',
                paddingLeft: '40px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                outline: 'none',
                fontSize: '16px'
              }}
            >
              <option value="Tenant">Tenant</option>
              <option value="Owner">Owner</option>
            </select>
            <i className="bx bxs-user-detail"></i>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Loading...' : 'Register'}
          </button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={handleRegisterClick}>Register</button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register; 