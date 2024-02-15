import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import MainLibrary from "./pages/MainLibrary";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  useEffect(() => {
    // Set the default form to login when the component mounts
    setCurrentForm('login');
  }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        <Routes>           
          <Route path="/" element={<Navigate to="/login" />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/admindash/:username" element={<AdminDashboard />} />
          <Route path="/userdash/:username" element={<UserDashboard />} />
          <Route path="/main-library" element={<MainLibrary />} /> {/* Configure the route for MainLibrary component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
