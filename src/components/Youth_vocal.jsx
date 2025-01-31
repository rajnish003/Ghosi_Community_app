import React, { useState, useContext, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { DataContext } from "../App";

const YouthVocal = () => {
  const cardData = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2); // Default to 2 cards

  // Adjust the number of visible cards based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth < 640 ? 1 : 2);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  if (!cardData || cardData.length === 0) {
    return <p className="text-center text-gray-500">Loading user data...</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide < cardData.length ? prevIndex + cardsPerSlide : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerSlide >= 0
        ? prevIndex - cardsPerSlide
        : cardData.length - (cardData.length % cardsPerSlide || cardsPerSlide)
    );
  };

  return (
    <div className="relative text-center max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-400 py-3 px-6 rounded-xl shadow-md mt-5 mx-[25%]">
        Youth Vocal
      </h3>

      <div className="relative w-full overflow-hidden p-5">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white px-4 py-2 rounded-full shadow-md z-10"
        >
          ◀
        </button>

        {/* Cards Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
        >
          {cardData.map((user, index) => (
            <div key={user.id} className="w-full sm:w-1/2 p-3 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                    src={user.image}
                    alt={user.name || "User Profile"}
                  />
                </div>
                <div className="mt-6">
                  <p className="font-bold text-2xl text-gray-800">{user.name}</p>
                  <p className="text-violet-500 uppercase text-sm mt-1">{user.job}</p>
                </div>
                <div className="mt-4 relative bg-gray-100 p-4 rounded-xl shadow-inner">
                  <FaQuoteLeft className="text-violet-400 text-xl absolute -top-4 left-4" />
                  <p className="text-gray-700 text-sm md:text-base px-2">{user.text}</p>
                  <FaQuoteRight className="text-violet-400 text-xl absolute -bottom-4 right-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-violet-500 text-white px-4 py-2 rounded-full shadow-md z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default YouthVocal;
