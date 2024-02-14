// components/SignUpPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordKey: ''
  });

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
      const response = await axios.post('/api/signup', formData);
      const { token, isAdmin } = response.data;
      localStorage.setItem('token', token);
      if (isAdmin) {
        navigate.push('/admin-dashboard');
      } else {
        navigate.push('/user-dashboard');
      }
    } catch (error) {
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Username" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" required onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="passwordKey">Admin Password Key:</label>
          <input type="password" id="passwordKey" name="passwordKey" placeholder="Admin Only" onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
