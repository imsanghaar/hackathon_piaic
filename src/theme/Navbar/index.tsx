import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when navigating to a different page
  useEffect(() => {
    setShowDropdown(false);
  }, [location.pathname]);

  return (
    <>
      <Navbar {...props} />
      <div className="navbar-under-dev" ref={dropdownRef}>
        <button 
          className={clsx("under-dev-button", { "active": showDropdown })} 
          onClick={() => setShowDropdown(!showDropdown)}
          aria-label="Under Development indicator"
        >
          <span className="dev-circle"></span>
          <span className="dev-text">Under Development</span>
        </button>
        
        {showDropdown && (
          <div className="dev-dropdown">
            <div className="dev-dropdown-content">
              This Book is developed by AI Agents
            </div>
          </div>
        )}
      </div>
    </>
  );
}