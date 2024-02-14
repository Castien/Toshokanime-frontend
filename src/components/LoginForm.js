import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Assuming you're using axios for API requests

const LoginForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      const { token } = response.data;
      // Store token in localStorage
      localStorage.setItem('token', token); 
      history.push('/');
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        {error && <p>{error}</p>} {/* Display error message if login fails */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
