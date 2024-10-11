import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page2 = () => {
  const Page2Data = {
    discovery: {
      name: "From Local Gem to Must-Visit Destination",
      title: "Overview & Challenges",
      description: `
        Desi Thaat, a resort nestled in the heart of Alwar, Rajasthan, has become a sought-after destination for those looking to immerse themselves in the rich culture and natural beauty of India. Prior to our interventions, they faced challenges such as limited brand awareness, stagnant sales growth, and a lack of engaging features on their website.
      `,
    },
    creation: {
      name: "Strategy Implementation: Elevating Visibility & Sales",
      title: "Building an Engaging Digital Presence",
      description: `
        We addressed Desi Thaat’s challenges by implementing a multi-faceted strategy focused on:
        - Collaborating with influencers to create buzz and drive visibility.
        - Running targeted Google Ads campaigns to boost visibility and traffic.
        - Enhancing the website with features such as 'Spin the Wheel' gamification, streamlined order processes, and loyalty/referral programs.
        These strategies effectively increased customer engagement and boosted sales.
      `,
    },
    activation: {
      name: "Results: A Story of Growth & Engagement",
      title: "Measuring Success through Metrics",
      description: `
        The strategy led to significant growth:
        - A 69.8% sales increase in the first year (2023).
        - A 70.2% sales boost in the second year (2024).
        - A 75% increase in brand visibility and customer engagement, along with enhanced organic traffic.
        Desi Thaat successfully transformed into a must-visit destination, enhancing both its brand presence and customer base.
      `,
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent/>
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          From Local Gem to Must-Visit Destination
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          Desi Thaat Growth Journey
        </h1>
      </div>

      {/* Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page2Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page2Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page2Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page2Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page2Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page2Data.creation.description}
          </p>
        </div>
      </section>

      {/* Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page2Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page2Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page2Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next="ContentCreation" />
    </div>
  );
};

export default Page2;
