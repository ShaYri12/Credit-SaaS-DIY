import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/home.css'
import Brows_reviews from '../shared/Brows_reviews.jsx'
import Our_Partners from '../shared/Our_Partners.jsx'
import joinImg from "../assets/images/join.png"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

// Function to animate the count
function animateCount(element) {
  const targetCount = parseInt(element.getAttribute('data-count'), 10);
  let currentCount = 0;
  const duration = 3000; // Animation duration in milliseconds

  // Calculate the increment for each frame
  const increment = targetCount / (duration / 16);

  // Function to update the count
  function updateCount() {
      if (currentCount < targetCount) {
          currentCount += increment;
          element.textContent = Math.floor(currentCount);
          requestAnimationFrame(updateCount);
      } else {
          // Ensure the count reaches the target count exactly
          element.textContent = targetCount;
      }
  }

  // Start the animation
  requestAnimationFrame(updateCount);
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Event handler for scroll events
function handleScroll() {
  document.querySelectorAll('.counting').forEach((element) => {
      if (isInViewport(element)) {
          animateCount(element);
          // Remove this element from future scroll checks
          element.classList.remove('counting');
      }
  });
}

// Set up scroll event listener
useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  // Clean up event listener when component unmounts
  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

//auto scrolling to section
const location = useLocation();

useEffect(() => {
  const scrollToSection = () => {
    const hash = location.hash;
    if (hash) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  scrollToSection();

}, [location]);

  return (
    <div data-bs-spy="scroll" data-bs-target="#nav-menu">
    {/* ====================================== Hero Section Start ====================================== */}
    
    <div className='starting'>
    <section className='hero-section mt-3 pb-0'>
  <div className='container-fluid'>
    <div className='row justify-content-center'>
      <div className='hero-text text-center col-md-7 col-12 pt-2'>
        <h1>Take Control of Your Credit: Fast and Effective Solutions</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies.
        </p>
        <div className='gap-2 d-flex justify-content-center'>
          <Link to="/login" className='signup-btn btn btn-primary'>Create Free Account</Link>
          <Link to="/login" className='login-btn btn btn-primary'>Login Now</Link>
        </div>
        <p className='pt-3'>7-Day Free Trial | Improve Your Credit Scores</p>
      </div>
      
    </div>
    </div>
    </section>
    <div className="custom-shape-divider-bottom-1713549133">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>
    </div>

    {/* ====================================== Hero Section End ====================================== */}

    {/* ====================================== How It Works Section Start ====================================== */}
    <section className="how-it-work py-5 text-white" id="how-it-works">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="fw-bold work-heading text-white">How It Works</h1>
                    <div className='heading-line-white mb-3'></div>
                    <p className="mx-auto lead">Our SaaS platform makes it easy to manage your business operations. Here's a quick overview of how it works.</p>
                </div>
                <div className="row gap-3 align-items-center justify-content-center py-5">
                    <div className="work-box shadow-lg col-sm-6 col-lg-3 mb-4">
                        <div className="d-flex align-items-start">
                            <div className="icon me-3">
                                <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bi bi-icon h-4 w-4 text-secondary">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="h5">Connect Your Data</h3>
                                <p className='work-para'>Integrate your existing tools and data sources to get a complete view of your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="work-box shadow-lg col-sm-6 col-lg-3 mb-4">
                        <div className="d-flex align-items-start">
                            <div className="icon me-3">
                                <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bi bi-icon h-4 w-4 text-secondary">
                                    <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="h5">Automate Your Processes</h3>
                                <p className='work-para'>Streamline your operations with our powerful automation tools, saving you time and effort.</p>
                            </div>
                        </div>
                    </div>
                    <div className="work-box shadow-lg col-sm-6 col-lg-3 mb-4">
                        <div className="d-flex align-items-start">
                            <div className="icon me-3">
                                <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bi bi-icon h-4 w-4 text-secondary">
                                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="h5">Gain Actionable Insights</h3>
                                <p className='work-para'>Make data-driven decisions with our comprehensive reporting and analytics features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <div className="custom-shape-divider-bottom-1713566199">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
    </div>
    {/* ====================================== How It Works Section End ====================================== */}

    {/* ====================================== Our partners Section Start ====================================== */}
    <div className='partner-section py-5'>
      <h1 className='text-center headings  p-0 m-0'>OUR PARTNERS</h1>
      <div className='heading-line'></div>
      <Our_Partners/>
    </div>
    
    {/* ====================================== Our partners Section End ====================================== */}

    {/* ====================================== Info Section End ====================================== */}
      <div id="sky" className='overflow-hidden shadow-lg'>
      <div className="mountain_btm_left">
      </div>
      <div className="mountain_btm_mid">
      </div>
      <div className="mountain_btm_right">
      </div>
      <div className="overlayerr">
      <div id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
        <div className="container">
          <div className="row align-items-top justify-content-center">
            <div className="col-lg-4 stats mt-0 pt-0">
              <div className="shadow-effect count-number counting" data-count="20057">0</div>
              <h5 className='shadow-effect'>Total DIY Users</h5>
              <p className='shadow-effect-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>


            <div className="col-lg-4 mt-0 pt-0 stats">
              <div className="shadow-effect count-number counting" data-count="1473">0</div>
              <h5 className='shadow-effect'>Total Business Users</h5>
              <p className='shadow-effect-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
            <div className="col-lg-4 mt-0 pt-0 stats">
              <div className="shadow-effect count-number counting" data-count="227523">0</div>
              <h5 className='shadow-effect'>Total Disputes</h5>
              <p className='shadow-effect-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
    <section className='text-section mt-5 shadow-lg'>
      <div className="container ">
      <div className='row  px-3 align-items-center justify-content-center'>
        <div className="col-md-6 col-12">
          <h1 className='join-text headings text-center pt-5'>Ready To Join?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie erat nec volutpat mollis. Duis turpis justo, tincidunt id cursus et, rutrum vel sapien. Sed in tortor leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sit amet ornare tortor, sed vehicula diam.</p>
            <Link to="/login" className='btn btn-get-started'>GET STARTED</Link>    
        </div>
          <div className="col-md-6 col-12">
            <img className='join-img img-fluid' src={joinImg}/>
          </div>
        </div>
        
      </div>
    </section>
  {/* ====================================== Info Section End ====================================== */}

    {/* ====================================== Pricing Section Start ====================================== */}
        <section className='pricing-section' id="pricing">
      <span>choose a right pack</span>
      <h1 className='pricing-title'>our flexible pricing plans</h1>
      <div className="cards">
        <div className="card card--purple shadow">
          <div className="card__outer">
            <div className="card__inner">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="title">starter pack</p>
              <p className="price"><span className="price price--number"><span className="price price--dolar">$</span>29</span></p>

              <ul>
                <li>first advantage</li>
                <li>second advantage</li>
                <li>third advantage</li>
              </ul>
            </div>
            <a href="#">get started now  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="card card--red shadow">
          <div className="card__outer">
            <div className="card__inner">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                </svg>
              </span>
              <p className="title">enterprise pack</p>
              <p className="price"><span className="price price--number"><span className="price price--dolar">$</span>49</span></p>

              <ul>
                <li>first advantage</li>
                <li>second advantage</li>
                <li>third advantage</li>
                <li>fourth advantage</li>
              </ul>
            </div>
            <a href="#">get started now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="card card--green shadow">
          <div className="card__outer">
            <div className="card__inner">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                </svg>
              </span>
              <p className="title">premium pack</p>
              <p className="price"><span className="price price--number"><span className="price price--dolar">$</span>89</span></p>

              <ul>
                <li>first advantage</li>
                <li>second advantage</li>
                <li>third advantage</li>
              </ul>
            </div>
            <a href="#">get started now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* ====================================== Pricing Section End ====================================== */}

    {/* ====================================== Reviews Section Start ====================================== */}
    
      <Brows_reviews/>
      <div className="custom-shape-divider-top-1713565277">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
  </div>
    {/* ====================================== Reviews Section End ====================================== */}
    </div>
  )
}

export default Home