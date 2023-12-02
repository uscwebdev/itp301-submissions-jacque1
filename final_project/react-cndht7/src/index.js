import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CocktailSearch from './CocktailSearch.js';
import SigDrinkCollection from './SigDrink.js';
import Intro from './intro.js';
import Nav from './Nav.js';

const root = createRoot(document.querySelector('#root'));

const NaviBar = () => {
  const aboutRef = useRef(null);
  const signatureRef = useRef(null);
  const searchRef = useRef(null);
  const [favorites, setFavorites] = useState([]);


  return (
    <React.StrictMode>
      <div>
        <div className="Navbar">
          <Nav aboutRef={aboutRef} signatureRef={signatureRef} searchRef={searchRef} />
        </div>
        <h1>Welcome to Reality Bar</h1>
        <div ref={aboutRef}>
          <Intro />
        </div>
        <hr/>
        
        <div ref={signatureRef} >
          <h2>Our Signature</h2>
          <div>
          <SigDrinkCollection />
          </div>
        </div>

        <hr />
        <div ref={searchRef}>
          <div>
            <h2>Cocktail Search</h2>
          </div>
            <CocktailSearch />
        </div>
        <br />
        <br />
        <br />

        <div className="footer">
          <p>All rights reserved. Jacquelyn Li @USC 2023</p>
        </div>
      </div> 
    </React.StrictMode>
  );
};

root.render(<NaviBar />);
