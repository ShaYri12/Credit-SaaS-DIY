import React, { useEffect, useRef, useState } from "react";
import './filter.css'

const AcademyFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState('bottom');
    const [activeFilter, setActiveFilter] = useState('All Courses');
    const dropdownRef = useRef(null);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        setIsOpen(false); // Close the dropdown after selecting a filter
      };

    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Add the event listener for handling clicks outside the dropdown
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Determine the dropdown position (top or bottom) based on available space
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - dropdownRect.bottom;
            const spaceAbove = dropdownRect.top;
            
            // Update position based on available space
            if (spaceBelow >= 100) {
                setPosition('bottom');
            } else if (spaceAbove >= 100) {
                setPosition('top');
            }
        }
    }, [isOpen]);
  return (
    <div className="dropdown filter-dropdown" ref={dropdownRef}>
      <button
        className="btn btn-secondary w-100"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <span className="d-flex justify-content-between">
          {activeFilter}
          <i className="ri-filter-line"></i>
        </span>
      </button>
      <ul
        className={`dropdown-menu ${position === "top" ? "dropup" : ""}`}
        aria-labelledby="dropdownMenuButton"
      >
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "All Courses" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("All Courses")}
          >
            All Courses
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Credit" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Credit")}
          >
            Credit
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Credit Repair" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Credit Repair")}
          >
            Credit Repair
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Financial Literacy" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Financial Literacy")}
          >
            Financial Literacy
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Credit Cards" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Credit Cards")}
          >
            Credit Cards
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Business Credits" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Business Credits")}
          >
            Business Credits
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Loans" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Loans")}
          >
            Loans
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Travel Hacking" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Travel Hacking")}
          >
            Travel Hacking
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AcademyFilter;
