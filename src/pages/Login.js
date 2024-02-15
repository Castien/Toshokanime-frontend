// Login.js
import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin, onFormSwitch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = "http://localhost:9001";
      const endpoint = `${apiUrl}/api/login`;
      const response = await axios.post(endpoint, { username, password });

      if (response.status === 200) {
        onLogin(); // Notify parent component about successful login
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input value={username} onChange={(event) => setUsername(event.target.value)} id="username" placeholder="Username" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" id="password" />
        <button type="submit">Log In</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <button onClick={() => onFormSwitch()}>New Account? Register!</button>
    </div>
  );
};

export default Login;
