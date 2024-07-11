// components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
// import styles from './ScrollToTopButton.module.css'; // Create a CSS module for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    //     <a id="scrollToTopBtn" className="progress-wrap">
    //     <i className="fa-regular fa-arrow-up-from-bracket"></i>
    //   </a>

    <a
      type="button"
      onClick={scrollToTop}
      id="scrollToTopBtn"
      className={`progress-wrap ${isVisible ? 'show' : ""}`}
    >
      <i className="fa-regular fa-arrow-up-from-bracket"></i>
    </a>
  );
};

export default ScrollToTopButton;
