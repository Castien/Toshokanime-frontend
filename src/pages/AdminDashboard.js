import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
// import { Switch, Route, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainLibrary from './MainLibrary';
import LibraryPage from './LibraryPage';
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
     // clear any user authentication tokens or session data
    // navigate the user to the login page
    // '/login' with the actual URL of login page
    navigate('/login');
  };

//   return (
//     <div>
//       <div style={{ marginBottom: "64px" }}>
//         <Navbar />
//       </div>

//       <div style={{ display: "flex" }}>
//         <div style={{ height: "940px", marginLeft: "10px", width: "14%", backgroundColor: "#635c5b" }}>
//           <Sidebar />
//         </div>
//         <div style={{ height: "940px", marginLeft: "10px", width: "80%" }}>
//           <Switch>
//             <Route path="admindash/:username/main-library" component={MainLibrary} exact />
//             {/* <Route path="userdash/my-library" component={MainLibrary} exact /> //placeholder */}
//           </Switch>
//         </div>
//       </div>
//     </div>
//   );
// };


  return (
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      {/* Add admin dashboard content here */}
      <Navbar />
      <Sidebar />
      <MainLibrary />
      <LibraryPage />
      <button onClick={handleLogout}>Logout</button>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/navbar">Navbar</Link>
            </li>
            <li>
              <Link to="/sidebar">Sidebar</Link>
            </li>
            <li>
              <Link to="/main-library">Main Library</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/main-library" element={<MainLibrary />} />
          <Route path="/lib" element={<LibraryPage />} />
        </Routes>
    </div>
  );
};

export default AdminDashboard;

