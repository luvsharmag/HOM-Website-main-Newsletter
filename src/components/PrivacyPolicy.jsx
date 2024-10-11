import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Importing the Footer component

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar mode="light" />  {/* Adding the Navbar here */}
      <div 
        className="terms-container px-12 my-32 mb-14" 
        
      >
        <h1 className='text-center text-5xl'><strong>Privacy Policy</strong></h1>
        <p>Effective Date: October 7, 2024</p>
        <p>
          At House of Marktech, your privacy is of utmost importance. This Privacy Policy outlines how we collect, use, and protect your personal information.
        </p>

        <h2><strong>1. Information We Collect</strong></h2>
        <p>
          We may collect personal information such as your name, email address, phone number, and other information you provide when using our services.
        </p>

        <h2><strong>2. How We Use Your Information</strong></h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Communicate with you.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2><strong>3. Cookies</strong></h2>
        <p>
          Our website uses cookies to enhance user experience. You can choose to accept or decline cookies, but this may limit your access to some features of our website.
        </p>

        <h2><strong>4. Data Security</strong></h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2><strong>5. Your Rights</strong></h2>
        <p>
          You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:marketing@houseofmarktech.com">marketing@houseofmarktech.com</a>.
        </p>

        <h2><strong>6. Changes to This Privacy Policy</strong></h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page, and your continued use of our services signifies your acceptance of these changes.
        </p>

        <h2><strong>7. Contact Information</strong></h2>
        <p>
          For any questions about this Privacy Policy, please contact us at <a href="mailto:marketing@houseofmarktech.com">marketing@houseofmarktech.com</a>.
        </p>
      </div>
      <Footer /> {/* Adding the Footer component here */}
    </div>
  );
};

export default PrivacyPolicy;