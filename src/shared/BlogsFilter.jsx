import React, { useEffect, useRef, useState } from "react";
import './filter.css'

const BlogsFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState('bottom');
    const [activeFilter, setActiveFilter] = useState('All Blogs');
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
              activeFilter === "All Blogs" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("All Blogs")}
          >
            All Blogs
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "New Features" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("New Features")}
          >
            New Features
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Improved Features" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Improved Features")}
          >
            Improved Features
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Fixed Features" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Fixed Features")}
          >
            Fixed Features
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Credit SaaS" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Credit SaaS")}
          >
            Credit SaaS
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Credit Repair Tips" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Credit Repair Tips")}
          >
            Credit Repair Tips
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "FCRA" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("FCRA")}
          >
            FCRA
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${
              activeFilter === "Fixing Credit" ? "active" : ""
            }`}
            href="#"
            onClick={() => handleFilterClick("Fixing Credit")}
          >
            Fixing Credit
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogsFilter;
