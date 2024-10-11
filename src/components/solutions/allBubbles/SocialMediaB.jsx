// SocialMediaB.jsx
import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const SocialMediaB = () => {
  const socialMediaData = {
    engagement: {
      name: "Engagement is Not Just a Buzzword",

      quote: "Crafting Meaningful Connections",

      description:
        "In a world saturated with content, we focus on creating authentic interactions that resonate with your audience. Our targeted strategies ensure that your posts not only capture attention but also foster meaningful conversations.",
    },
    analytics: {
      name: "      Analytics: The Backbone of Smart Strategies",

      quote: "      Leveraging Data for Informed Decisions",
      description:
        "Understanding your audience is key to success. We utilize in-depth analytics to gather insights that drive your social media strategy. Our data-driven approach ensures that every decision is backed by metrics, maximizing your impact.",
    },
    quality_over_quantity: {
      name: "             Quality Over Quantity: Building a Loyal Community",

      quote: "      Cultivating Genuine Connections",
      description:
        "While follower counts can be impressive, genuine engagement matters more. We focus on attracting and nurturing an active community that genuinely cares about your brand, leading to sustained growth and loyalty over time.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Social Media
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* Social Media Section 1: Engagement */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {socialMediaData.engagement.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {socialMediaData.engagement.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {socialMediaData.engagement.description}
          </p>
        </div>
      </section>

      {/* Social Media Section 2: Analytics */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {socialMediaData.analytics.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {socialMediaData.analytics.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {socialMediaData.analytics.description}
          </p>
        </div>
      </section>

      {/* Social Media Section 3: Quality Over Quantity */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {socialMediaData.quality_over_quantity.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {socialMediaData.quality_over_quantity.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {socialMediaData.quality_over_quantity.description}
          </p>
        </div>
      </section>

      <Footer next="PROutreach" />
    </div>
  );
};

export default SocialMediaB;
