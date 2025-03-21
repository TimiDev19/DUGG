"use client";

import { useState, useEffect } from "react";

const images = [
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-auto rounded-t-2xl shadow-lg transition-opacity duration-500"
      />
    </div>
  );
}
