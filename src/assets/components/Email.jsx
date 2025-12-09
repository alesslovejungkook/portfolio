import React, { useState } from "react";
import "./Email.css";

const Certificates = () => {
  const images = [
    "/logos/MOS.jpg",
    "/logos/CERT1.png",
    "/logos/CERT2.png",
    "/logos/CERT3.png",
    "/logos/DL1.png",
    "/logos/DL2.png",
  ];

  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="certificates-wrapper">
      {hoveredImage && (
        <div className="hover-preview">
          <img src={hoveredImage} alt="Preview" />
        </div>
      )}

      <div className="certificates-container">
        <div
          className="certificates-track"
          style={{
            transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
          }}
        >
          {images.map((img, idx) => (
            <div
              className="certificate-card"
              key={idx}
              onMouseEnter={() => setHoveredImage(img)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={img} alt={`certificate ${idx}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-buttons">
        <button className="carousel-btn" onClick={prevSlide}>
          &#10094; Prev
        </button>
        <button className="carousel-btn" onClick={nextSlide}>
          Next &#10095;
        </button>
      </div>
    </div>
  );
};

export default Certificates;
