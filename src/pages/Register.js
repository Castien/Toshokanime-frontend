import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook to perform navigation

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminKey, setAdminKey] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(''); // State for success message
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = async (signE) => {
        signE.preventDefault();

        try {
            const apiUrl = "http://localhost:9001";
            const endpoint = `${apiUrl}/api/register`;
            const response = await axios.post(endpoint, {
                username,
                email,
                password,
                adminKey
            });
    
            // Display success message and redirect to login page after registration
            setSuccessMessage("Your account is created! Thank you!");
            setTimeout(() => {
                navigate("/login"); // Navigate to login page
            }, 3000); // Redirect after 3 seconds

            console.log(response.data);
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error(error);
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} name="name" onChange={(signE) => setUsername(signE.target.value)} id="username" placeholder="username" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(signE) => setEmail(signE.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(signE) => setPassword(signE.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="adminKey">admin access</label>
                <input type="password" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} id="adminKey" name="adminKey" placeholder="admin only" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    )
}

export default Register;
