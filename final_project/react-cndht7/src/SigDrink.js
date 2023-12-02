import React from 'react';
import SigDrink from './SignatureList.js';

const SigDrinkCollection = () => (
  <div className="sigdrink">
    <SigDrink
      imageSrc="https://mixthatdrink.com/wp-content/uploads/2009/03/mojito-scaled-1364x2048.jpg"
      alt="mojito"
      drinkName="Mojito"
      ingredient="Rum, Lime, Mint, Soda Water"
      price="10"
    />
    <SigDrink
      imageSrc="https://mixthatdrink.com/wp-content/uploads/2023/06/planters-punch-cocktail-scaled-1365x2048.jpg"
      alt="punch"
      drinkName="Planters Punch"
      ingredient="Rum, Orange/Pineapple Juice, Grenadine, Syrup, Angostura Bitters"
      price="14"
    />
    <SigDrink
      imageSrc="https://mixthatdrink.com/wp-content/uploads/2013/02/french-martini-scaled-scaled-1366x2048.jpg"
      alt="martini"
      drinkName="French Martini"
      ingredient="Vodka, Raspberry Liqueur, Pineapple Juice"
      price="9"
    />
    <SigDrink
      imageSrc="https://mixthatdrink.com/wp-content/uploads/2023/06/bramble-cocktail-scaled-1366x2048.jpg"
      alt="bramble"
      drinkName="Bramble cocktail"
      ingredient="Gin, Lemon Juice, Creme De Mure"
      price="12"
    />
  </div>
);

export default SigDrinkCollection;
