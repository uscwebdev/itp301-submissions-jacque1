import React from 'react';

export default function Cocktail({ image, name, addToFavorites }) {
  return (
    <article>
        <div className='img-container'>
          <img src={image} alt={name} />
          <h5>{name}</h5>
          <button className="btn-fav" onClick={addToFavorites}>💟 add to fav</button>
        </div>   
    </article>
  );
}
