import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar mode="light" /> {/* Adding the Navbar here */}
      <div
        className="terms-container px-12 my-32"
        
      >
        <h1 className='text-center text-5xl mb-14'><strong>Terms and Conditions</strong></h1>
        {/* Terms and Conditions Content */}
       
        <p>Effective Date: October 7, 2024</p>
        
        <p>
        Welcome to House of Marktech. By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions ("Terms"). If you do not agree with any part of these Terms, please do not use our services.
        </p>
        <h2><strong>1. Acceptance of Terms</strong></h2>
        <p>
        By using our website and services, you accept these Terms in full. If you do not agree with any part of these Terms, you must not use our services.
        </p>

        <h2><strong>2. Services</strong></h2>
        <p>
        House of Marktech provides consulting, branding, digital marketing, web development, content production, SEO, and other related services. Detailed descriptions of each service will be provided in individual service agreements. The services offered may vary, and pricing will be determined based on the specific requirements of each client.
        </p>

        <h2><strong>3. User Obligations</strong></h2>
        <p> </p>
        <p> You agree to use our services solely for your personal or business purposes and not for any unlawful or unauthorized purposes. You shall not:</p>

        <ul>
          <li>* Use the services to copy, reproduce, modify, or distribute any content without prior written consent from House of Marktech.</li>
          <li>* Engage in any form of disruptive or harmful behavior towards our website or its users.</li>
          <li>* Share your account information with others or allow unauthorized users to access your account.</li>
        </ul>

        <h2><strong>4. Intellectual Property</strong></h2>
        <p>
        All content, trademarks, and intellectual property on our website are owned by or licensed to House of Marktech. You may not reproduce, distribute, or modify any content without our express written consent.
        </p>

        <h2><strong>5. Use of Work</strong></h2>
        <p>
        By engaging our services, you agree that the work we produce may be used by House of Marktech for promotional purposes, including but not limited to our website, social media, and marketing materials. You acknowledge that you will not receive additional compensation for this usage unless otherwise agreed in writing.
        </p>

        <h2><strong>6. Limitation of Liability</strong></h2>
        <p>
        House of Marktech shall not be liable for any damages arising from the use or inability to use our services. Our total liability is limited to the amount paid by you for the services. We do not guarantee the accuracy, completeness, or usefulness of any information provided through our services.
        </p>

        <h2><strong>7. Changes to Terms</strong></h2>
        <p>
        House of Marktech reserves the right to change these Terms at any time. Updates will be posted on this page, and it is your responsibility to review them periodically. Continued use of the services following any changes constitutes acceptance of the new Terms.
        </p>

        <h2><strong>8. Cancellation and Refund Policy</strong></h2>
        <p>Refunds and cancellations depend on the specific service agreements in place. Each request will be reviewed on a case-by-case basis by your account manager and sales executive.</p>

        <h2><strong>9. Governing Law</strong></h2>
        <p>These Terms are governed by the laws of Delhi, India. Any disputes arising from these Terms or your use of our services will be resolved in the courts of Delhi, India.</p>

        <h11><strong>10. Contact Information</strong></h11>  
        <p>For any questions about these Terms, please contact us at marketing@houseofmarktech.com.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsAndConditions;