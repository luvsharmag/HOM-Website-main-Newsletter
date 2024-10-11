import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./GoogleRegister.css";
import Navbar from "./Navbar";

const GoogleRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const googleUser = location.state; // Get googleUser from state
  const [additionalInfo, setAdditionalInfo] = useState({
    company: "",
    number: "+91",
    password: "",
  });

  const handleSubmitFinal = async (e) => {
    e.preventDefault();

    // Prepare data to send to backend
    const userData = {
      ...googleUser,
      company: additionalInfo.company,
      number: additionalInfo.number,
      password: additionalInfo.password,
    };

    try {
      const response = await fetch(
        "https://backend-dashboard-dsw0.onrender.com/api/v1/user/google/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setError(null);
        toast.success(data.message, {
          position: "top-center",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Navbar />

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8  p-6 pt-24 lg:p-10 text-black">
        <a href="/" className="rounded-lg bg-black p-4 lg:p-6">
          <img
            className="w-32 lg:w-40 mb-4"
            src="data:image/jpeg;base64,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"
            alt="Smart Campaigns Logo"
          />
        </a>
        <div className="text-left gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-700">
            Register to get a
            <br />
            <span className="text-4xl lg:text-5xl font-semibold text-yellow-500">
              FREE Campaign worth ₹10,000
            </span>
          </h2>
          <p className="text-base lg:text-lg">
            Experience our Smart Campaigns platform with a variety of features
            designed to help you grow your business.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-6 lg:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
        <form
          onSubmit={handleSubmitFinal}
          className="w-full max-w-sm p-6 lg:p-8 shadow-lg rounded-lg"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-gray-800">
            Complete Your Registration
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Company
            </label>
            <input
              type="text"
              required
              value={additionalInfo.company}
              onChange={(e) =>
                setAdditionalInfo({
                  ...additionalInfo,
                  company: e.target.value,
                })
              }
              className="border-none border-b-2 border-gray-300 p-2 lg:p-4 text-base w-full mb-6 bg-gray-100 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={additionalInfo.number}
              onChange={(e) =>
                setAdditionalInfo({ ...additionalInfo, number: e.target.value })
              }
              className="border-none border-b-2 border-gray-300 p-2 lg:p-4 text-base w-full mb-6 bg-gray-100 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={additionalInfo.password}
              onChange={(e) =>
                setAdditionalInfo({
                  ...additionalInfo,
                  password: e.target.value,
                })
              }
              className="border-none border-b-2 border-gray-300 p-2 lg:p-4 text-base w-full mb-6 bg-gray-100 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-lg p-3 w-full hover:bg-gray-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>

      <ToastContainer />
      
    </div>
  );
};

export default GoogleRegister;
