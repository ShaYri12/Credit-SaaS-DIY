import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import '../styles/ebooks.css'

import ebook1 from '../assets/images/ebook1.png';
import ebook2 from '../assets/images/ebook2.png';
import ebook3 from '../assets/images/ebook3.png';
import ebook4 from '../assets/images/ebook4.png';


const Ebooks = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  const ebooksData = [
    {
      title: "ChatGPT: Guide to AI Conversations",
      description: "Learn how to use ChatGPT for automating interactions and boosting business strategies.",
      detail: "Covers prompt engineering, ChatGPT's features, ethical uses, and integration into projects.",
      price: "19.99",
      image: ebook1
    },
    {
      title: "Dispute Letter Library",
      description: "Templates and tips for crafting effective dispute letters in various scenarios.",
      detail: "Customize letters for disputing credit report errors, billing discrepancies, and more.",
      price: "14.99",
      image: ebook2
    },
    {
      title: "100+ Dispute Reasons",
      description: "A comprehensive list of over 100 reasons to dispute errors on your credit report.",
      detail: "Explanations for each reason and strategies to support your claims for better outcomes.",
      price: "12.99",
      image: ebook3
    },
    {
      title: "Business Structure & Funding Guide",
      description: "Select the right business structure and explore funding options for your business.",
      detail: "Learn about LLCs, corporations, and partnerships, plus funding options and legal tips.",
      price: "24.99",
      image: ebook4
    }
  ];
  

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    lazyLoad: true,
    infinite: true,
    autoplay:false,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    draggable:false,
    dots: true,
    slidesToShow: 3,
    beforeChange: (current,next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          
        }
      },
    ]
  };

  
   
  
  return (
    <section className="ebooks-section container-fluid">
    <h1 className="ebook-title text-center fw-bold pt-5">Ebooks</h1>
        <div className=" slider-container">
          <Slider {...settings} className="ebook-container ">
          {ebooksData.map((ebook, index) => (
            <div key={index} className={`ebook ${index === imageIndex ? " p-4 rounded-5 ebook-slide ebook-activeSlide" : "ebook-slide" } `}>
              <img
                src={ebook.image}
                alt={`Ebook Image ${index}`}
                className="img-fluid mx-auto"
                style={{
                  width:"250px",
                  height:"250px",
                  objectFit: "contain",
                }}
              />
              <h3 className="text-center">{ebook.title}</h3>
              <div className=" ebook-detail mx-auto ">
                <p>{ebook.description}</p>
                <p>{ebook.detail}</p>
                <div className="d-flex align-items-center justify-content-between my-auto">
                  <span className="ebook-price">{`$${ebook.price}`}</span>
                  <button className="btn ebook-btn">Buy</button>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
    </section>
  )
}

export default Ebooks