import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", number: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://sendemail-phi.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log("Email sent successfully:", result);
        alert("Proposal sent to your email!");
      } else {
        console.error("Failed to send email:", result.message);
        alert("Failed to send the proposal. Please try again.");
      }
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="bg-gray-800 text-white rounded p-6 w-full max-w-md shadow-lg">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Request a FREE Proposal Now!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-gray-300 mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Number
              </label>
              <input
                type="number"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
              onClick={onClose}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add prop types validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Validate that isOpen is a boolean
  onClose: PropTypes.func.isRequired, // Validate that onClose is a function
};

export default Modal;
