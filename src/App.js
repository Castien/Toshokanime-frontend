import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, MatchAllRoute } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import MainLibrary from './pages/MainLibrary';
import AuthPage from './pages/AuthPage';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import { AuthProvider } from './context/AuthContext.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthProvider> {/* Move AuthProvider here to wrap the entire App */}
      <Router>
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth" element={<AuthPage onLogin={() => setIsLoggedIn(true)} />} />

            {/* Protected routes */}
            {isLoggedIn ? (
              <>
                <Route path="/admindash/:username" element={<AdminDashboard />} />
                <Route path="/userdash/:username" element={<UserDashboard />} />
                <Route path="/media-library" element={<MainLibrary />} />
                <Route path="/" element={<Navigate to="/admindash" />} />
              </>
            ) : (
              <Route path="/" element={<Navigate to="/auth" />} />
              
            )}
            <Route path="*" element={<MatchAllRoute />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
