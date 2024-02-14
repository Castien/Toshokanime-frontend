import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import axios from 'axios';

const AdminDashboard = ({ user }) => { // Receive user prop as an argument
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    const handleLogout = () => {
        // logout functionality
        // clear any user authentication tokens or session data
        // navigate the user to the login page
        navigate('/login');
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`/api/user/${user.username}`);
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        if (user) {
            fetchUserProfile();
        }
    }, [user]);

    return (
        <div>
            <h2>Welcome to Admin Dashboard</h2>
            {/* Add admin dashboard content here */}
            <button onClick={handleLogout}>Logout</button>
            {/* Render Profile component and pass user data */}
            {profile && <Profile profile={profile} />}
        </div>
    );
};

export default AdminDashboard;
