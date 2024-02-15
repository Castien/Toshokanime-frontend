import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = "http://localhost:9001";
      const endpoint = `${apiUrl}/api/login`;
      const response = await axios.post(endpoint, { username, password });

      if (response.status === 200) {
        onLogin(); // Notify parent component about successful login
        navigate('/admindash'); // Redirect to admin dashboard after login
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input value={username} onChange={(loginE) => setUsername(loginE.target.value)} id="username" placeholder="username" />
        <label htmlFor="password">password</label>
        <input value={password} onChange={(loginE) => setPassword(loginE.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default AuthPage;
