import './Home.css'
import shipImage from '../../assets/SHIP.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import React, { useState } from 'react';

/* ParagraphSlider */
const ParagraphSlider = () => {
  const paragraphs = [
    `Amet, tempus egestas facilisis volutpat viverra molestise lobortis 
     posuere maecenas, molestise lobortis posuere maecenas, Eqet 
     sapien, gravida nequi.`,

    `Another insightful paragraph goes here, full of useful and 
     motivating text for the user to read and be inspired.`,

    `A final paragraph example, discussing a different topic or 
     elaborating further on the above ideas.`
  ];

  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? paragraphs.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === paragraphs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="para-container">
      <IoIosArrowBack className="arrow" onClick={goPrev} />
      <p className="para">
        {paragraphs[index].split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <IoIosArrowForward className="arrow" onClick={goNext} />
    </div>
  );
};

/* Home page */

const Home = () => {
  return (
   <div className='home'>
    <img src={shipImage} alt='ship' className='ship' />
    <div className="home-text container">
        <h1 className='upper'>BEST SHIPPING</h1>
         <h1 className='lower'>PARTNER</h1>
         {/* <p className='para'> Amet, tempus egestas facilisis volutpat viverra molestise lobortis<br />
            posuere maecenas, molestise lobortis posuere maecenas, Eqet <br />
            sapien, gravida nequi.
         </p> */}
         <ParagraphSlider />
         <button className='btn2'>Discover More</button>
    </div>
</div>
  )
}

export default Home