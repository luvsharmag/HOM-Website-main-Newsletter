// ContentCreation.jsx
import BubbleComponent from "../page/BubbleComponent";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const ContentCreation = () => {
  const contentData = {
    lay_the_foundation: {
      name: "Lay the Foundation",

      quote:
        "Crafting a content strategy? It's like mapping a treasure hunt, minus the pirates!",
      description:
        "We begin by understanding your goals and audience. Our team develops a tailored content strategy that aligns with your brand’s objectives, ensuring every piece of content serves a purpose. From blog posts to social media, we set the course for your content journey.",
    },
    bring_it_to_life: {
      name: "Bring It to Life",

      quote:
        "Creating content is easy—if you have a magic wand and a team of elves!",
      description:
        "It’s time to bring your ideas to life! Our skilled professionals create engaging and high-quality content, whether it’s articles, videos, infographics, or social media posts. We focus on originality and relevance, ensuring your content captivates your audience and keeps them coming back for more.",
    },
    polish_and_distribute: {
      name: "Polish and Distribute",

      quote:
        "Distributing content is a piece of cake—if that cake is a multi-tiered masterpiece!",
      description:
        "Once your content is ready, it’s time to share it with the world! We utilize various channels—social media, email marketing, and SEO optimization—to maximize reach and engagement. Our targeted distribution strategy ensures your content reaches the right audience at the right time, amplifying your brand’s voice and impact.",
    },
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Content creation
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* Content Creation Section 1: Lay the Foundation */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#CEA5AD]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {contentData.lay_the_foundation.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {contentData.lay_the_foundation.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {contentData.lay_the_foundation.description}
          </p>
        </div>
      </section>

      {/* Content Creation Section 2: Bring It to Life */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-[#70AABC]">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {contentData.bring_it_to_life.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {contentData.bring_it_to_life.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {contentData.bring_it_to_life.description}
          </p>
        </div>
      </section>

      {/* Content Creation Section 3: Polish and Distribute */}
      <section className="flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] bg-black">
        <div className="w-full lg:w-[70%] text-center lg:text-left">
          <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
            {contentData.polish_and_distribute.name}
          </h2>
          <h3 className="text-[1rem] font-bold sm:text-[3rem] lg:text-[2rem] mb-5 lg:pl-20 text-[#f1ff96] font-['poppins'] leading-tight z-10 mt-12">
            {contentData.polish_and_distribute.quote}
          </h3>
          <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
            {contentData.polish_and_distribute.description}
          </p>
        </div>
      </section>
      <Footer next="SocialMedia" />
    </div>
  );
};

export default ContentCreation;
