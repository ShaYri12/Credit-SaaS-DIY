import React, { useState, useRef, useEffect } from 'react';
import '../styles/academy.css';
import academyImg from "../assets/images/academy.png"
import AcademyFilter from '../shared/AcademyFilter';


const courses = [
    {
        title: "Credit Repair Basics",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Credit Repair Basics",
        category: "Credit Repair",
        instructor: "SaaSCredit",
        price: null,
        avgRating: 4.5,
        ratings: 10,
    },
    {
        title: "Building Your Credit Repair Empire",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Building Your Credit Repair Empire",
        category: "Credit Repair",
        instructor: "Keliah LaCour",
        price: 14.97,
        avgRating: 5,
        ratings: 7,
    },
    {
        title: "Dealing With Creditors",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Dealing With Creditors",
        category: "Credit Repair",
        instructor: "SaaSCredit",
        price: 4.97,
        avgRating: 4,
        ratings: 30,
    },
    // Add more dummy courses
    {
        title: "Advanced Financial Planning",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Advanced Financial Planning",
        category: "Finance",
        instructor: "Jordan Smith",
        price: 19.99,
        avgRating: 4.8,
        ratings: 25,
    },
    {
        title: "Cryptocurrency Basics",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Cryptocurrency Basics",
        category: "Finance",
        instructor: "Alice Williams",
        price: 12.99,
        avgRating: 4.3,
        ratings: 40,
    },
    {
        title: "Investment Strategies for Beginners",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Investment Strategies for Beginners",
        category: "Finance",
        instructor: "John Baker",
        price: 7.99,
        avgRating: 4.1,
        ratings: 50,
    },
    {
        title: "Real Estate Mastery",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Real Estate Mastery",
        category: "Real Estate",
        instructor: "Ellen Johnson",
        price: 24.99,
        avgRating: 4.9,
        ratings: 15,
    },
    {
        title: "Tax Preparation 101",
        imageSrc: "https://production-creditfixrr-1930.nyc3.digitaloceanspaces.com/3081/e6a38425-75a5-44f6-a75c-2b277efd684b.mp4",
        altText: "Tax Preparation 101",
        category: "Finance",
        instructor: "David Miller",
        price: 9.99,
        avgRating: 4.2,
        ratings: 28,
    },
    
];

const CourseCard = ({ title, imageSrc, altText, category, instructor, price, avgRating, ratings }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        const videoElement = videoRef.current;
        videoElement.play();
        setIsPlaying(true);
    };

    return (
        <div className="card shadow-lg course-card">
            <div className="video-wrapper" >
                <video
                    ref={videoRef}
                    className="card-img-top rounded-top video"
                    controls={isPlaying}
                    
                >
                    <source src={imageSrc} type="video/mp4" />
                    {altText}
                </video>
                {!isPlaying && (
                    <button className="play-button" onClick={handlePlay}>▶</button>
                )}
            </div>
            <div className="card-body course-card-body">
                <div className="d-flex justify-content-between mb-2 my-auto">
                    <div className="category-text my-auto small">{category}</div>
                    <div className="rating my-auto">
                        {avgRating}<i className="ri-star-s-fill"></i> ({ratings})
                    </div>
                </div>
                <h5 className="card-title font-weight-bold">{title}</h5>
                <p className="card-text text-muted">Instructor: {instructor}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className={price ? "price-text" : "text-success"}>
                        {price ? `$${price}` : "Free"}
                    </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-success btn-buy"><i class="ri-shopping-bag-fill"></i> Buy Now</button>
                    <button className="btn btn-outline-secondary btn-preview my-auto"><i class="ri-eye-fill"></i> Preview</button>
                </div>
            </div>
        </div>
    );
};




const Academy = () => {
    useEffect(() => {
        window.scrollTo(0, -1);
      }, []);

    function toggleShow () {
        var el = document.getElementById("box");
        el.classList.toggle("show-search");
      }
    return (
        <section className='academy-section'>
            <div className='container academy-intro'>
                <div className='row d-flex align-items-center shadow rounded-4'>
                    <div className='col-md-6 col-12'>
                        <img src={academyImg} className='img-fluid academy-img'/>
                    </div>
                    <div className='col-md-6 col-12 pb-5'>
                        <h1 className='academy-title'>Credit Education & Financial Literacy</h1>
                        <p className='text-muted'>Browse our online courses designed to help you master your credit journey.</p>
                        <div class="search-container shadow">
                            <input type="text" id="box" placeholder="Search courses..." class="search__box"/>
                            <i class="ri-search-line search__icon" id="icon" onClick={toggleShow}></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h2 className="mt-5">All Courses</h2>
                        <p className="mb-4">Total 6 courses you have purchased</p>
                    </div>
                    
                    <AcademyFilter />      
                </div>
                <div className="row d-flex align-items-start academy-cards">
                    {courses.map((course, index) => (
                        <div key={index} className="card-col col-md-4 col-sm-6 col-12 mb-4">
                            <CourseCard
                                title={course.title}
                                imageSrc={course.imageSrc}
                                altText={course.altText}
                                category={course.category}
                                instructor={course.instructor}
                                price={course.price}
                                avgRating={course.avgRating}
                                ratings={course.ratings}
                            />
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
    );
};

export default Academy;
