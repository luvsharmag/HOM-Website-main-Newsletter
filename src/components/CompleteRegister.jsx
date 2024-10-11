import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import "./CompleteRegister.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { toast } from "react-toastify"; 
import { setDoc, doc } from "firebase/firestore";
import Footer from './Footer';
import {v4 as uuidv4} from "uuid";
import Navbar from "./Navbar";
import './CompleteRegister.css'

const CompleteRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(""); // Full Name Error State
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(""); // Company Name Error State
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [phoneNumberError, setPhoneNumberError] = useState(""); // Phone Number Error State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success,setSuccess] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      confirmPassword,
      phoneNumber,
      companyName

    })
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // if (!validatePassword(password)) {
    //   setPasswordError(
    //     "Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
    //   );
    //   return;
    // }

    const cleanedNumber = phoneNumber.replace(/\D/g, "");
    if (cleanedNumber.length !== 12 || !cleanedNumber.startsWith("91")) {
      setError(
        "Please enter a valid phone number with country code +91 followed by 10 digits."
      );
      return;
    }

    try {
      // await createUserWithEmailAndPassword(auth, email, password);
      // console.log(typeof number);
      const response = await fetch(
        "https://backend-dashboard-dsw0.onrender.com/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({          
            name: fullName,
            email: email,
            password: confirmPassword,
            company: companyName,
            number:phoneNumber,
          }),
        }
      );
      
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSuccess(true);
        toast.success("You have successfully registered! Please log in to continue.", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);  
        console.log("User registered successfully:", data);
      }else{
        throw new Error(data.message); // Throw an error with the message from the server
      }
      // Show toast notification
     

      // Redirect to login after a short delay
    
    } catch (error) {      
        setError(error.message);
        toast.error(
          error.message,
          { position: "bottom-center",autoClose: 3000, }
        );  
    }
  };

 

  return (
    <>
     <div className="navbar-container">
      <Navbar />
    </div>
    <div className ="Complete-register-page">
      <div className="complete-register-container">
        {/* Left Section */}
        <div className="left-section">
          <img className="complete-register-logo" src="logo.png" alt="logo" />
          <br />
          <h2>
            Login to access <br /> <span>Smart Campaigns</span>
          </h2>
          <p>Get 100+ influencers to boost your reach</p>
          <ul>
            <li>Guaranteed results on all your spends</li>
            <li>100k nano and micro Influencers</li>
            <li>ROI-focused campaigns</li>
          </ul>
          <img
            className="complete-register-background-image"
            src="model boy.svg"
            alt="background"
          />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Enter your details</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email ID"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                required
              />
              {fullNameError && <p className="error-message">{fullNameError}</p>} {/* Full Name Error Message */}
            </div>

            <div className="input-group">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                required
              />
              {companyNameError && <p className="error-message">{companyNameError}</p>} {/* Company Name Error Message */}
            </div>

            <div className="input-group">
  <input
    type="text"
    value={phoneNumber}
    onChange={(e) => {
      const value = e.target.value.startsWith("+91") ? e.target.value : "+91" + e.target.value;
      setPhoneNumber(value);
      // Removed validation here
    }} // Ensure +91 stays
    placeholder="Phone Number"
    required
  />
  {phoneNumberError && <p className="error-message">{phoneNumberError}</p>} {/* Phone Number Error Message */}
</div>


            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password-btn"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <p className="password-requirements">
              Passwords must contain at least 8 characters, including at least 1
              uppercase letter, 1 lowercase letter, 1 number, and 1 special
              character.
            </p>

            <div className="input-group">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </div>

            {error && <p className="error-message">{error}</p>}
            {passwordError && <p className="error-message">{passwordError}</p>}

            <button className="submit-button" type="submit">Register My Account</button>
          </form>

          <p>
            Already have an account? <a className="link-login" href="/login">Login</a>
          </p>
        </div>
      </div>
      </div>
      {/* Footer Section */}
      <Footer mode="light" />
     
    </>
  );
};

export default CompleteRegister;




























