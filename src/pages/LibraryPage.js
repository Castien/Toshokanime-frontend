import React, { useState, useEffect } from 'react';

function LibraryPage() {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        const apiUrl = "http://localhost:9001/api/media";
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMediaData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div className="main-library-container">
            <h2>Toshokanime Media Library</h2>
            <div id="media-cards" className="media-cards">
                {mediaData.map(media => (
                    <div className="media-card" key={media._id}>
                        <h3>{media.title}</h3>
                        <p>Type: {media.type}</p>
                        <p>Volume Subtitle: {media.volumeSubtitle}</p>
                        <p>Format: {media.format}</p>
                        <p>Studios: {media.studios.join(', ')}</p>
                        <p>Release Date: {new Date(media.releaseDate).toLocaleDateString()}</p>
                        <p>UPC/ISBN: {media.upcIsbn}</p>
                        <a href={`/media/${media._id}`}>View Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LibraryPage;
