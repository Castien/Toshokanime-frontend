import React from 'react';
import { Link, Routes, Route} from "react-router-dom";
// import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MainLibrary from './MainLibrary';
import { useNavigate } from 'react-router';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear any user authentication tokens or session data
    // navigate the user to the login page
    // '/login' with the actual URL of login page
    navigate('/login');
  };

//   return (
//     <div>
//       <h2>Welcome to User Dashboard</h2>
//       {/* Add user dashboard content here */}
//       <button onClick={handleLogout}>Logout</button>
//       <div style={{ marginBottom: "64px" }}>
//         <Navbar />
//       </div>

//       <div style={{ display: "flex" }}>
//         <div style={{ height: "940px", marginLeft: "10px", width: "14%", backgroundColor: "#635c5b" }}>
//           <Sidebar />
//         </div>
//         <div style={{ height: "940px", marginLeft: "10px", width: "80%" }}>
//         <Routes>
//             <Route path="userdash/:username/main-library" component={MainLibrary} exact />
//             {/* <Route path="userdash/my-library" component={MainLibrary} exact /> //placeholder */}
//         </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };
  return (
    <div>
      <h2>Welcome to User Dashboard</h2>
      {/* Add user dashboard content here */}
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
      </Routes>
    </div>
  );
};

export default UserDashboard;
