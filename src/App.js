
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing your durability...</h1>
      <form action="/api/login" method="post">
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <a href="signup.html">Sign up here!</a></p>
    </div>
  );
}

export default App;
