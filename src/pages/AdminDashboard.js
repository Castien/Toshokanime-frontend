import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logout functionality
        // Clear any user authentication tokens or session data
        // Navigate the user to the login page
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
