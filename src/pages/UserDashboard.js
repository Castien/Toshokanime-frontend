import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

      <ul>
        {/* Add a link to MainLibrary.js */}
        <li>
          <Link to="/main-library">Main Library</Link>
        </li>
        {/* Add other links as needed */}
      </ul>
    </div>
  );
};

export default UserDashboard;
