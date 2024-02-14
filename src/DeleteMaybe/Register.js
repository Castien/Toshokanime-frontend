// import { useRef, useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router

// const Register = () => {
//     const userRef = useRef(); // Ref for username input
//     const errRef = useRef(); // Ref for error message

//     const [user, setUser] = useState(''); // State for username input value
//     const [validName, setValidName] = useState(true); // State for username validity
//     const [userFocus, setUserFocus] = useState(false); // State for username input focus

//     const [pwd, setPwd] = useState(''); // State for password input value
//     const [validPwd, setValidPwd] = useState(false); // State for password validity
//     const [pwdFocus, setPwdFocus] = useState(false); // State for password input focus

//     const [errMsg, setErrMsg] = useState(''); // State for error message
//     const [success, setSuccess] = useState(false); // State for registration success

//     useEffect(() => {
//         userRef.current.focus(); // Focus on username input when component mounts
//     }, [])

//     useEffect(() => {
//         // No length limits for username
//         setValidName(true);
//     }, [user])

//     useEffect(() => {
//         setValidPwd(pwd.length >= 8); // Check password validity (minimum length: 8 characters)
//     }, [pwd])

//     useEffect(() => {
//         setErrMsg(''); // Clear error message when username or password changes
//     }, [user, pwd])

//     const REGISTER_URL = 'https://example.com/register';

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission
//         if (!validName || !validPwd) {
//             setErrMsg("invalid entry"); // Show error message if inputs are invalid
//             return;
//         }
//         try {
//             const response = await axios.post(
//                 REGISTER_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             setSuccess(true); // Set success state to true if registration is successful
//             setUser(''); // Clear username input
//             setPwd(''); // Clear password input
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('no server response'); // Show error message for server response failure
//             } else if (err.response?.status === 409) {
//                 setErrMsg('username taken'); // Show error message if username is already taken
//             } else {
//                 setErrMsg('registration failed'); // Show error message for other registration failures
//             }
//             errRef.current.focus(); // Focus on error message
//         }
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>success!</h1>
//                     <p>
//                         <Link to="/">sign in</Link>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>register</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">
//                             username: {/* Label for username input */}
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                             aria-invalid={!validName ? "true" : "false"}
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}
//                         />
//                         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                             {/* You can add any instructions here if needed */}
//                         </p>


//                         <label htmlFor="password">
//                             password: {/* Label for password input */}
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={!validPwd ? "true" : "false"}
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             at least 8 characters. {/* Password length requirement */}
//                         </p>

//                         <button disabled={!validName || !validPwd}>sign up</button> {/* Submit button */}
//                     </form>
//                     <p>
//                         already registered?<br />
//                         <span className="line">
//                             <Link to="/">sign in</Link>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Register;