import React, { useEffect } from 'react'
import '../styles/blogs.css'
import { Link } from 'react-router-dom'
import BlogsFilter from '../shared/BlogsFilter';

import blogImg1 from '../assets/images/blog-img1.png'
import blogImg2 from '../assets/images/blog-img2.png'
import blogImg3 from '../assets/images/blog-img3.png'

const cardsData = [
  {
    categories: ["Financial","New","Improved"],
    date: "June 12, 2023",
    comments: 10,
    title: "Saving for the Future: Building a Solid Financial Foundation",
    description: "Explore different methods and tips to save money and build a solid financial future.",
    image: blogImg1
  },
  {
    categories: ["Credit Repair Tips","Fixing Credit"],
    date: "May 28, 2023",
    comments: 5,
    title: "Credit Score Myths Debunked: What You Need to Know",
    description: "Separate fact from fiction when it comes to common credit score myths.",
    image: blogImg2
  },
  {
    categories: ["Business Credit"],
    date: "July 5, 2023",
    comments: 14,
    title: "Securing Business Credit: A Step-by-Step Guide",
    description: "A comprehensive guide to help you understand and secure business credit for your company.",
    image: blogImg3
  },
  {
    categories: ["Financial","Fixing Credit"],
    date: "June 25, 2023",
    comments: 7,
    title: "Building Wealth Through Smart Investments",
    description: "Learn how to make smart investment decisions that lead to wealth building over time.",
    image: blogImg2
  },
  {
    categories: ["Finance","New","Improved"],
    date: "August 3, 2023",
    comments: 20,
    title: "Travel Hacking: Maximizing Rewards and Points",
    description: "Get the most out of your travel rewards and points with these travel hacking tips.",
    image: blogImg3
  },
  {
    categories: ["Budgeting","Fixed Features"],
    date: "July 18, 2023",
    comments: 15,
    title: "Creating a Personal Budget: Tips for Financial Success",
    description: "Learn how to create and stick to a personal budget for long-term financial success.",
    image: blogImg1
  },
  {
    categories: ["Loan Management"],
    date: "September 10, 2023",
    comments: 8,
    title: "Managing Debt: Strategies for Financial Freedom",
    description: "Discover strategies for managing debt and achieving financial freedom.",
    image: blogImg1
  },
  {
    categories: ["Investment Tips","New","Improved"],
    date: "August 15, 2023",
    comments: 11,
    title: "Investing 101: Getting Started in the Stock Market",
    description: "A beginner's guide to investing in the stock market and building a successful portfolio.",
    image: blogImg2
  },
];


const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, -1);
  }, []);

  function toggleShow () {
    var el = document.getElementById("box");
    el.classList.toggle("show-search");
  }
  return (
    <section className='blog-section'>
      <div className='container-fluid  blogs-intro pt-5 pb-0 '>
        <div className="text-center mb-5">
          <h1 className="blog-title">Your hub for credit insights</h1>
          <p className="text-muted mx-auto">
            Get updates on new features and answers to your questions, enhancing your credit journey.
          </p>
        </div>
      </div>
        <div className="container ">
          <div className="d-flex align-items-center justify-content-between mb-4 gap-2">
            <div className='search-box'>
              <div class="search-container shadow">
                  <input type="text" id="box" placeholder="Search blogs..." class="search__box"/>
                  <i class="ri-search-line search__icon" id="icon" onClick={toggleShow}></i>
              </div>
            </div>
            <BlogsFilter/>
        </div>

        <div className="row align-items-start mx-auto">
          {cardsData.map((card, index) => (
            <div key={index} className="blogs-col col-md-4 col-sm-6 mb-4">
              <div className="card blog-card shadow">
                <Link to="#">
                  <div className="blog-img card-header p-0">
                    <img
                      src={card.image}
                      alt="Blog cover image"
                      className="card-img-top"
                    />
                    <span className='category d-flex flex-wrap gap-1 mb-2'>
                    {card.categories.map((category, idx) => (
                      <span key={idx} className='blog-category-text me-1'>
                        {category}
                      </span>
                    ))}
                  </span>
                  </div>
                </Link>
                <div className="card-body blog-card-body w-100">
                  <Link to="#"><h5 className="card-title">{card.title}</h5></Link>
                  
                
                  <div className="d-flex justify-content-between text-muted">
                    <span>{card.date}</span>
                    <p className="card-text">1 hour ago</p>
                  </div>
                  <div className='card-end-text d-flex justify-content-between align-items-center pt-2'>
                    <span className='text-muted'><i class="ri-chat-1-line"></i> {card.comments} comments</span>
                    <Link to="#" className="btn-link">
                      Read more
                      <i class="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <div class="pagination p1">
            <ul className='d-flex align-items-center'>
            <a href="#" className='next-page my-auto py-auto'><li>{"<"}</li></a>
            <a class="is-active" href="#"><li>1</li></a>
            <a href="#"><li>2</li></a>
            <a href="#"><li>3</li></a>
            <a href="#"><li>4</li></a>
            <a href="#"><li>5</li></a>
            <a href="#"><li>6</li></a>
            <a href="#" className='prev-page'><li>{">"}</li></a>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Blogs