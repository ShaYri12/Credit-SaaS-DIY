import React from "react";
import Slider from "react-slick";

import partner0 from '../assets/images/logo.png';
import partner1 from '../assets/images/equifax.png';
import partner2 from '../assets/images/myscoreiq.png';
import partner3 from '../assets/images/smartcredit.png';
import partner4 from '../assets/images/clear-sky.png';
import partner5 from '../assets/images/my-score.png';


function Partners() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
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

  const images = [partner0, partner1, partner2, partner3, partner4, partner5];

  return (
    <div className="slider-container w-100">
      <Slider {...settings}>
        {images.map((imageSrc, index) => (
          <div key={index} className="slider-image-container mx-auto">
            <img
              src={imageSrc}
              alt={`Partner logo ${index}`}
              className="img-fluid mx-auto"
              style={{
                width: "170px",
                height: "170px",
                objectFit: "contain", // Maintain aspect ratio without stretching the image
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Partners;
