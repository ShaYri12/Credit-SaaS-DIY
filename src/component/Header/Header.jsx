import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './header.css'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify';
import { BASE_URL } from '../../utils/config'

const Header = () => {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.querySelector('.navbar');

      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = '0';
      } else {
        navbar.style.top = '-70px';

        // Close the Navbar when scrolling down
        const togglerButton = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('#navbarSupportedContent');

        if (togglerButton.classList.contains('offcanvas')) {
          togglerButton.classList.remove('offcanvas');
          navbarCollapse.classList.remove('show');
        }
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    
    <nav className="navbar shadow navbar-expand-md bg-white rounded-bottom-4 fixed-top ">
  <div className="container ">
    <NavLink className="navbar-brand logo" to="/"><img className='img-fluid' src={Logo} alt="logo"/></NavLink>
    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">SaaS Credit</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body align-item-center" id="navbarSupportedContent">
        <ul id="nav-menu" className="navbar-nav justify-content-center flex-grow-1 gap-2">
          <li className="nav-item mx-auto mx-md-0">
            <a className="nav-link " aria-current="page" href="/#how-it-works">How It Works</a>
          </li>
          <li className="nav-item mx-auto mx-md-0">
            <a className="nav-link" href="/#pricing">Pricing</a>
          </li>
          <li className="nav-item mx-auto mx-md-0">
            <a className="nav-link" href="/#reviews">Reviews</a>
          </li>
          <li className="nav-item mx-auto mx-md-0">
            <NavLink className="nav-link" to="/academy">Academy</NavLink>
          </li>
          <li className="nav-item mx-auto mx-md-0">
            <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
          </li>
          <li className="nav-item mx-auto mx-md-0">
            <NavLink className="nav-link" to="/ebooks">Ebooks</NavLink>
          </li>
          <li className="nav-item mx-auto mx-md-0">
            <NavLink className="nav-link" to="/offers">Offers</NavLink>
          </li>
        </ul>
        
        <div className='mx-auto mx-md-2 d-flex flex-column flex-md-row gap-2'>
          <Link to="/login" className='btn-signin btn btn-primary mx-auto'>Get Started</Link>
        </div>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Header