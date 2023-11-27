import React, { useState, useEffect } from 'react';
import '../../styles/ImageSlider.css';

const ImageSlider = ({ images, textItems, slideInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentSlide, images, slideInterval]);

  return (
    <div className="image-slider">
      <img
        className="slider-image"
        src={images[currentSlide]}
        alt={`Slide ${currentSlide}`}
      />
      <div className="slider-text">{textItems[currentSlide]}</div>
    </div>
  );
};

export default ImageSlider;
