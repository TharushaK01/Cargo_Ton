import React from 'react';
import './NewsSection.css';

// Import images from src/assets/news
import truckImage from '../../assets/truck.jpg';
import containersImage from '../../assets/containers.jpg';
import planeImage from '../../assets/plane.jpg';
import shipImage from '../../assets/ship.jpg';

const NewsSection = () => {
  const newsItems = [
    {
      date: '26 MAY',
      image: truckImage,
      title: 'Curabitur Lorem Usum Quis',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
    },
    {
      date: '22 MAY',
      image: containersImage,
      title: 'Curabitur Lorem Usum Quis',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
    },
    {
      date: '20 MAY',
      image: planeImage,
      title: 'Curabitur Lorem Usum Quis',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
    },
    {
      date: '15 MAY',
      image: shipImage,
      title: 'Curabitur Lorem Usum Quis',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames...',
    },
  ];

  return (
    <div className="news-section">
      <div className="news-header">
        <h2>LATEST NEWS</h2>
        <span className="subtitle">INTERGER CONGUE ELIT</span>
      </div>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <div className="news-date">{item.date}</div>
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;