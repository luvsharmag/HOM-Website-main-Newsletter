// Page1.jsx

import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page1 = () => {
  const Page1Data = {
    discovery: {
      name: "Rooftop Heaven: From Ground Level to New Heights",
      title: "Client Overview & Challenges",
      description: `
        Rooftop Heaven is a premier rooftop dining experience located in the heart of the city, known for breathtaking views and a curated menu. However, they faced challenges in brand visibility and marketing effectiveness. Our journey began by identifying their limitations: low brand awareness, ineffective marketing strategies, and an underutilized digital presence.
      `,
    },
    creation: {
      name: "Solution Implementation: Transforming Visibility & Engagement",
      title: "Building a New Identity & Presence",
      description: `
        We addressed Rooftop Heaven’s challenges through strategic solutions, including:
        - Market research to refine the unique value proposition.
        - A revamped, user-friendly website with improved SEO.
        - Engaging social media campaigns, partnering with local influencers.
        These initiatives helped rebuild the brand identity and customer engagement both online and offline.
      `,
    },
    activation: {
      name: "Results: A Brand’s Journey to Success",
      title: "Measuring Success through Metrics",
      description: `
        The strategies implemented resulted in significant growth:
        - A 40% increase in monthly customer visits.
        - A 30% sales boost.
        - Enhanced online presence, with social media followers and engagement growing steadily.
        Rooftop Heaven’s brand was reinvigorated, leading to higher foot traffic, sales, and customer satisfaction.
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
          From Ground Level to New Heights
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          Rooftop Heaven Growth Journey
        </h1>
      </div>

      {/* Page1 Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page1Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page1Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page1Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Page1 Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page1Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page1Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page1Data.creation.description}
          </p>
        </div>
      </section>

      {/* Page1 Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page1Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page1Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page1Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next='ContentCreation'/>
    </div>
  );
};

export default Page1;
