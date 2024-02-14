import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({ userType }) => { // Pass userType prop to determine if it's admin or user login
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordKey: '' // Add passwordKey state for admin login
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
      let endpoint = `${process.env.REACT_APP_API_URL}/login`;
      if (userType === 'admin') { // Modify endpoint for admin login
        endpoint = `${process.env.REACT_APP_API_URL}/admin/login`;
      }
      const response = await axios.post(endpoint, formData); // Use the appropriate endpoint
      const { token } = response.data;
      // Store token in localStorage
      localStorage.setItem('token', token); 
      if (userType === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate(`/user-dashboard/${formData.username}`);
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>{userType === 'admin' ? 'Admin Login' : 'User Login'}</h2>
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
        {userType === 'admin' && ( // Display passwordKey input only for admin login
          <div>
            <label htmlFor="passwordKey">Admin Password Key:</label>
            <input 
              type="password" 
              id="passwordKey" 
              name="passwordKey" 
              value={formData.passwordKey} 
              onChange={handleChange} 
              required 
            />
          </div>
        )}
        {error && <p>{error}</p>} {/* Display error message if login fails */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
