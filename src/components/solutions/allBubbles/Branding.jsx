// Branding.jsx
import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
// import FloatingBubble from "../page/FloatingBubble";

const Branding = () => {
  const brandingData = {
    discovery: {
      name: "Discovery: Uncover Your Brand’s Core",
      title: "Start by digging deep into who you are!",
      description:
        "Start by digging deep into who you are! Define your brand’s identity—your mission, vision, values, and what sets you apart. This is where you get clear on your purpose and how you want your audience to see you. It’s about laying a strong foundation that resonates with your target market.",
    },
    creation: {
      name: "Creation: Build Your Visual and Verbal Identity",

      title: "Time to make your brand come to life",
      description:
        "Time to make your brand come to life! Develop your logo, colors, fonts, and brand messaging. This is where your brand’s personality shines through in everything from your website to social media. Make sure every element works together to create a cohesive and memorable impression.",
    },
    activation: {
      name: "Activation: Share Your Brand with the World",

      title: "Launch and let your brand speak!",
      description:
        "Launch and let your brand speak! Roll out your branding across all channels—website, social media, packaging, and beyond. Be consistent with your visuals and messaging to build recognition and trust. Every touchpoint should reinforce your brand’s story and values, building loyalty over time.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-black text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Branding
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        {/* <FloatingBubble /> */}
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>

      {/* Branding Section 1: Discovery */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {brandingData.discovery.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {brandingData.discovery.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {brandingData.discovery.description}
          </p>
        </div>
      </section>

      {/* Branding Section 2: Creation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {brandingData.creation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {brandingData.creation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {brandingData.creation.description}
          </p>
        </div>
      </section>

      {/* Branding Section 3: Activation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {brandingData.activation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {brandingData.activation.title}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {brandingData.activation.description}
          </p>
        </div>
      </section>
      <Footer next='ContentCreation'/>
    </div>
  );
};

export default Branding;
