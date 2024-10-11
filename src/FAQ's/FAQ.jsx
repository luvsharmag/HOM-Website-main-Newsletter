import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqData = [
  {
    question: "What is digital marketing?",
    answer: "Digital marketing is the promotion of a business through digital channels such as a website, search engine optimization, social media, email, or online paid advertising. ",
  },
  {
    question: "What is Search Engine Optimization?",
    answer:
      "Search Engine Optimization, commonly referred to as SEO, is the act of improving content and webpages in order to rank higher on search engine results pages. Search engines have algorithms that determine which webpages hold the most relevant results, and those pages are ranked highest among the search results.Using SEO tactics, such as keywords, meta descriptions, and links, your content will stand out to search engine algorithms as relevant information and ultimately rank higher. Ranking higher leads to increased traffic and consumer trust.",
  },
  {
    question: "Do I really need a website?",
    answer: "Yes! Word of mouth can be great, but a majority of consumers find and research companies online before making any purchases. An online presence gives your company credibility and boosts brand awareness. Plus, websites are an avenue for endless marketing strategies, including e-commerce, online customer service, and consumer engagement.",
  },
  {
    question: "What is the main purpose of social media marketing?",
    answer: "Social media falls in the brand awareness and consideration stage of the sales funnel. Social media platforms allow businesses to connect with their target audience and slowly but surely nudge them down the funnel with content and links to learn more. By providing relevant information about products and services, engaging with their audience, and providing free trials or specials, businesses are able to nurture leads into buyers.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <Navbar/>
    <div className="w-[50rem] mx-auto mt-28">
      <div>
        <img src="https://cdn.shopify.com/app-store/listing_images/be8e18fe7fd62b265563360c2986633d/promotional_image/CLHpktmI5_QCEAE=.jpeg?height=720&quality=90&width=1280" alt="" />
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      </div>
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            className="flex w-full justify-between items-center text-left"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="mt-2 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
