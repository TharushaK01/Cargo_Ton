import React, { useState, useEffect } from 'react';
import rightArrow from '../../assets/right-arrow-head.png'; // Adjust path as needed
import leftArrow from '../../assets/left-arrow-head.png'; // Adjust path as needed
import './Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "John Deo",
      role: "Managing Director",
      description: "Integer congue elit non tempor laoreet sed lectus orci posuer nisl tempor ex felis ac mauris. Peleriesque inydi urna. Integer vitae felis vel magna posu du vestibulum. Nem totum congue diam.",
    },
    {
      name: "Jane Smith",
      role: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      name: "Michael Brown",
      role: "Operations Manager",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="test">
      <div className="testimonial-section">
        {/* Trusted Clients Section */}
        <div className="testimonial-block">
          <h2>Trusted Cliets</h2>
          <p className="subheading">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
          <div className="slider-container">
              <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" onClick={handlePrev} />
            <div className="testimonial-slider">
              <div className="client-testimonial">
                <p className="description">{testimonials[currentIndex].description}</p>
                <div className="divider"></div>
                <h3>{testimonials[currentIndex].name}</h3>
                <p className="client-role">{testimonials[currentIndex].role}</p>
              </div>
            </div>
              <img src={rightArrow} alt="Right Arrow" className="arrow right-arrow" onClick={handleNext} />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="testimonial-block">
          <h2>Why Choose Us</h2>
          <p className="subheading">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
          <ul className="benefits-list">
            <li>Dul ac hendrerit elementum quam ipsum auctor lorem</li>
            <li>Mauris vel magna a est lobortis volutpat</li>
            <li>Sed bibendum ornare lorem mauris feugiat suspendisse meque</li>
            <li>Nulla scelerisque dui hendrerit elementum quam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;