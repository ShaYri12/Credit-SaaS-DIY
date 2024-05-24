import React from 'react';
import "./Brows_reviews.css";
import Reviews from "./Reviews_data.jsx";
import Marquee from "react-fast-marquee";
import starImg from '../assets/images/star.png'
// import Slider from "react-slick";

function Brows_reviews() {
  var settings = {
      speed:50,
      pauseOnHover:true,
      
  };
  
  return (
    <div id="reviews">
    <div class="custom-shape-divider-bottom-1713565881">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
    <div className="reviews-section">
      <h1 className="common-heading text-center text-white pt-5"> What People Say</h1>
      <div className='heading-line-white mb-3'></div>
      <Marquee {...settings}  direction="right">
      {Reviews.map((reviews)=>(
        
                <div key={reviews.id}  className="card-body border border-2 bg-light shadow rounded-2 mx-2">
                  <div className="pt-3 ps-3 d-flex flex-row align-item-start justify-content-start">
                      <div className="ms-3 d-flex flex-column align-item-center justify-content-start">
                        <h6 className="profile-name d-flex justify-content-start">{reviews.name}</h6>
                        {(() => {
                          switch (reviews.stars) {
                            case 1:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 2:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 3:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 4:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 5:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            default:
                              return null;
                          }
                        })()}
                          </div>
                      </div>
                      <div className="d-flex mt-2 pt-2 align-item-center justify-content-arround">
                        <span className="review text-wrap pb-3 ps-3">"{reviews.review}</span>
                      </div>
                </div>
              
        ))}
      </Marquee>

      <Marquee {...settings} className="mt-4">
      {Reviews.map((reviews)=>(
        
                <div key={reviews.id}  className="card-body bg-light border border-2 shadow rounded-2 mx-2">
                  <div className="pt-3 ps-3 d-flex flex-row align-item-start justify-content-start">
                      <div className="ms-3 d-flex flex-column align-item-center justify-content-start">
                        <h6 className="profile-name d-flex justify-content-start">{reviews.name}</h6>
                        {(() => {
                          switch (reviews.stars) {
                            case 1:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 2:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 3:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 4:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            case 5:
                              return (
                                <>
                                  <div className='stars d-flex'>
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                    <img className="star img-fluid" src={starImg} alt="Star" />
                                  </div>
                                </>
                              );
                            default:
                              return null;
                          }
                        })()}
                          </div>
                      </div>
                      <div className="d-flex mt-2 pt-2 align-item-center justify-content-arround">
                        <span className="review text-wrap pb-3 ps-3">"{reviews.review}</span>
                      </div>
                </div>
              
        ))}
      </Marquee>
      </div>
      </div>
  );
}

export default Brows_reviews;