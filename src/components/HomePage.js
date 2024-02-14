import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <form action="/login" method="post">
        <input name="username" placeholder="Username" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here!</Link></p>
    </div>
  );
};

export default HomePage;
