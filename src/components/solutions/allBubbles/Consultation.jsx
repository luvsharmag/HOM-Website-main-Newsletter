import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";


const Consultation = () => {
  const consultationData = {
    dive_deep: {
      name: "Dive Deep: Uncover Hidden Challenges",
      quote:
        "Unlocking strategic insights? It’s like finding the Wi-Fi password—essential and satisfying!",
      description:
        "We kick off by diving into your business landscape. Our experts analyze your current strategies, market trends, and competitive landscape, providing valuable insights that inform your next steps. This foundational knowledge empowers you to make informed decisions that drive growth.",
    },
    craft_tailored_solutions: {
      name: "Craft Tailored Solutions: Personalize Your Expertise",
      quote:
        "Crafting tailored solutions is easy—if you know how to tailor a suit for a unicorn!",
      description:
        "Every business is unique, and so are its challenges. We work closely with you to develop customized solutions that address your specific needs and goals. Whether it’s refining your marketing approach or enhancing operational efficiency, we design strategies that fit your business like a glove.",
    },
    nurture_the_relationship: {
      name: "Nurture the Relationship: Stay Connected for Continued Growth",
      quote:
        "Ongoing support is like having a GPS for your business journey—always helpful, even when you take a wrong turn!",
      description:
        "Our partnership doesn’t end with recommendations. We provide continuous support to ensure the successful implementation of our strategies. From regular check-ins to performance assessments, we’re here to guide you every step of the way, ensuring your business stays on the path to success.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Consultation
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>

      {/* Map through the consultationData to render each section */}
      {Object.keys(consultationData).map((key, index) => {
        const section = consultationData[key];
        const bgColor = index % 2 === 0 ? "bg-[#CEA5AD]" : "bg-[#70AABC]"; // Alternating background colors

        return (
          <section
            key={key}
            className={`flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] ${bgColor}`}
          >
            <div className="w-full lg:w-[70%] text-center lg:text-left">
              <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
                {section.name}
              </h2>
              <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
                {section.quote}
              </h3>
              <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
                {section.description}
              </p>
            </div>
          </section>
        );
      })}

      <Footer next="Strategy" />
    </div>
  );
};

export default Consultation;