import React, { useState, useEffect, useRef } from 'react'; 
import services1 from '../../assets/Services1.jpg';
import services2 from '../../assets/Services2.jpg';
import services3 from '../../assets/Services3.jpg';
import services4 from '../../assets/Services4.jpg';
import rightArrow from '../../assets/right-arrow-head.png';
import leftArrow from '../../assets/left-arrow-head.png';
import './services.css';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4; 
  const itemsPerView = 2; 
  const sliderRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= totalItems ? 0 : prevIndex + itemsPerView
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerView < 0 ? totalItems - itemsPerView : prevIndex - itemsPerView
    );
  };

  useEffect(() => {
    if (sliderRef.current) {
      const percentage = (100 / totalItems) * currentIndex;
      sliderRef.current.style.transform = `translateX(-${percentage}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="services">
      <div className="services-text container">
        <h4>Real Solution, Real Fast!</h4>
        <h2>Best Global Logistics Solutions</h2>
      </div>
      <div className="slider-container">
          <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" onClick={handlePrev}/>
        <div className="services-container" ref={sliderRef}>
          <div className="services-wrapperr">
            <img src={services1} alt="Air Freight" className="services1" />
            <div className="services-content">
              <h3>Air Freight Services</h3>
              <p>At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.</p>
              <a href="#" className="btn3">
                Read More <img src={rightArrow} alt="Arrow" className="rightArroww" />
              </a>
            </div>
          </div>
          <div className="services-wrapperr">
            <img src={services2} alt="Drone Services" className="services1" />
            <div className="services-content">
              <h3>Drone Services</h3>
              <p>These are unique and often they differ from one industry to the other. Our logistics expertise.</p>
              <a href="#" className="btn3">
                Read More <img src={rightArrow} alt="Arrow" className="rightArroww" />
              </a>
            </div>
          </div>
          <div className="services-wrapperr">
            <img src={services3} alt="Express Cargo" className="services1" />
            <div className="services-content">
              <h3>Express Cargo</h3>
              <p>We provide reliable solutions to handle cargo with care and speed across multiple locations.</p>
              <a href="#" className="btn3">
                Read More <img src={rightArrow} alt="Arrow" className="rightArroww" />
              </a>
            </div>
          </div>
          <div className="services-wrapperr">
            <img src={services4} alt="Sea Freight" className="services1" />
            <div className="services-content">
              <h3>Sea Freight Services</h3>
              <p>Offering robust sea transport solutions for large-scale logistics needs.</p>
              <a href="#" className="btn3">
                Read More <img src={rightArrow} alt="Arrow" className="rightArroww" />
              </a>
            </div>
          </div>
        </div>
          <img src={rightArrow} alt="Right Arrow" className="arrow right-arrow" onClick={handleNext}/>
      </div>
      <div className="dots">
        {Array.from({ length: Math.ceil(totalItems / itemsPerView) }, (_, i) => (
          <span
            key={i}
            className={`dot ${Math.floor(currentIndex / itemsPerView) === i ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i * itemsPerView)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Services;