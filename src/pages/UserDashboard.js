import React from 'react';
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MediaLibrary from './MainLibrary';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear any user authentication tokens or session data
    // navigate the user to the login page
    // '/login' with the actual URL of login page
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to User Dashboard</h2>
      {/* Add user dashboard content here */}
      <button onClick={handleLogout}>Logout</button>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/navbar">Navbar</Link>
            </li>
            <li>
              <Link to="/sidebar">Sidebar</Link>
            </li>
            <li>
              <Link to="/media-library">Media Library</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/media-library" element={<MediaLibrary />} />
        </Routes>
    </div>
  );
};

export default UserDashboard;
