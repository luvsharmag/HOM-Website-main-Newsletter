// VisualEffectsAnimationCGI.jsx
import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const VisualEffectsAnimationCGI = () => {
  const visualEffectsData = {
    ignite_your_imagination: {
      name: "Ignite Your Imagination",

      quote:
        "Crafting a content strategy? It's like mapping a treasure hunt, minus the pirates!",
      description:
        "Start with a bold idea that pushes creative boundaries. Collaborate with your team to define how VFX and CGI will enhance your narrative. This foundational vision sets the stage for immersive and stunning visuals.",
    },
    transform_vision_into_reality: {
      name: "Transform Vision into Reality",

      quote: "Dive into the technical execution of your project.",
      description:
        "Dive into the technical execution of your project. Utilize cutting-edge software and techniques to create realistic and captivating effects. Focus on integrating VFX and CGI seamlessly with live-action footage, ensuring that every element works harmoniously together.",
    },
    refine_and_showcase: {
      name: "Refine and Showcase",

      quote:
        "Distributing content is a piece of cake—if that cake is a multi-tiered masterpiece!",
      description:
        "Once your visuals are created, refine them to perfection. Pay close attention to details like color grading, compositing, and audio synchronization. Finally, showcase your work through strategic channels, captivating your audience with the finished masterpiece.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          VisualEffects Animation and CGI
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* VFX Section 1: Ignite Your Imagination */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {visualEffectsData.ignite_your_imagination.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {visualEffectsData.ignite_your_imagination.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {visualEffectsData.ignite_your_imagination.description}
          </p>
        </div>
      </section>

      {/* VFX Section 2: Transform Vision into Reality */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {visualEffectsData.transform_vision_into_reality.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {visualEffectsData.transform_vision_into_reality.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {visualEffectsData.transform_vision_into_reality.description}
          </p>
        </div>
      </section>

      {/* VFX Section 3: Refine and Showcase */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {visualEffectsData.refine_and_showcase.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {visualEffectsData.refine_and_showcase.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {visualEffectsData.refine_and_showcase.description}
          </p>
        </div>
      </section>

      <Footer next="PreWeddingCinematics" />
    </div>
  );
};

export default VisualEffectsAnimationCGI;
