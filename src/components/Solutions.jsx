
import cardcover from "../assets/images/playingcard.png";
import image from "../assets/images/arrow.png";
import Modal from "./solutions/page/Modal";

import React, { useState, useEffect, useRef } from 'react'


const cards = [
  { id: 1, backHeading: "Lack of Innovation in Growth?", backSubheading: `We drive <span class='text-blue-600'>Growth</span> through tech, data, and strategy.` },
  { id: 2, backHeading: "Weak Brand Identity?", backSubheading: "We craft bold <span class='text-blue-600'>Branding</span> with standout content." },
  { id: 3, backHeading: "Inefficient Operations?", backSubheading: "We optimize processes with streamlined <span class='text-blue-600'>Strategies.</span>" },
  { id: 4, backHeading: "Outdated Websites & Apps?", backSubheading: "We build modern, high-performance <span class='text-blue-600'>Websites and Apps.</span>" },
  { id: 5, backHeading: "Low Visual Appeal?", backSubheading: "We create stunning visuals with <span class='text-blue-600'>CGI and Animation.</span>" },
  { id: 6, backHeading: "Unclear Marketing Strategy?", backSubheading: "We design data-driven, result-focused <span class='text-blue-600'>Marketing plans.</span>" },
  { id: 7, backHeading: "Poor Data Utilization?", backSubheading: "We boost growth with <span class='text-blue-600'>AI and Data Analytics</span> solutions." },
  { id: 8, backHeading: "Struggling to Scale in Competitive Markets?", backSubheading: "We <span class='text-blue-600'>Scale</span> brands with innovative tech and insights." },
  { id: 9, backHeading: "Outdated Content?", backSubheading: "We refresh messaging with engaging, relevant <span class='text-blue-600'>Content.</span>" },
  { id: 10, backHeading: "Need All Services in One Place?", backSubheading: "We offer full-service solutions—from <span class='text-blue-600'>Branding to Technology.</span>" },
]

export default function FlippableCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState([])
  const cardRefs = useRef(cards.map(() => React.createRef()));
  const lastScrollTop = useRef(0)
  const isScrollingUp = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop
      isScrollingUp.current = st < lastScrollTop.current
      lastScrollTop.current = st <= 0 ? 0 : st
    }

    window.addEventListener('scroll', handleScroll, false)
    return () => window.removeEventListener('scroll', handleScroll, false)
  }, [])

  useEffect(() => {
    let timeout

    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingUp.current) {
            timeout = setTimeout(() => {
              setFlippedCards(prev => [...prev, cards[index].id])
            }, index % 5 * 100) // Delay based on odd/even index
          } else if (!entry.isIntersecting && isScrollingUp.current) {
            timeout = setTimeout(() => {
              setFlippedCards(prev => prev.filter(id => id !== cards[index].id))
            }, index % 5 * 100) // Delay based on odd/even index
          }
        },
        { threshold: 0.5 }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className="hidden lg:block h-screen w-screen"></div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-left md:text-center">
          Struggling with Challenges in the <br /> Business Industry?
        </h1>
        <h1 className="text-2xl font-bold mb-12 text-left md:text-center">
          <span className="text-blue-600 text-3xl">House of Marktech</span>{" "}
          Delivers the Best Solutions to Overcome Every Obstacle.
        </h1>

        <div className="grid gap-8 mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={cardRefs.current[index]}
              className={` w-64 h-96 m-2 [perspective:1000px] group float mx-auto

               
                `}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div
                className={`absolute w-full h-full transition-all duration-700 [transform-style:preserve-3d] 
                  ${
                    flippedCards.includes(card.id)
                      ? "[transform:rotateY(180deg)]"
                      : ""
                  }`}
              >
                <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={cardcover}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-lg flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="p-4 py-6 bg-black h-2/5 rounded-t-lg">
                    <h2 className="text-2xl font-bold text-start text-white">
                      {card.backHeading}
                    </h2>
                  </div>
                  <div className="p-4 py-8 ">
                    <h2
                      className="text-2xl  font-bold text-right "
                      dangerouslySetInnerHTML={{ __html: card.backSubheading }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 mb-80">
        <div className="flex flex-col items-center justify-center w-full">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-wide text-center animate-fadeInUp"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Smart Growth starts <span className="text-blue-600">here.</span>
          </h1>

          <img
            src={image}
            alt="Downward arrow"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mt-6 sm:mt-0 animate-bounce"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full space-y-6 sm:space-y-0 sm:space-x-6 mt-8">
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 md:text-3xl lg:text-4xl bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:scale-110 transition-all duration-300 transform hover:shadow-xl"
            onClick={() => setIsModalOpen(true)}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get a Proposal
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}