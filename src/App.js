// App.js

import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      console.log('Login successful:', data);
      // Handle successful login (e.g., store token, redirect user)
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error (e.g., display error message)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="App">
      <h1>Testing your durability...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="signup.html">Sign up here!</a></p>
    </div>
  );
}

export default App;
