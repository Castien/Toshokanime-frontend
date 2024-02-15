import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
     // clear any user authentication tokens or session data
    // navigate the user to the login page
    // '/login' with the actual URL of login page
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      {/* Add admin dashboard content here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;

