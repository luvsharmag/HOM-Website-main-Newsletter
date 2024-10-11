import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

// Import the cinematics data from a JSON file or define it here
const cinematicsData = {
  pre_wedding_cinematics: [
    {
      name: "Capture the Essence: Understand the Couple’s Story",
      quote:
        "Dreaming of the perfect pre-wedding film? Let’s make those dreams a reality—no fairy godmother required!",
      description:
        "We begin by understanding your love story and vision. Our team collaborates with you to develop a unique concept that captures your personalities and relationship. From themes to locations, we ensure your film reflects your journey and sets the stage for a memorable cinematic experience.",
    },
    {
      name: "Plan the Perfect Shoot: Create a Vision Together",
      quote:
        "Lights, camera, action! Creating your pre-wedding magic—without the Hollywood budget!",
      description:
        "Let’s face it—static images are for the uninspired. Our animations bring your ideas to life with flair, ensuring your audience stays engaged. We use cutting-edge technology to create dynamic visual experiences that elevate your content, delivering a captivating narrative that leaves a lasting impression.",
    },
    {
      name: "Bring It to Life: Craft Cinematic Magic",
      quote:
        "Editing your pre-wedding film? It’s like assembling a jigsaw puzzle—only way more romantic!",
      description:
        "Once filming is complete, our editing team works diligently to weave your footage into a captivating narrative. We enhance visuals, add music, and incorporate special effects, ensuring your film is polished and emotionally resonant. The final product is a breathtaking cinematic experience that you’ll cherish for a lifetime.",
    },
  ],
};

const PreWeddingCinematics = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Pre-Wedding Cinematics
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* Cinematics Sections */}
      {cinematicsData.pre_wedding_cinematics.map((cinematic, index) => (
        <section
          key={index}
          className={`flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] ${
            index % 2 === 0 ? "bg-[#CEA5AD]" : "bg-[#70AABC]"
          }`}
        >
          <div className="w-full lg:w-[70%] text-center lg:text-left">
            <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
              {cinematic.name}
            </h2>
            <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
              {cinematic.quote}
            </h3>
            <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
              {cinematic.description}
            </p>
          </div>
        </section>
      ))}

      <Footer next="TrademarkAndIP" />
    </div>
  );
};

export default PreWeddingCinematics;
