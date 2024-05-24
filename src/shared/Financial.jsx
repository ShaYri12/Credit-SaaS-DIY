import React from "react";
import Slider from "react-slick";

import financial1 from '../assets/images/inc-com.svg';
import financial2 from '../assets/images/fox-news.svg';
import financial3 from '../assets/images/cnbc.svg';
import financial4 from '../assets/images/business-insider.svg';
import financial5 from '../assets/images/huffpost.png';
import financial6 from '../assets/images/yahoo-finance.svg';


function Financial() {
  const settings = {
    className: "center",   
    infinite: true,
    
    slidesToShow: 4,
    centerMode: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const images = [financial1, financial2, financial3, financial4, financial5, financial6];

  return (
    <div className="slider-container w-100">
      <Slider {...settings}>
        {images.map((imageSrc, index) => (
          <div key={index} className="slider-image-container">
            <img
              src={imageSrc}
              alt={`Partner logo ${index}`}
              className="img-fluid mx-auto"
              style={{
                width: "170px",
                height: "170px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Financial;
