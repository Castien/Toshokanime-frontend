import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileEdit = ({ username }) => {
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    profileImage: ''
  });

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`/api/user/profile/${username}`);
        const { username, bio, profileImage } = response.data;
        setFormData({ username, bio, profileImage });
      } catch (error) {
        console.error('Error fetching user profile data:', error);
      }
    };

    fetchProfileData();
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = "http://localhost:9001";
      const endpoint = `${apiUrl}/api/user/profile/${username}`;
  
      const response = await axios.put(endpoint, formData); // Use PUT request for updating profile
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating user profile:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="profileImage">Profile Image URL:</label>
        <input
          type="text"
          id="profileImage"
          name="profileImage"
          value={formData.profileImage}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileEdit;
