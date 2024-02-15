// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const { currentUser } = useSelector(state => state.userLoginReducer);

//     return (
//         <nav className="shadow bg-white rounded navbar fixed-top navbar-white" style={{ height: "60px" }}>
//             <div className="container-fluid">
//                 <Link to="/dashboard" className="navbar-brand" style={{ fontFamily: "oswald", fontSize: "30px", marginTop: "-4px" }}>
//                     Koshokanime Library
//                 </Link>
//                 {currentUser && (
//                     <p style={{ textAlign: "center", marginRight: "10%", fontFamily: "sans-serif", fontSize: "24px" }}>
//                         <i className="far fa-user"></i> {currentUser.user.name.split(" ")[0]}
//                     </p>
//                 )}
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <Link to="/main-library" className="nav-link">
//                             Main Library
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/my-library" className="nav-link">
//                             My Library
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to="/profile" className="nav-link">
//                             Profile
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
