import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    console.log(process.env.REACT_APP_API_URL);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let endpoint = `${process.env.REACT_APP_API_URL}/api/login`;
            const response = await axios.post(endpoint, { username, password });

            if (response.status === 200) {
                const isAdmin = response.data.isAdmin;
                if (isAdmin) {
                    navigate(`/admindash/${username}`);
                } else {
                    navigate(`/userdash/${username}`);
                }
            } else {
                setError('Invalid response from server');
            }
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(loginE) => setUsername(loginE.target.value)} id="username" placeholder="username" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(loginE) => setPassword(loginE.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    )
}
