// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MainEntry = () => {
//     const [mediaEntries, setMediaEntries] = useState([]);

//     useEffect(() => {
//         const fetchMediaEntries = async () => {
//             try {
//                 const response = await axios.get('http://localhost:9001/api/media');
//                 setMediaEntries(response.data);
//             } catch (error) {
//                 console.error('Error fetching media entries:', error);
//             }
//         };

//         fetchMediaEntries();
//     }, []);

//     return (
//         <div className="main-entry-container">
//             <h2>Main Media Entries</h2>
//             <div className="media-card-container">
//                 {mediaEntries.map(media => (
//                     <div key={media._id} className="media-card">
//                         <h3>{media.title}</h3>
//                         <p>Type: {media.type}</p>
//                         <p>Subtitle: {media.volumeSubtitle}</p>
//                         <p>Format: {media.format}</p>
//                         <p>Studios: {media.studios.join(', ')}</p>
//                         <p>Release Date: {media.releaseDate}</p>
//                         <p>UPC/ISBN: {media.upcIsbn}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MainEntry;
