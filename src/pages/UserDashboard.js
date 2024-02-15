import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // logout functionality
        // clear any user authentication tokens or session data
        // navigate the user to the login page
        navigate('/login');
    };

    return (
        <div>
            <h2>Welcome to User Dashboard</h2>
            {/* Add user dashboard content here */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserDashboard;
