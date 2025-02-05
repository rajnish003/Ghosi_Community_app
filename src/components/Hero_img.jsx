import React, { useState, useEffect } from "react";

const Hero_img = () => {
  const slides = [
    { id: 1, src: "/image/img1.jpg" },
    { id: 2, src: "/image/img2(2).jpg" },
    { id: 3, src: "/image/img5.jpg" },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="max-w-full mx-auto mb-2"> {/* Added margin */}
      {/* Slideshow Container */}
      <div className="relative max-w-full mx-auto h-[70vh] overflow-hidden rounded-lg shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 rounded-full transition-all ${
              index === slideIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero_img;
