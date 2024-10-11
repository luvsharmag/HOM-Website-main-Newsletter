import Navbar from "../../Navbar";
import Footer from "../../Footer";
import BubbleComponent from "../page/BubbleComponent";

// Corporate Identity Decks data in JSON format
const corporateIdentityData = {
  corporate_identity_decks: [
    {
      name: "Sales Pitch Deck",
      quote: "Because Just Saying 'Buy My Stuff' Isn't Enough!!",
      description:
        "This deck transforms your sales pitch into a persuasive masterpiece, showcasing your product's features and benefits. Packed with eye-catching visuals and testimonials, it convinces potential clients why saying 'yes' is their best option.",
    },
    {
      name: "Investment Deck",
      quote: "Because ‘Trust Me, I’m Awesome’ Doesn’t Cut It!",
      description:
        "This essential deck lays out your business's potential like a map to treasure. With market opportunities, revenue models, and financial projections, it convinces investors that backing you is their next best move.",
    },
    {
      name: "Brand Identity Deck",
      quote: "What’s Your Brand’s Alter Ego? Let’s Find Out!",
      description:
        "Think of this deck as your brand's personality profile. It defines your mission, vision, and unique selling points, ensuring your messaging is as consistent as your morning coffee. It helps you resonate with your audience and stand out in a crowded market.",
    },
  ],
};

const CorporateIdentityDecks = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen w-screen bg-hero-bg text-hero-text font-dela-gothic relative p-hero-padding box-border">
      <div className="bg-black">
        <h1 className="text-6xl text-white font-bold text-center z-hero py-8">
          Corporate Identity Decks
        </h1>
      </div>
        <div className="relative pt-hero-padding z-hero">
          <BubbleComponent />
        </div>
        <h1 className="text-6xl font-bold text-center z-hero mt-8">
          Not sorry to <br /> burst your bubble
        </h1>
      </section>


      {/* Corporate Identity Deck Sections */}
      {corporateIdentityData.corporate_identity_decks.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col lg:flex-row justify-between items-center py-12 px-5 lg:h-[120vh] ${
            index % 2 === 0 ? "bg-[#CEA5AD]" : "bg-[#70AABC]"
          }`}
        >
          <div className="w-full lg:w-[70%] text-center lg:text-left">
            <h2 className="text-[2.5rem] font-bold sm:text-[3rem] lg:text-[4rem] mb-5 lg:pl-20 text-[#dfff00] font-['Dela_Gothic_One'] leading-tight z-10 mt-12">
              {item.name}
            </h2>
            <h3 className="text-[1.5rem] font-semibold text-[#dfff00] italic lg:pl-20 mb-5">
              {item.quote}
            </h3>
            <p className="lg:pl-20 text-[#dfff00] text-[1.2rem] sm:text-[1.5rem] font-['Open_Sans'] font-semibold">
              {item.description}
            </p>
          </div>
        </section>
      ))}

      <Footer next="Solutions" />
    </div>
  );
};

export default CorporateIdentityDecks;
