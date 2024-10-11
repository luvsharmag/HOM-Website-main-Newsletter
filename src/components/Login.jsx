// import  { useEffect, useState } from "react";
// // import './Login.css';
// import { useNavigate } from "react-router-dom";

// import "./Login.css";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   getAuth,
//   signInWithPopup,
//   // GoogleAuthProvider,
//   // signInWithEmailAndPassword,
// } from "firebase/auth";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// import { googleProvider } from "./firebase";
// import axios from "axios";

// const Login = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   // const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();
//   const auth = getAuth();
//   // const provider = new GoogleAuthProvider();

//   const [user, setUser] = useState(null);
//   // Load saved email and password if "Remember Me" was checked
//   useEffect(() => {
//     const savedEmail = localStorage.getItem("savedEmail");
//     const savedPassword = localStorage.getItem("savedPassword");
//     if (savedEmail) {
//       setEmail(savedEmail);
//     }
//     if (savedPassword) {
//       setPassword(savedPassword);
//     }
//   }, []);

//   //for standard login
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     try {
//       const response = await axios.post(
//         "https://backend-dashboard-dsw0.onrender.com/api/v1/user/login",
//         {
//           email,
//           password,
//         }
//       );
//       console.log("Login successful:", response.data);

//       setSuccessMessage(response.data.message);
//       toast.success(response.data.message, {
//         position: "top-center",
//         autoClose: 3000,
//       });

//       setTimeout(() => {
//         navigate("/home");
//       }, 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//       console.error("Login error:", err);
//     }
//   };

//   const handleGoogleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const idToken = await result.user.getIdToken();

//       const googleUser = {
//         name: result.user.displayName,
//         email: result.user.email,
//         idToken: idToken,
//       };

//       //replace http://localhost:5000 by https://backend-dashboard-dsw0.onrender.com
//       const response = await fetch(
//         "https://backend-dashboard-dsw0.onrender.com/api/v1/user/google/check",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ idToken }),
//         }
//       );

//       const data = await response.json();
//       console.log(data);
//       if (data.exists) {
//         setUser(googleUser);
//         // setIsExistingUser(true);
//         toast.success(`welcome, ${data.username}`, {
//           position: "top-center",
//           autoClose: 3000,
//         });
//         setInterval(() => {
//           navigate("/home");
//         }, 2000);
//       } else {
//         setUser(googleUser);
//         // setIsExistingUser(false);
//         navigate("/googleRegister", { state: googleUser });
//         // setShowAdditionalForm(true);
//       }
//     } catch (error) {
//       console.error("Error during sign-in", error);
//     }
//   };

//   const handleCheckboxChange = () => {
//     setRememberMe(!rememberMe);
//   };

//   return (
//     <div className="login-page">
//       <Navbar mode="light" />
//       <div className="login-container flex flex-col lg:flex-row justify-center items-center p-4">
//         <div className="login-content w-1/2 lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-8 bg-blue-200 p-6 lg:p-10 text-black">
//           {successMessage && (
//             <div className="success-message">{successMessage}</div>
//           )}
//           {!successMessage && (
//             <>
//               <a href="/" className="rounded-lg bg-black p-6">
//                 <img
//                   className="w-32 lg:w-40 mb-4"
//                   src="data:image/jpeg;base64,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"
//                   alt="Smart Campaigns Logo"
//                 />
//               </a>
//               <div className="text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start">
//                 <div className="mb-6 lg:mb-0">
//                   <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-700">
//                     Login to access
//                     <br />
//                     <span className="text-4xl lg:text-5xl font-semibold text-yellow-500">
//                       Smart campaigns
//                     </span>
//                   </h2>
//                   <ul className="text-sm lg:text-lg space-y-2">
//                     <li>
//                       <i className="bi bi-check2"></i>
//                       Guaranteed results on all your spends
//                     </li>
//                     <li>
//                       <i className="bi bi-check2"></i>
//                       100k nano and micro Influencers
//                     </li>
//                     <li>
//                       <i className="bi bi-check2"></i>
//                       ROI-focused campaigns
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="ml-0 lg:ml-6 mt-6 lg:mt-0">
//                   <img
//                     className="w-40 lg:w-[20vw] max-w-sm h-auto"
//                     src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fauth_modal_boy.svg?alt=media&token=cb98e0da-ec4b-4483-854d-db7abf6f71db"
//                     alt="Background"
//                   />
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         <div className=" lg:w-1/2 mt-6 lg:mt-0">
//           <div className=" bg-white p-6 lg:p-10 rounded-lg shadow-md">
//             <button
//               onClick={handleGoogleSignIn}
//               className="google-login-btn flex items-center justify-center w-full p-4 bg-gray-100 rounded-lg"
//             >
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fgoogle_icon.svg?alt=media&token=a6561d03-9cc8-4c26-903d-c796c2d448ec"
//                 alt="Google logo"
//                 className="w-6 mr-3"
//               />
//               Continue with Google
//             </button>
//             <div className="divider my-4">or</div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="input-group">
//                 <label className="block mb-2 text-sm font-medium">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full p-2 border-b-2 border-gray-300 focus:outline-none"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="input-group">
//                 <label className="block mb-2 text-sm font-medium">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full p-2 border-b-2 border-gray-300 focus:outline-none"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="flex justify-between items-center text-sm">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="rememberMe"
//                     checked={rememberMe}
//                     onChange={handleCheckboxChange}
//                     className="mr-2"
//                   />
//                   <label htmlFor="rememberMe">Remember me</label>
//                 </div>
//                 <a href="/forgotpassword" className="text-blue-500">
//                   Forgot password?
//                 </a>
//               </div>
//               <button
//                 type="submit"
//                 className="login-button w-full bg-blue-500 text-white p-3 rounded-lg"
//               >
//                 Continue
//               </button>

//               {error && <p className="error-message text-red-500">{error}</p>}

//               <p className="text-center">
//                 Don&apos;t have an account?{" "}
//                 <a href="/register" className="register-link text-blue-500">
//                   Register
//                 </a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Login;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center text-black-600 py-10">
          LOGIN and SIGNUP
        </h1>
        <div className="relative mb-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-center text-blue-600 animate-bounce">
            COMING SOON
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 opacity-50 rounded-lg transform scale-110 animate-pulse" />
        </div>
        <p className="text-lg sm:text-xl text-center text-gray-700 mb-6 px-4 sm:px-0">
          We're working hard to bring this feature to you! Stay tuned for
          updates and exciting new offerings that will enhance your experience.
        </p>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-4">
          In the meantime, check out our other features or contact us if you
          have any questions!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
