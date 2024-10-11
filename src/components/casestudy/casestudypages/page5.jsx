import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page5 = () => {
  const Page5Data = {
    discovery: {
      name: "HomesunNature: Eco-friendly Solutions for Sustainable Living",
      title: "Client Overview & Challenges",
      description: `
        HomesunNature is a brand dedicated to promoting eco-friendly products in India, including organic textiles, biodegradable packaging, and natural personal care items. Despite a strong mission, they faced several challenges: limited online presence, suboptimal e-commerce platform, and difficulty engaging customers in a highly competitive market.
      `,
    },
    creation: {
      name: "Solutions: Enhancing Digital Presence & Engagement",
      title: "Strategic Solutions for a Growing Brand",
      description: `
        House of Marktech provided tailored solutions to HomesunNature, including:
        - Development of a responsive e-commerce platform using Shopify.
        - Comprehensive SEO audit and strategy implementation to improve search engine visibility.
        - Digital marketing campaigns on social media, email marketing, and content creation that reflected the brand’s sustainability commitment.
      `,
    },
    activation: {
      name: "Results: A Sustainable Growth Story",
      title: "Measuring Impact and Success",
      description: `
        The implemented strategies resulted in impressive growth:
        - A 300% increase in social media followers.
        - A 200% increase in online sales within the first quarter post-launch.
        - Increased engagement through email marketing with a 45% open rate.
        HomesunNature successfully positioned itself as a leader in the eco-friendly market with a solidified online presence and loyal customer base.
      `,
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Sustainable Living: HomesunNature's Success Story
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          HomesunNature Growth Journey
        </h1>
      </div>

      {/* Page5 Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page5Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page5Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page5Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Page5 Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page5Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page5Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page5Data.creation.description}
          </p>
        </div>
      </section>

      {/* Page5 Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page5Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page5Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page5Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next='ContentCreation'/>
    </div>
  );
};

export default Page5;
