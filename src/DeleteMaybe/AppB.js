import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Login } from './components/Login';
import { Register } from './components/Register';
import AdminDashboard from '../components/AdminDashboard';
import UserDashboard from '../components/UserDashboard';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to /login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admindash/:username" element={<AdminDashboard user={user} />} /> {/* Pass user data */}
          <Route path="/userdash/:username" element={<UserDashboard user={user} />} /> {/* Pass user data */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
