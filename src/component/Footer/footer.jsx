import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './footer.css';
import { AuthContext } from '../../context/AuthContext'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  const year = new Date().getFullYear();
  const { user } = useContext(AuthContext);

  return (
    <>
    
    <footer className=" text-center text-lg-start  text-muted footer-section">
        <section className="footer-section pb-1 ">
          
              <footer className="text-center text-lg-start text-muted">
                
                  <div className="container-fluid text-center text-md-start">
                    <div className="row ">              
                        <div className="col-md-3 col-lg-3 footer-logo mx-auto mb-4 mt-2">
                          <img className='img-fluid ' src={logo} alt=""/>
                          <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, lorem ipsum dolor sit amet consectetur adipisicing elit. enim.</p>
                        
                          <div className='social-links d-flex align-itms-center justify-content-md-start justify-content-center gap-4'>
                            <span>
                              <Link to="#"><i className='ri-youtube-line'></i></Link>
                            </span>
                            <span>
                              <Link to="#"><i className='ri-facebook-circle-line'></i></Link>
                            </span>
                            <span>
                              <Link to="#"><i className='ri-instagram-line'></i></Link>
                            </span>
                          </div>
                      </div>
                      <div className="foot-link col-md-2 col-lg-3 mx-auto mb-4 footer-quick-links">
                        <h6 className="text-uppercase footer-heading footer-link-title fw-bold mb-4 ">Quick Links</h6>
                        <p>
                          <a href="/#how-it-works" className="text-reset">How It Works</a>
                        </p>
                        <p>
                          <Link to="/tours" className="text-reset">Academy </Link>
                        </p>
                        <p>
                          <Link to="/about" className="text-reset">Blogs </Link>
                        </p>
                      </div>

                      <div className="foot-link col-md-2 col-lg-3  mx-auto mb-4">
                        <h6 className="footer-link-title text-uppercase fw-bold mb-4 footer-heading">
                        Pages
                        </h6>
                        <p>
                          <a href="/home/#gallery-section" className="text-reset">Ebooks</a>
                        </p>
                        <p>
                          <Link to="/login" className="text-reset">Offers </Link>
                        </p>
                        <p>
                          <Link to="/login" className="text-reset">Register </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                
              </footer>
              </section>
              <div className="copyright col-lg-12 d-flex justify-content-center text-white">
                <p className='my-2'> Copyright {year}, design & develop by Sharjeel. All rights reserved.</p>
              </div>  
      </footer>
      </>
  )
}

export default Footer