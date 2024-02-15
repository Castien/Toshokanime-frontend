import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext as named export

const MainLibrary = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [mainMedia, setMainMedia] = useState([]);
    const [error, setError] = useState(null); // State for handling errors
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) return; // Exit early if not logged in
        
        const fetchMainMedia = async () => {
            try {
                const apiUrl = "http://localhost:9001";
                const endpoint = `${apiUrl}/api/media`;
                const response = await axios.get(endpoint);
                setMainMedia(response.data);
            } catch (error) {
                console.error('Error fetching main media:', error);
                setError(error.message); // Set error state if request fails
            }
        };
        
        fetchMainMedia();
    }, [isLoggedIn]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="main-library-container">
            <h2>Main Media Library</h2>
            {error && <p>Error: {error}</p>} {/* Display error message if an error occurred */}
            <div className="media-cards">
                {mainMedia.map(media => (
                    <div key={media._id} className="media-card">
                        <h3>{media.title}</h3>
                        <p>Type: {media.type}</p>
                        <p>Volume Subtitle: {media.volumeSubtitle}</p>
                        <p>Format: {media.format}</p>
                        <p>Studios: {media.studios.join(', ')}</p>
                        <p>Release Date: {new Date(media.releaseDate).toLocaleDateString()}</p>
                        <p>UPC/ISBN: {media.upcIsbn}</p>
                        <Link to={`/media/${media._id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainLibrary;
