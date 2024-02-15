import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext.js';

const MainLibrary = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [mainMedia, setMainMedia] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(25);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) return; // Exit early if not logged in
    
        const fetchMainMedia = async () => {
            try {
                const apiUrl = "http://localhost:9001";
                const endpoint = `${apiUrl}/api/media`;
                const response = await axios.get(endpoint);
                setMainMedia(response.data);
                setTotalPages(Math.ceil(response.data.length / perPage));
            } catch (error) {
                console.error('Error fetching main media:', error);
            }
        };
    
        fetchMainMedia();
    }, [isLoggedIn, perPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastMedia = currentPage * perPage;
    const indexOfFirstMedia = indexOfLastMedia - perPage;
    const currentMainMedia = mainMedia.slice(indexOfFirstMedia, indexOfLastMedia);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? (
        <div className="main-library-container">
            <h2>Main Media Library</h2>
            <ul>
                {currentMainMedia.map(media => (
                    <li key={media._id}>
                        <Link to={`/media/${media._id}`}>{media.title}</Link>
                    </li>
                ))}
            </ul>
            <nav>
                <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    ) : null; // Return null if not logged in
};

export default MainLibrary;
