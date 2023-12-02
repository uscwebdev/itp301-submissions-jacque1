import React from 'react';

export default function SigDrink(props) {
  return (
    <div className="drink">
      <img className={props.imageClass} 
      src={props.imageSrc} alt={props.alt} />
      <h5>{props.drinkName}</h5>
      <p className="ingre">{props.ingredient}</p>
      <div>
        <p className="sigprice">${props.price}</p>
      </div>
    </div>
  );
}