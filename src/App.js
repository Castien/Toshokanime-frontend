import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignUp} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
