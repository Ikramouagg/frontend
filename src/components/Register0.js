import React, { useState } from "react";
import '../css/styler.css'; 
import "boxicons/css/boxicons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const handleRegisterClick = () => setIsLoginActive(false);
  const handleLoginClick = () => setIsLoginActive(true);

  return (
    <div className={`container ${isLoginActive ? "" : "active"}`}>
      {/* نموذج تسجيل الدخول */}
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </form>
      </div>

      {/* نموذج التسجيل */}
      <div className="form-box register">
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn">Register</button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </form>
      </div>

      {/* صندوق التحويل بين تسجيل الدخول والتسجيل */}
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