// PROutreach.jsx
import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const PROutreach = () => {
  const prOutreachData = {
    set_the_stage: {
      name: "Set the Stage: Build Your PR Vision",

      quote:
        "Building media relationships is like dating—it's all about making a lasting impression!",
      description:
        "We focus on establishing and nurturing relationships with key media outlets and influencers. Our team crafts compelling press releases and pitches that capture attention, ensuring your brand gets the spotlight it deserves. This proactive approach helps secure valuable coverage and boosts your brand’s credibility.",
    },
    map_your_media_landscape: {
      name: "Map Your Media Landscape: Connect with the Right Voices",

      quote:
        "Creating strategic messaging? It's like fine-tuning a recipe—every ingredient counts",
      description:
        "We help develop clear, consistent, and impactful messaging that resonates with your target audience. Our team ensures your brand’s voice is authentic and aligns with your overall strategy. By tailoring your message to different platforms and audiences, we maximize your outreach efforts and enhance brand perception.",
    },
    craft_captivating_pitches: {
      name: "Craft Captivating Pitches: Spark Interest and Curiosity!",

      quote:
        "Handling a PR crisis? It's like putting out a fire with a garden hose—better have a plan!",
      description:
        "In times of crisis, swift and effective communication is key. We provide guidance and strategies to navigate challenging situations, helping you maintain transparency and protect your brand’s reputation. Our team works diligently to develop a crisis communication plan, ensuring you are prepared to address issues head-on and restore trust with your audience.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          PR Outreach
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* PR Outreach Section 1: Set the Stage */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {prOutreachData.set_the_stage.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {prOutreachData.set_the_stage.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {prOutreachData.set_the_stage.description}
          </p>
        </div>
      </section>

      {/* PR Outreach Section 2: Map Your Media Landscape */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {prOutreachData.map_your_media_landscape.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {prOutreachData.map_your_media_landscape.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {prOutreachData.map_your_media_landscape.description}
          </p>
        </div>
      </section>

      {/* PR Outreach Section 3: Craft Captivating Pitches */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {prOutreachData.craft_captivating_pitches.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {prOutreachData.craft_captivating_pitches.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {prOutreachData.craft_captivating_pitches.description}
          </p>
        </div>
      </section>
      <Footer next="Consultation" />
    </div>
  );
};

export default PROutreach;
