// import React, { useState } from "react";
// import axios from "axios";

// export const Register = (props) => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [adminKey, setAdminKey] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//             const response = await axios.post('/api/register', {
//                 username,
//                 email,
//                 password,
//                 adminKey
//             });

//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <label htmlFor="username">username</label>
//                 <input value={username} name="name" onChange={(signE) => setUsername(signE.target.value)} id="username" placeholder="username" />
//                 <label htmlFor="email">email</label>
//                 <input value={email} onChange={(signE) => setEmail(signE.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">password</label>
//                 <input value={password} onChange={(signE) => setPassword(signE.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <label htmlFor="adminKey">admin access</label>
//                 <input type="password" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} id="adminKey" name="adminKey" placeholder="admin only" />
//                 <button type="submit">Register</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//         </div>
//     )
// }
