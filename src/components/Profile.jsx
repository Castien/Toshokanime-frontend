import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h3>Profile Information</h3>
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Bio: {user.bio}</p>
          <p>Profile Image: <img src={user.profileImage} alt="Profile" /></p>
        </>
      )}
    </div>
  );
};

export default Profile;

