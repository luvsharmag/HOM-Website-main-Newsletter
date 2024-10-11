import React from 'react';
import Footer from './Footer'; // Importing the Footer component
import Navbar from './Navbar';

const CancellationPage = () => {
  return (
    <div>
      <Navbar mode="light" /> {/* Adding the Navbar here */}
      <div
        className="terms-container px-12 my-32"
        
      >
        <h1 className='text-center text-5xl mb-14'><strong>Cancellations and Refund Policy</strong></h1>
        <p>Effective Date: October 7, 2024</p>
        <p>
          At House of Marktech, we aim to provide excellent service and ensure customer satisfaction. Please read our Cancellation and Refund Policy carefully.
        </p>

        <h2><strong>1. Cancellations</strong></h2>
        <p>
          Customers may cancel any service within 24 hours of the purchase date. To initiate a cancellation, please contact us at <a href="mailto:marketing@houseofmarktech.com">marketing@houseofmarktech.com</a>.
        </p>

        <h2><strong>2. Refunds</strong></h2>
        <p>Refund Amount: If a cancellation is made within the stipulated time, a refund of 50% of the total service fee will be issued.</p>
        <p>Non-Refundable Services: After 24 hours from the purchase date, all services are non-refundable.</p>

        <h2><strong>3. Processing Time</strong></h2>
        <p>
          Refund requests will be processed within [Insert Number] business days after the cancellation request is received. Please note that all refunds will be issued back to the original payment method.
        </p>

        <h2><strong>4. Changes to This Policy</strong></h2>
        <p>
          House of Marktech reserves the right to modify this policy at any time. Updates will be posted on this page, and your continued use of our services signifies your acceptance of these changes.
        </p>

        <h2><strong>5. Contact Information</strong></h2>
        <p>
          For any questions regarding our Cancellation and Refund Policy, please contact us at <a href="mailto:marketing@houseofmarktech.com">marketing@houseofmarktech.com</a>.
        </p>
      </div>
      <Footer /> {/* Adding the Footer component here */}
    </div>
  );
};

export default CancellationPage;