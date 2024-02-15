import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const AuthPage = ({ onLogin }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();

  const handleSuccessfulLogin = () => {
    onLogin(); // Notify parent component about successful login
    navigate('/admindash'); // Redirect to admin dashboard after login
  };

  const handleFormSwitch = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="auth-form-container">
      <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
      {isLoginForm ? (
        <Login onLogin={handleSuccessfulLogin} onFormSwitch={handleFormSwitch} />
      ) : (
        <Register onLogin={handleSuccessfulLogin} onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
}

export default AuthPage;
