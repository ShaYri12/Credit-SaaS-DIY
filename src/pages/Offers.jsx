import React, { useEffect, useState } from 'react';
import financeImg from '../assets/images/offer-hero-img.svg';
import '../styles/offers.css';
import Financial from '../shared/Financial';

import cardimg1 from '../assets/images/chime-credit.png'
import cardimg2 from '../assets/images/destiny-mastercard.png'
import cardimg3 from '../assets/images/upgrade-triple.png'
import cardimg4 from '../assets/images/reflex-mastercard.png'
import cardimg5 from '../assets/images/opensky-plus.png'
import { Link } from 'react-router-dom';

import cfpImg1 from '../assets/images/lemonade-circle.svg'
import cfpImg2 from '../assets/images/nationwide-circle.svg'
import cfpImg3 from '../assets/images/lendingclub-circle.svg'
import cfpImg4 from '../assets/images/upgrade-circle.svg'
import cfpImg5 from '../assets/images/ally-circle.svg'
import cfpImg6 from '../assets/images/sofi-circle.svg'
import cfpImg7 from '../assets/images/bbva-circle.svg'
import cfpImg8 from '../assets/images/citi-circle.svg'
import cfpImg9 from '../assets/images/penfed-circle.svg'

const Offers = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleShow = () => {
    setSearchVisible((prev) => !prev);
  };

  const companiesData = [
    {
      id: 1,
      imageSrc: cfpImg1,
      altText: 'Company 1',
    },
    {
      id: 2,
      imageSrc: cfpImg2,
      altText: 'Company 2',
    },
    {
      id: 3,
      imageSrc: cfpImg3,
      altText: 'Company 3',
    },
    {
      id: 4,
      imageSrc: cfpImg4,
      altText: 'Company 4',
    },
    {
      id: 5,
      imageSrc: cfpImg5,
      altText: 'Company 5',
    },
    {
      id: 6,
      imageSrc: cfpImg6,
      altText: 'Company 6',
    },
    {
      id: 7,
      imageSrc: cfpImg7,
      altText: 'Company 7',
    },
    {
      id: 8,
      imageSrc: cfpImg8,
      altText: 'Company 8',
    },
    {
      id: 9,
      imageSrc: cfpImg9,
      altText: 'Company 9',
    },
    {
      id: 10,
      imageSrc: cfpImg4,
      altText: 'Company 10',
    },
  ];
  

  return (
    <section className='offers-section'>
      <div className='container offers-intro'>
        <div className='row d-flex align-items-center rounded-4'>
          <div className='col-md-6 col-12 pt-5 px-4'>
            <h1 className='offers-title'>Revolutionize Your Finances</h1>
            <p className='text-muted'>Start making smart financial decisions with our tools.</p>
            <div className={`search-container shadow ${searchVisible ? 'show-search' : ''}`}>
              <input type="text" placeholder="Search for category..." className="search__box" />
              <i className="ri-search-line search__icon" onClick={toggleShow} />
            </div>
            <div className='pt-4 d-flex align-items-center flex-column flex-md-row gap-3'>
            <span className='fw-bold fs-5'>Compare:</span>
            
            <div className='d-flex gap-2 flex-wrap justify-content-center justify-content-md-start'>
              {/* Credit Card Dropdown */}
              <div className='btn-group'>
                <button className='btn btn-secondary compare-btn dropdown-toggle' type='button' id='creditCardDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
                  Credit Card
                </button>
                <ul className='dropdown-menu compare-dropdown' aria-labelledby='creditCardDropdown'>
                  <li><a className='dropdown-item' href='#'>Business Credit Cards</a></li>
                  <li><a className='dropdown-item' href='#'>Personal Credit Cards</a></li>
                </ul>
              </div>
            
              {/* Loan Dropdown */}
              <div className='btn-group'>
                <button className='btn btn-secondary compare-btn dropdown-toggle' type='button' id='loanDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
                  Loan
                </button>
                <ul className='dropdown-menu compare-dropdown' aria-labelledby='loanDropdown'>
                  <li><a className='dropdown-item' href='#'>Auto Loans</a></li>
                  <li><a className='dropdown-item' href='#'>Business Loans</a></li>
                  <li><a className='dropdown-item' href='#'>Personal Lines of Credit</a></li>
                  <li><a className='dropdown-item' href='#'>Private Student Loans</a></li>
                </ul>
              </div>
            
              {/* Insurance Dropdown */}
              <div className='btn-group'>
                <button className='btn btn-secondary compare-btn dropdown-toggle' type='button' id='insuranceDropdown' data-bs-toggle='dropdown' aria-expanded='false'>
                  Insurance
                </button>
                <ul className='dropdown-menu compare-dropdown' aria-labelledby='insuranceDropdown'>
                  <li><a className='dropdown-item' href='#'>Auto Purchase</a></li>
                  <li><a className='dropdown-item' href='#'>Auto Insurance</a></li>
                  <li><a className='dropdown-item' href='#'>Auto Refinance</a></li>
                  <li><a className='dropdown-item' href='#'>Renters Insurance</a></li>
                </ul>
              </div>
            </div>
          </div>          
          </div>
          <div className='col-md-6 col-12 pt-md-4 pt-0'>
            <img src={financeImg} className='img-fluid offers-img' alt="Financial tools" />
          </div>
        </div>
      </div>
      <div className='financial-logos'>
        <Financial />
      </div>

      <div className="bg-light" style={{ backgroundColor: '#f0f2f5' }}>
      <div className="container mx-auto py-5">
        <h1 className="text-center display-4 font-bold text-dark mb-4">
          Manage Your Finances Responsibly
        </h1>
        <p className="text-center lead mb-4">
          Financial decisions can be stressful. Here's how our platform makes them easy and puts you in charge.
        </p>

        <h2 className="text-center h4 font-semibold text-dark mb-4">
          Compare Financial Products
        </h2>
        <p className="text-center mb-4">
          Financial comparison shopping. You wouldn't book a flight without comparing options, would you? Why should shopping for financial services be any different? Our service makes financial comparison shopping easy. Compare rates, terms, and features on thousands of financial products and services in one place.
        </p>

        <div className="row row-cols-3  row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-3 justify-content-center">
          {companiesData.map((company) => (
            <div className="col d-flex justify-content-center" key={company.id}>
              <img
                src={company.imageSrc}
                alt={company.altText}
                className="rounded-circle shadow img-fluid img-comapany"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="container p-4">
        <h1 className="financial-category-title fw-bold mb-4 text-center">Popular Financial Categories</h1>
        <div className='financial-category-btns d-flex justify-content-center justify-content-md-end flex-wrap pb-4 gap-2'>
          <button className='btn btn-secondary fc-filter-btn active'>Credit Cards</button>
          <button className='btn btn-secondary fc-filter-btn'>Auto Loan Refinancing</button>
          <button className='btn btn-secondary fc-filter-btn'>Private Student Loans</button>
          <button className='btn btn-secondary fc-filter-btn'>Personal Loans</button>
        </div>
        <FinancialCards />
      </div>
    </section>
  );
};

const FinancialCards = () => {
  const financialCardsData = [
    {
      title: 'Chime secured Credit Builder Visa® Credit Card',
      recommendation: 'Mostly recommended',
      recommendationClass: 'text-success',
      votes: 38,
      imgSrc: cardimg1,
      imgAlt: 'Chime Card'
    },
    {
      title: 'Destiny™ Mastercard® - $500 Credit Line',
      recommendation: 'Strongly recommended',
      recommendationClass: 'text-danger',
      votes: 22,
      imgSrc: cardimg2,
      imgAlt: 'Destiny Card'
    },
    {
      title: 'Upgrade Triple Cash Rewards Card',
      recommendation: 'Strongly recommended',
      recommendationClass: 'text-success',
      votes: 31,
      imgSrc: cardimg3,
      imgAlt: 'Upgrade Card'
    },
    {
      title: 'Reflex® Platinum Mastercard®',
      recommendation: 'Mostly not recommended',
      recommendationClass: 'text-danger',
      votes: 10,
      imgSrc: cardimg4,
      imgAlt: 'Reflex Card'
    },
    {
      title: 'OpenSky® Plus Secured Visa®',
      recommendation: 'Mostly recommended',
      recommendationClass: 'text-success',
      votes: 17,
      imgSrc: cardimg5,
      imgAlt: 'OpenSky Card'
    },
    {
      title: 'Chime secured Credit Builder Visa® Credit Card',
      recommendation: 'Mostly recommended',
      recommendationClass: 'text-success',
      votes: 38,
      imgSrc: cardimg1,
      imgAlt: 'Chime Card'
    },
    {
      title: 'Destiny™ Mastercard® - $500 Credit Line',
      recommendation: 'Strongly recommended',
      recommendationClass: 'text-danger',
      votes: 22,
      imgSrc: cardimg2,
      imgAlt: 'Destiny Card'
    },
    {
      title: 'Upgrade Triple Cash Rewards Card',
      recommendation: 'Strongly recommended',
      recommendationClass: 'text-success',
      votes: 31,
      imgSrc: cardimg3,
      imgAlt: 'Upgrade Card'
    },
    
    {
      title: 'OpenSky® Plus Secured Visa®',
      recommendation: 'Mostly recommended',
      recommendationClass: 'text-success',
      votes: 17,
      imgSrc: cardimg5,
      imgAlt: 'OpenSky Card'
    }
    
  ];

  return (
    <div className="financial-cards-box row d-flex align-items-start pt-5">
      {financialCardsData.map((card, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="financial-card border border-2 p-3 rounded shadow">
            <div className='financial-img '>
              <img src={card.imgSrc} alt={card.imgAlt} className="mb-2 rounded-3 shadow" />
            </div>
            <div className='financial-card-info text-center'>
              <span className='title'>{card.title}</span>
              <p className={`mb-0 ${card.recommendationClass}`}>{card.recommendation}</p>
              <p className="mt-2 mb-0">{card.votes} total votes</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
