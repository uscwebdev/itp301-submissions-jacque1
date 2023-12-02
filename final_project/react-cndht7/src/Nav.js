import React, { useRef } from 'react';

const Nav = ({ aboutRef, signatureRef, searchRef }) => {
  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="Navbar">
      <ul>
        <li onClick={() => scrollToSection(aboutRef)} className="link">
          About
        </li>
        <li onClick={() => scrollToSection(signatureRef)} className="link">
          Signature
        </li>
        <li onClick={() => scrollToSection(searchRef)} className="link">
          Search
        </li>
      </ul>
    </div>
  );
};

export default Nav;
