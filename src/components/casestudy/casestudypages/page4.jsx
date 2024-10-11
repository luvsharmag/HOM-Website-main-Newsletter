import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../../solutions/page/BubbleComponent";

const Page4 = () => {
  const Page4Data = {
    discovery: {
      name: "From Limited Visibility to Legal Powerhouse",
      title: "Client Overview & Challenges",
      description: `
        Justispherex Legal is a prominent legal service provider specializing in intellectual property law, including trademarks, copyrights, patents, and design services. Despite offering comprehensive legal support, Justispherex Legal faced challenges in reaching potential clients and enhancing its online presence. These challenges included a limited online presence, ineffective lead generation strategies, and a need for improved brand awareness in the digital space.
      `,
    },
    creation: {
      name: "Strategy Implementation: Building a Strong Digital Presence",
      title: "Comprehensive Solutions for Growth",
      description: `
        To overcome these challenges, we developed a multi-pronged strategy for Justispherex Legal:
        - Website Development: Created a modern, user-friendly WordPress website featuring essential pages like Home, About Us, Services, Careers, and a disclaimer page.
        - Search Engine Optimization (SEO): Conducted an SEO audit and optimized content for search engine visibility.
        - Social Media Strategy: Established anonymous Instagram and LinkedIn pages, along with a content calendar for regular postings and targeted ad campaigns.
        - Content Development: Produced blogs and articles on intellectual property law to drive website traffic and establish the firm as an authority.
        - Lead Generation Campaigns: Implemented targeted online advertising and optimized landing pages for lead conversion.
      `,
    },
    activation: {
      name: "Results: A Legal Firm’s Digital Transformation",
      title: "Measuring Success through Metrics",
      description: `
        The comprehensive strategy led to significant results for Justispherex Legal:
        - A 200% increase in website traffic within three months.
        - A 150% increase in qualified leads generated during the first quarter.
        - Enhanced brand awareness with a 300% growth in social media followers.
        - Established authority in intellectual property law through increased inquiries and consultations.
        This transformation showcases how a well-rounded digital strategy can drive substantial growth for legal service providers.
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
          From Limited Visibility to Legal Powerhouse
        </h1>
      </section>
      <div className="bg-gray-300">
        <h1 className="text-6xl text-black font-bold text-center z-hero py-8">
          Justispherex Legal Growth Journey
        </h1>
      </div>

      {/* Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page4Data.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page4Data.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page4Data.discovery.description}
          </p>
        </div>
      </section>

      {/* Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page4Data.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page4Data.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page4Data.creation.description}
          </p>
        </div>
      </section>

      {/* Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {Page4Data.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {Page4Data.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {Page4Data.activation.description}
          </p>
        </div>
      </section>
      <Footer next="ContentCreation" />
    </div>
  );
};

export default Page4;
