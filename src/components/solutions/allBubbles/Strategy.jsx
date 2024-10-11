// Strategy.jsx
import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const Strategy = () => {
  const strategyData = {
    business_strategy: {
      name: "Strategy is easy—navigating complexity is our specialty",
      quote: "Business Strategy",
      description:
        "We design business strategies that empower you to overcome obstacles and seize opportunities. Through comprehensive market analysis and competitive insights, we deliver actionable plans that drive sustainable growth and ensure timely execution.",
    },
    marketing_strategy: {
      name: "Visibility without impact is just noise",
      quote: "Marketing Strategy",
      description:
        "Our marketing strategies are tailored to amplify your brand’s presence and drive meaningful engagement. By blending innovative campaigns with data-driven insights, we ensure your marketing efforts yield maximum ROI and resonate with your target audience.",
    },
    digital_transformation_strategy: {
      name: "Transformation without direction is just a buzzword.",
      quote: "Digital Transformation Strategy",
      description:
        "We help you navigate the landscape of digital transformation by integrating cutting-edge technologies like AI and advanced analytics. Our strategic approach ensures seamless implementation and future-proof solutions that elevate your business for long-term success.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Strategy
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* Business Strategy Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {strategyData.business_strategy.quote}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[2rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {strategyData.business_strategy.name}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {strategyData.business_strategy.description}
          </p>
        </div>
      </section>

      {/* Marketing Strategy Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {strategyData.marketing_strategy.quote}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[2rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {strategyData.marketing_strategy.name}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {strategyData.marketing_strategy.description}
          </p>
        </div>
      </section>

      {/* Digital Transformation Strategy Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {strategyData.digital_transformation_strategy.quote}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[2rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {strategyData.digital_transformation_strategy.name}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {strategyData.digital_transformation_strategy.description}
          </p>
        </div>
      </section>
      <Footer next="WebsiteAndAppDevlopment" />
    </div>
  );
};

export default Strategy;
