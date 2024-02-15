import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { currentUser } = useSelector(state => state.userLoginReducer);

    return (
        <div className="sidebar">
            <div className="user-profile">
                {/* Display user profile image */}
                {currentUser && currentUser.user.profileImage && (
                    <img src={currentUser.user.profileImage} alt="Profile" className="profile-image" />
                )}
                {/* Display username */}
                {currentUser && (
                    <h2 className="username">{currentUser.user.username}</h2>
                )}
                {/* Display biography */}
                {currentUser && currentUser.user.biography && (
                    <p className="biography">{currentUser.user.biography}</p>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
