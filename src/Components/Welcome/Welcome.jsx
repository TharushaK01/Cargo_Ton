import React,{ useState, useEffect } from 'react'
import welcome1 from '../../assets/welcome1.jpg'
import welcome2 from '../../assets/welcome2.jpg'
import './welcome.css'


const Carousel = () => {
  const images = [welcome1, welcome2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
    </div>
  );
};

const welcome = () => {
  return (
    <div className='welcome-wrapper'>
    <div className='welcome'>
        <Carousel />
        <div className="welcome-text container">
            <h2>TransMax Logistics<br/>
            Around <span class="highlight">the World</span>  </h2>
            <p>Transmax is the world's driving worldwide coordinations <br/>
            supplier, we uphlod industry and exchange the wordlwide<br/>
            trade of merchandise through land transport</p>
            <p>Our worth added administrations guarantee the progression of <br/>
            products proceeds consistently and supply chains stay lean and <br/>
            streamlined for the progress.</p>
            <button className='btn'>MORE ABOUT US</button>    
        </div>
    </div>
    </div>
  )
}

export default welcome