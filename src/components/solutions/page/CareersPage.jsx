// import { useState } from "react";
// import Navbar from "../../Navbar";
// import Footer from "../../Footer";

// const CareersPage = () => {
//   const [activeTab, setActiveTab] = useState("fulltime");

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto py-10 px-4 pt-36 lg:px-0 min-h-screen flex flex-col items-center bg-gray-100">
//         <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           Join Our Team
//         </h1>

//         {/* Company Overview */}
//         <div className="max-w-2xl text-center mb-14">
//           <h2 className="text-2xl font-semibold mb-4">Why Work with Us?</h2>
//           <p className="text-gray-700">
//             We are committed to fostering a collaborative and inclusive
//             workplace. Our team members enjoy career growth opportunities,
//             flexible working hours, and numerous perks.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex space-x-4 mb-14">
//           <button
//             className={`px-6 py-3 rounded-none transition-all duration-300 ${
//               activeTab === "fulltime"
//                 ? "bg-blue-700 text-white"
//                 : "bg-white text-blue-700 border border-blue-700"
//             }`}
//             onClick={() => setActiveTab("fulltime")}
//           >
//             Full-Time Positions
//           </button>
//           <button
//             className={`px-6 py-3 rounded-none transition-all duration-300 ${
//               activeTab === "internship"
//                 ? "bg-blue-700 text-white"
//                 : "bg-white text-blue-700 border border-blue-700"
//             }`}
//             onClick={() => setActiveTab("internship")}
//           >
//             Internships
//           </button>
//         </div>

//         {/* Job Listings Section */}
//         <div className="w-full max-w-3xl mb-14">
//           <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//             {activeTab === "fulltime" ? "Full-Time Positions" : "Internships"}
//           </h2>
//           <JobListings type={activeTab} />
//         </div>

//         {/* Application Process */}
//         <div className="bg-white p-8 max-w-2xl w-full mx-auto shadow-md border border-gray-300 mb-14">
//           <h2 className="text-2xl font-semibold text-center mb-4">
//             Our Hiring Process
//           </h2>
//           <p className="text-gray-700 text-center mb-4">
//             Our process is designed to be seamless and transparent, ensuring a
//             great candidate experience.
//           </p>
//           <ul className="text-gray-600 space-y-2 list-disc list-inside">
//             <li>Step 1: Application Review</li>
//             <li>Step 2: Initial Interview</li>
//             <li>Step 3: Technical Assessment</li>
//             <li>Step 4: Final Interview</li>
//           </ul>
//         </div>

//         {/* FAQs */}
//         <div className="bg-gray-50 p-8 max-w-2xl w-full mx-auto shadow-md border border-gray-300 mb-14">
//           <h2 className="text-2xl font-semibold text-center mb-4">
//             Frequently Asked Questions
//           </h2>
//           <FAQ />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // Job Listings Component
// const JobListings = ({ type }) => {
//   const jobListings = {
//     fulltime: [
//       {
//         title: "Software Engineer",
//         description: "Build and scale our web applications.",
//         location: "Remote",
//       },
//       {
//         title: "Product Designer",
//         description: "Design user-friendly interfaces.",
//         location: "San Francisco, CA",
//       },
//     ],
//     internship: [
//       {
//         title: "Marketing Intern",
//         description: "Assist with digital marketing campaigns.",
//         location: "Remote",
//       },
//       {
//         title: "HR Intern",
//         description: "Support our recruiting efforts.",
//         location: "New York, NY",
//       },
//     ],
//   };

//   return (
//     <div className="space-y-8">
//       {jobListings[type].map((job, index) => (
//         <div
//           key={index}
//           className="bg-white p-6 shadow-md border border-gray-300"
//         >
//           <h3 className="text-xl font-semibold text-blue-700 mb-2">
//             {job.title}
//           </h3>
//           <p className="text-gray-600 mb-2">{job.description}</p>
//           <p className="text-gray-500 mb-4">Location: {job.location}</p>
//           <button className="bg-blue-700 text-white px-4 py-2 rounded-none hover:bg-blue-600">
//             Apply Now
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// // FAQ Component
// const FAQ = () => (
//   <div className="space-y-4">
//     <details className="bg-white p-4 shadow-md border border-gray-300">
//       <summary className="font-semibold text-blue-700 cursor-pointer">
//         What is the application process like?
//       </summary>
//       <p className="text-gray-600 mt-2">
//         Our application process typically involves an initial review,
//         interviews, and assessments based on the role.
//       </p>
//     </details>
//     <details className="bg-white p-4 shadow-md border border-gray-300">
//       <summary className="font-semibold text-blue-700 cursor-pointer">
//         How can I prepare for the interview?
//       </summary>
//       <p className="text-gray-600 mt-2">
//         We recommend researching our company, practicing typical interview
//         questions, and preparing to discuss your experiences.
//       </p>
//     </details>
//   </div>
// );

// export default CareersPage;





import { useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("fulltime");

  // FAQ Component
  const FAQ = () => (
    <div className="space-y-4">
      <details className="bg-white p-4 shadow-md border border-gray-300">
        <summary className="font-semibold text-blue-700 cursor-pointer">
          What is the application process like?
        </summary>
        <p className="text-gray-600 mt-2">
          Our application process typically involves an initial review,
          interviews, and assessments based on the role.
        </p>
      </details>
      <details className="bg-white p-4 shadow-md border border-gray-300">
        <summary className="font-semibold text-blue-700 cursor-pointer">
          How can I prepare for the interview?
        </summary>
        <p className="text-gray-600 mt-2">
          We recommend researching our company, practicing typical interview
          questions, and preparing to discuss your experiences.
        </p>
      </details>
    </div>
  );

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10 px-4 pt-36 lg:px-0 min-h-screen flex flex-col items-center ">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Join Our Team
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Were always on the lookout for talented individuals to join our
          growing team. Explore our current job openings and find out how you
          can make a difference.
        </p>

        {/* Company Overview */}
        <div className="max-w-2xl text-center mb-14">
          <h2 className="text-2xl font-semibold mb-4">Why Work with Us?</h2>
          <p className="text-gray-700">
            We are committed to fostering a collaborative and inclusive
            workplace. Our team members enjoy career growth opportunities,
            flexible working hours, and numerous perks.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-14">
          <button
            className={`px-6 py-3 rounded-none transition-all duration-300 ${
              activeTab === "fulltime"
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border border-blue-700"
            }`}
            onClick={() => setActiveTab("fulltime")}
          >
            Full-Time Job
          </button>
          <button
            className={`px-6 py-3 rounded-none transition-all duration-300 ${
              activeTab === "internship"
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700 border border-blue-700"
            }`}
            onClick={() => setActiveTab("internship")}
          >
            Internship
          </button>
        </div>

        {/* Render respective form */}
        {activeTab === "fulltime" ? <FullTimeForm /> : <InternshipForm />}
      </div>
      {/* Application Process */}
      <div className="bg-white p-8 max-w-2xl w-full mx-auto shadow-md border border-gray-300 mb-14">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Our Hiring Process
        </h2>
        <p className="text-gray-700 text-center mb-4">
          Our process is designed to be seamless and transparent, ensuring a
          great candidate experience.
        </p>
        <ul className="text-gray-600 space-y-2 list-disc list-inside">
          <li>Step 1: Application Review</li>
          <li>Step 2: Initial Interview</li>
          <li>Step 3: Technical Assessment</li>
          <li>Step 4: Final Interview</li>
        </ul>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50 p-8 max-w-2xl w-full mx-auto shadow-md border border-gray-300 mb-14">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

const FullTimeForm = () => (
  <form className="bg-white p-8 max-w-lg w-full mx-auto shadow-md border border-gray-300">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Full-Time Job Application
    </h2>

    <label className="block mb-2 text-gray-600 font-medium">Full Name</label>
    <input
      type="text"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Email</label>
    <input
      type="email"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Phone Number</label>
    <input
      type="tel"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">LinkedIn Profile</label>
    <input
      type="url"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Position</label>
    <input
      type="text"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Available Start Date</label>
    <input
      type="date"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Cover Letter</label>
    <textarea
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      rows="4"
      required
    ></textarea>

    <label className="block mb-2 text-gray-600 font-medium">Resume (PDF only)</label>
    <input
      type="file"
      accept="application/pdf"
      className="w-full px-4 py-3 border border-gray-300 mb-6 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <button
      type="submit"
      className="w-full bg-blue-700 text-white py-3 font-semibold transition-all duration-300 rounded-none hover:bg-blue-600"
    >
      Submit Application
    </button>
  </form>
);

const InternshipForm = () => (
  <form className="bg-white p-8 max-w-lg w-full mx-auto shadow-md border border-gray-300">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Internship Application
    </h2>

    <label className="block mb-2 text-gray-600 font-medium">Full Name</label>
    <input
      type="text"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Email</label>
    <input
      type="email"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Phone Number</label>
    <input
      type="tel"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">LinkedIn Profile</label>
    <input
      type="url"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Internship Position</label>
    <input
      type="text"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Expected Duration (months)</label>
    <input
      type="number"
      min="1"
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <label className="block mb-2 text-gray-600 font-medium">Cover Letter</label>
    <textarea
      className="w-full px-4 py-3 border border-gray-300 mb-4 rounded-none focus:outline-none focus:border-blue-700"
      rows="4"
      required
    ></textarea>

    <label className="block mb-2 text-gray-600 font-medium">Resume (PDF only)</label>
    <input
      type="file"
      accept="application/pdf"
      className="w-full px-4 py-3 border border-gray-300 mb-6 rounded-none focus:outline-none focus:border-blue-700"
      required
    />

    <button
      type="submit"
      className="w-full bg-blue-700 text-white py-3 font-semibold transition-all duration-300 rounded-none hover:bg-blue-600"
    >
      Submit Application
    </button>
  </form>
);

export default CareersPage;
