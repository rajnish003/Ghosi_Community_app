import React, { useState, useEffect } from "react";

const Magazines = () => {
  const [fullImage, setFullImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  
  const images = [
    { src: "/image/img12.jpg", alt: "Image 1" },
    { src: "/image/img2.jpg", alt: "Image 2" },
    { src: "/image/img3.jpg", alt: "Image 3" },
    { src: "/image/img4.jpg", alt: "Image 4" },
    { src: "/image/img5.jpg", alt: "Image 5" },
    { src: "/image/img6.jpg", alt: "Image 6" },
    { src: "/image/img7.jpg", alt: "Image 7" },
    { src: "/image/img8.jpg", alt: "Image 8" },
  ];

  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth < 640 ? 1 : 3);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide < images.length ? prevIndex + cardsPerSlide : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerSlide >= 0
        ? prevIndex - cardsPerSlide
        : images.length - (images.length % cardsPerSlide || cardsPerSlide)
    );
  };

  return (
    <div className="p-4  bg-blue-300 min-h-screen flex flex-col items-center">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-yellow-300  text-center py-2 px-6 rounded-xl mb-6 shadow-lg">
        Magazines
      </h3>

      {/* Image Grid */}
      <div className="relative w-full max-w-full overflow-hidden max-h-2xl">
        <div
          className="flex transition-transform duration-500 max-w-full"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-1/3 p-2 cursor-pointer transition-transform transform hover:scale-105"
              style={{ flex: `0 0 ${100 / cardsPerSlide}%` }}
              onClick={() => setFullImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[350px] object-contain rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Hidden when Full Image Modal is Open) */}
        {!fullImage && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
            >
              ❯
            </button>
          </>
        )}
      </div>

      {/* Full Image Modal */}
      {fullImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setFullImage(null)} // Close when clicking anywhere
        >
          <div className="relative">
            <img
              src={fullImage}
              alt="Full View"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg border-4 border-white"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => setFullImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Magazines;
