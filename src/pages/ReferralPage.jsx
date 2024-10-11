// import { useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

// const ReferralPage = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleEmailChange = (e) => setEmail(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/refer", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();
//       if (result.success) {
//         setMessage("Referral sent successfully! Thank you for sharing.");
//         setEmail(""); // Reset email input
//       } else {
//         setMessage("Failed to send referral. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="mx-24 mt-24 pt-10">
//         <h1 className="text-4xl font-bold">Refer a Friend</h1>
//         <p className="mt-4 text-lg">
//           Share the benefits of our services with your friends and family! When
//           they sign up using your referral link, you'll both enjoy exclusive
//           rewards.
//         </p>

//         {/* Referral Link Section */}
//         <h2 className="mt-8 text-2xl font-semibold">Your Referral Link</h2>
//         <div className="mt-2 flex items-center">
//           <input
//             type="text"
//             value={`${window.location.origin}/referral?code=HouseOfMarktech`}
//             readOnly
//             className="border-2 border-gray-300 rounded-md px-4 py-2 w-full"
//           />
//           <button
//             onClick={() =>
//               navigator.clipboard.writeText(
//                 `${window.location.origin}/referral?code=HouseOfMarktech`
//               )
//             }
//             className="ml-4 bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-900"
//           >
//             Copy Link
//           </button>
//         </div>

//         {/* Refer a Friend Section */}
//         <h2 className="mt-8 text-2xl font-semibold">Refer a Friend</h2>
//         <p className="mt-2 text-lg">
//           Enter your friend's email address below to send them a referral
//           invitation.
//         </p>
//         <form onSubmit={handleSubmit} className="mt-4">
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Friend's Email"
//             required
//             className="border-2 border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2"
//           />
//           <button
//             type="submit"
//             className="mt-4 bg-blue-700 text-white rounded-md px-8 py-2 hover:bg-blue-900"
//           >
//             Send Referral
//           </button>
//         </form>
//         {message && <p className="mt-4 text-green-600">{message}</p>}

//         {/* Rewards Section */}
//         <h2 className="mt-8 text-2xl font-semibold">Referral Rewards</h2>
//         <p className="mt-2 text-lg">
//           For each friend that signs up using your referral link, you will
//           receive:
//         </p>
//         <ul className="list-disc list-inside mt-2">
//           <li className="mt-1">10% off your next purchase.</li>
//           <li className="mt-1">Access to exclusive content.</li>
//           <li className="mt-1">Entry into a monthly prize draw.</li>
//         </ul>

//         {/* Testimonials Section */}
//         <h2 className="mt-8 text-2xl font-semibold">What Our Users Say</h2>
//         <div className="mt-4">
//           <blockquote className="border-l-4 border-blue-700 pl-4 italic">
//             "I shared my referral link with my friends and earned great rewards!
//             It’s a win-win!"
//             <cite className="block mt-2">— Jane D.</cite>
//           </blockquote>
//           <blockquote className="border-l-4 border-blue-700 pl-4 italic mt-4">
//             "The referral program is easy to use, and I love getting discounts!"
//             <cite className="block mt-2">— John S.</cite>
//           </blockquote>
//         </div>

//         {/* FAQs Section */}
//         <h2 className="mt-8 text-2xl font-semibold">
//           Frequently Asked Questions
//         </h2>
//         <div className="mt-4">
//           <h3 className="font-semibold">How does the referral program work?</h3>
//           <p className="mt-1">
//             You share your unique referral link with friends. When they sign up,
//             both of you receive rewards.
//           </p>

//           <h3 className="font-semibold mt-4">
//             Is there a limit to how many friends I can refer?
//           </h3>
//           <p className="mt-1">
//             No, there is no limit! The more friends you refer, the more rewards
//             you earn.
//           </p>

//           <h3 className="font-semibold mt-4">
//             When will I receive my rewards?
//           </h3>
//           <p className="mt-1">
//             Rewards are typically credited within 7 days after your friend makes
//             their first purchase.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ReferralPage;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReferralPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center text-black-600 py-10">
          Referral Program
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

export default ReferralPage;
