import { useState, useEffect } from 'react';
import './Carousel.css'
import BANNER from '../../assets/banner_1920.png'
import BANNER_SUMMER from '../../assets/banner_summer.png'


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        BANNER,
        BANNER_SUMMER
    ]

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    
        return () => clearInterval(interval);
      }, [images.length]);

      return (
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
          {
          images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))
          }
        </div>
      </div>
      )

}

export default Carousel;