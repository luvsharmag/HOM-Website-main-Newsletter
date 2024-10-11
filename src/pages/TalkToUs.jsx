import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const TalkToUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    workEmail: "",
    brandWebsite: "",
    campaignBudget: "",
    campaignStartDate: "",
    howDidYouHear: "",
    campaignObjective: "",
  });

  const [errors, setErrors] = useState({}); // State for error messages

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // Adjust this regex based on your country's phone format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be a 10-digit number.";
    }
    if (!formData.workEmail) {
      newErrors.workEmail = "Work Email is required.";
    } else if (!emailRegex.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address.";
    }
    if (!formData.brandWebsite) {
      newErrors.brandWebsite = "Brand Website Link is required.";
    } else if (!urlRegex.test(formData.brandWebsite)) {
      newErrors.brandWebsite = "Please enter a valid URL.";
    }
    if (!formData.campaignBudget) {
      newErrors.campaignBudget = "Campaign Budget is required.";
    }
    if (!formData.campaignStartDate) {
      newErrors.campaignStartDate = "Campaign Start Date is required.";
    }
    if (!formData.howDidYouHear) {
      newErrors.howDidYouHear = "Please select how you heard about us.";
    }
    if (!formData.campaignObjective) {
      newErrors.campaignObjective = "Campaign Objective is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message for the changed field
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic, e.g., send data to the server
      console.log("Form Data Submitted:", formData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row bg-white">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 h-[150vh] overflow-hidden">
          <div className="py-24 flex flex-col lg:flex-row bg-white">
            <div className="w-full lg:w-3/5 h-auto lg:h-screen overflow-hidden flex flex-col justify-center relative">
              <div className="flex flex-col items-start justify-center p-8 h-full">
                <div className="text-left mb-8">
                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                    You’ll only hear from <br />
                    <span className="text-4xl lg:text-6xl">
                      us when it matters.
                    </span>
                  </h1>
                  <p className="mt-4 text-base lg:text-lg text-gray-700">
                    We won’t bombard you with requests <br />
                    to become a member. <br /> You’ll only get an email <br />{" "}
                    when we’ve got a new intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full p-12 lg:w-2/5 h-auto lg:h-screen flex items-center justify-end">
              <img
                src="https://www.rouserlab.com/wp-content/themes/rouser/dist/c1179934d3dd04d4199545222c0f4288.svg"
                alt="Ear"
                className="w-1/2 h-auto lg:w-full lg:h-full object-contain"
              />
            </div>
          </div>

          <div className="p-8 px-20 bg-lime-400 flex items-center">
            <p className="text-black text-lg lg:text-xl font-normal">
              We’re growing a gang of people who care enough to help our
              interventions spread like an unseasonal forest fire. Sign up to
              get them as they drop and help wake up the world.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-yellow-50 rounded-lg p-8 shadow-lg w-full lg:w-1/2 mt-8 pt-32 px-20 lg:mt-0">
          <h2 className="text-center font-bold text-2xl text-gray-700 mb-5">
            Talk to our Experts
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              required
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}

            <input
              type="email"
              name="workEmail"
              placeholder="Work Email*"
              required
              value={formData.workEmail}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.workEmail ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            />
            {errors.workEmail && (
              <p className="text-red-500 text-sm">{errors.workEmail}</p>
            )}

            <input
              type="url"
              name="brandWebsite"
              placeholder="Brand Website Link* - https://www.example.com"
              required
              value={formData.brandWebsite}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.brandWebsite ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            />
            {errors.brandWebsite && (
              <p className="text-red-500 text-sm">{errors.brandWebsite}</p>
            )}

            <select
              name="campaignBudget"
              required
              value={formData.campaignBudget}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.campaignBudget ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            >
              <option value="">Campaign Budget (₹)*</option>
              <option value="300000">Less than 3 Lakhs</option>
              <option value="400000">3-5 Lakhs</option>
              <option value="700000">5-10 Lakhs</option>
              <option value="1100000">Over 10 Lakhs</option>
            </select>
            {errors.campaignBudget && (
              <p className="text-red-500 text-sm">{errors.campaignBudget}</p>
            )}

            <select
              name="campaignStartDate"
              required
              value={formData.campaignStartDate}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.campaignStartDate ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            >
              <option value="">Campaign Start Date*</option>
              <option value="Just exploring">Just exploring</option>
              <option value="Next 1 Month">Next 1 Month</option>
              <option value="Next 3 Months">Next 3 Months</option>
              <option value="More than 3 Months">More than 3 Months</option>
            </select>
            {errors.campaignStartDate && (
              <p className="text-red-500 text-sm">{errors.campaignStartDate}</p>
            )}

            <select
              name="howDidYouHear"
              required
              value={formData.howDidYouHear}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.howDidYouHear ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            >
              <option value="">How did you hear about us?*</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Website">Website</option>
              <option value="Other">Other</option>
            </select>
            {errors.howDidYouHear && (
              <p className="text-red-500 text-sm">{errors.howDidYouHear}</p>
            )}

            <textarea
              name="campaignObjective"
              placeholder="Campaign Objective*"
              required
              value={formData.campaignObjective}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${
                errors.campaignObjective ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200`}
            />
            {errors.campaignObjective && (
              <p className="text-red-500 text-sm">{errors.campaignObjective}</p>
            )}

            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-md hover:bg-yellow-500 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TalkToUs;
