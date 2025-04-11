import React from 'react';
import Slider from 'react-slick';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css';
function Carousel() {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <Slider classname="slider" {...settings}>
      <div className="slide">
        <img src={slide1} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={slide2} alt="Slide 2" />
      </div>
      <div className="slide">
        <img src={slide3} alt="Slide 3" />
      </div>
      <div className="slide">
        <img src={slide4} alt="Slide 4" />
      </div>
      <div className="slide">
        <img src={slide5} alt="Slide 5" />
      </div>
    </Slider>
    
    );
}; 

export default Carousel;