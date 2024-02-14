// import Register from './Register';

// function App() {
//   return (
//     <main className='App'>
//       <Register />
//     </main>
//   )
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admindash/:username" element={<AdminDashboard />} />
          <Route path="/userdash/:username" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
