import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css"; // Custom CSS

// import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import TermsAndConditions from "./TermsAndConditions";
// import PrivacyPolicy from "./PrivacyPolicy";

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  // const [additionalInfo, setAdditionalInfo] = useState({
  //   company: "",
  //   number: "",
  //   password: "",
  // });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("Email submitted:", email);
    navigate("/completeregister", { state: { email } });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      console.log(idToken);

      const googleUser = {
        name: result.user.displayName,
        email: result.user.email,
        idToken: idToken,
      };

      const response = await fetch(
        "https://backend-dashboard-dsw0.onrender.com/api/v1/user/google/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(googleUser),
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.exists) {
        setUser(googleUser);
        // setIsExistingUser(true);
        navigate("/home");
      } else {
        setUser(googleUser);
        // setIsExistingUser(false);
        navigate("/googleRegister", { state: { googleUser } });
        // setShowAdditionalForm(true);
      }
    } catch (error) {
      console.error("Error during sign-in", error);
    }
  };

  return (
    <>
      <div className="register-page">
        <Navbar mode="light" />
        <div className=" flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 pt-20 lg:p-8 gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-8  p-6 lg:p-10 text-black">
            <a href="/" className="rounded-lg bg-black p-4 lg:p-6">
              <img
                className="w-28 lg:w-40 mb-4"
                src="data:image/jpeg;base64,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"
                alt="Smart Campaigns Logo"
              />
            </a>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-700">
                  Register to get a <br />
                  <span className="text-3xl lg:text-4xl font-semibold text-yellow-500">
                    FREE Campaign worth ₹10,000
                  </span>
                </h2>
                <p className="text-base lg:text-lg">
                  Experience our Smart Campaigns platform with a variety of
                  features designed to help you grow your business.
                </p>
              </div>
              <div className="w-full lg:w-auto">
                <img
                  className="w-[40vw] lg:w-[20vw] max-w-md h-auto"
                  src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fauth_modal_boy.svg?alt=media&token=cb98e0da-ec4b-4483-854d-db7abf6f71db"
                  alt="Background"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
              <div className="google-login-container mb-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition-all"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fgoogle_icon.svg?alt=media&token=a6561d03-9cc8-4c26-903d-c796c2d448ec"
                    alt="Google Logo"
                  />
                  Continue with Google
                </button>
              </div>

              <div className="divider text-center my-4">or</div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="field">
                  <label className="block text-sm font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  className="w-full bg-yellow-500 text-white font-semibold p-3 rounded-lg hover:bg-yellow-600 transition-all"
                  type="submit"
                >
                  Continue
                </button>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="terms text-xs text-gray-600">
                  By proceeding, I agree to{" "}
                  <a
                    href="/TermsAndConditions"
                    className="underline text-blue-500 hover:text-blue-700"
                  >
                    Terms & Condition
                  </a>
                  ,{" "}
                  <a
                    href="/PrivacyPolicy"
                    className="underline text-blue-500 hover:text-blue-700"
                  >
                    Privacy Policy of HOM
                  </a>
                  ,{" "}
                  <a
                    href="http://www.google.com/policies/privacy"
                    className="underline text-blue-500 hover:text-blue-700"
                  >
                    Google Privacy Policy
                  </a>
                  .
                </div>

                <p className="already-account text-center text-sm">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer mode="light" />
      </div>
    </>
  );
};

export default Register;
