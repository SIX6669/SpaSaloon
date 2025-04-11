import React from 'react';
import Slider from 'react-slick';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
      <div className="slide">
        <img src={slide1} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={slide2} alt="Slide 2" />
      </div>
      <div className="slide">
        <img src={slide3} alt="Slide 3" />
      </div>
    </Slider>
    
    );
}; 

export default Carousel;