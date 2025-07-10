import React, { useState } from 'react';
import './LogoSlider.css';
import rightArrow from '../../assets/right-arrow-head2.png'; 
import leftArrow from '../../assets/left-arrow-head2.png'; 
import logo1 from '../../assets/logo_1.png';
import logo2 from '../../assets/logo_2.png';
import logo3 from '../../assets/logo_3.png';
import logo4 from '../../assets/logo_4.png';
import logo5 from '../../assets/logo_5.png';
import logo6 from '../../assets/logo_6.png';

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
  };

  const getDisplayLogos = () => {
    const prevIndex = currentIndex === 0 ? logos.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === logos.length - 1 ? 0 : currentIndex + 1;
    return [logos[prevIndex], logos[currentIndex], logos[nextIndex]];
  };

  return (
    <div className="logo_container">
        <div className="logo-text container">
        <h2>Leading Brands Rely on Us for Seamless Logistics</h2>
      </div>
    <div className="logo-slider">
      <img
        src={leftArrow}
        alt="Previous"
        className="arrow arrow-left"
        onClick={handlePrev}
        width="40"
        height="40"
      />
      {getDisplayLogos().map((logo, index) => (
        <div
          key={index}
          className={`logo-container ${index === 1 ? 'middle' : 'side'}`}
        >
          <img src={logo} alt={`Logo ${index + 1}`} className="logo-img" />
        </div>
      ))}
      <img
        src={rightArrow}
        alt="Next"
        className="arrow arrow-right"
        onClick={handleNext}
      />
    </div>
    </div>

  );
};

export default LogoSlider;