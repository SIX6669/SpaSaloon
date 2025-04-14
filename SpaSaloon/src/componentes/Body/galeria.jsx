import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// fotos importadas
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import React from 'react';
function Galeria() {
  return (
    <div className="galeria-container">
      <h1 className="galeria-title">Galeria</h1>
      <div className="galeria-content">
        <MyGallery />
      </div>
    </div>
  );
}
const images = [
  {
    original: slide1,
    thumbnail: slide1,
  },
  {
    original: slide2,
    thumbnail: slide2,
  },
  {
    original: slide3,
    thumbnail: slide3,
  },
  {
    original: slide4,
    thumbnail: slide4,
  },
  {
    original: slide5,
    thumbnail: slide5,
  },
  
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Galeria;
