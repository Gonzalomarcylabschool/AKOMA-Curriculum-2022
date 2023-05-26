import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://t3.ftcdn.net/jpg/04/38/89/86/360_F_438898676_CIBg0W7aZzm2B4LRkbpHeVhW020buADx.jpg', 'https://bookish.netgalley.com/wp-content/uploads/2020/03/WAB-March-Designs-2-760x470.png', 'https://media.istockphoto.com/id/1389876696/photo/enjoying-reading-and-learning-in-library.jpg?s=612x612&w=0&k=20&c=fPPTlXjut4G9dguWFPbcLwSTy0g3ENx9Ku6t3bWOD68='];
  const slideInterval = 3000; // Time in milliseconds for each slide

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="carousel">
      <img className="carousel-image" src={images[currentIndex]} alt="Slide" />
    </div>
  );
};

export default Carousel;
