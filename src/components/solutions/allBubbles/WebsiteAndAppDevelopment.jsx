// WebsiteAndAppDevelopment.jsx
import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const WebsiteAndAppDevelopment = () => {
  const developmentData = {
    website_development: {
      name: "Website Development",
      quote: "Anyone can handle simple—it's the complex that sets us apart.",
      description:
        "We build websites that not only look great but handle complex functionality with ease. Our focus is on performance, user experience, and delivering on time, ensuring your site drives real business results.",
    },
    app_development: {
      name: "App Development",
      quote: "Because your app deserves more than just downloads.",
      description:
        "We build apps that are more than just a download—they’re built to function seamlessly. With intuitive design and smart features, our apps deliver value to users on time and within project deadlines.",
    },
    seo: {
      name: "SEO",
      quote: "Being on page 2 is like being invisible.",
      description:
        "Our SEO services make sure your brand isn’t just ranking—it’s dominating. We use proven strategies to enhance visibility and traffic, hitting milestones that ensure your business grows as promised.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Website And App Development
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* Development Section 1: Website Development */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {developmentData.website_development.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['Poppins'] leading-tight z-10 mt-12">
            {developmentData.website_development.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {developmentData.website_development.description}
          </p>
        </div>
      </section>

      {/* Development Section 2: App Development */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {developmentData.app_development.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['Poppins'] leading-tight z-10 mt-12">
            {developmentData.app_development.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {developmentData.app_development.description}
          </p>
        </div>
      </section>

      {/* Development Section 3: SEO */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {developmentData.seo.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['Poppins'] leading-tight z-10 mt-12">
            {developmentData.seo.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {developmentData.seo.description}
          </p>
        </div>
      </section>

      <Footer next="VisualEffects" />
    </div>
  );
};

export default WebsiteAndAppDevelopment;
