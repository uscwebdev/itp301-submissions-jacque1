import React, { useState } from 'react';
import $ from 'jquery';
import Cocktail from './Cocktail';

export default function CocktailSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      alert('Search term is empty');
      return;
    }

    $.ajax({
      url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      dataType: 'json',
      success: function (data) {
        setResults(data.drinks || []); 
        setSearchTerm('');
      },
      error: function (error) {
        alert(error);
      },
    });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.currentTarget.value);
  };
  const addToFavorites = (cocktail) => {
    // Check if the cocktail is already in favorites
    const isAlreadyInFavorites = favorites.some((fav) => fav.idDrink === cocktail.idDrink);
  
    if (!isAlreadyInFavorites) {
      setFavorites([...favorites, cocktail]);
    } else {
      alert('Cocktail selected is already in your favorites.');
    }
  };

  return (
    <div>
      <div className="search">
        <form id="search-form" onSubmit={handleSubmit}>
          <label htmlFor="search-term">Search:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Cocktails on your mind..."
            value={searchTerm}
            onChange={handleInputChange}
            name="name"
            id="name"
          />
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>
        <div className="results">
          Showing <span id="num-results">{results.length}</span> result(s).
        </div>
      </div>
      <div className="cocktails-form">
          {results.map((cocktail) => (
            <div  key={cocktail.idDrink}>
              <Cocktail
                image={cocktail.strDrinkThumb}
                name={cocktail.strDrink}
                id={cocktail.idDrink}
                addToFavorites={() => addToFavorites(cocktail)}
              />
            </div>
          ))}
            
      </div>

      <div className="favorites">
        <h4>---My Favorite Cocktails---</h4>
        {favorites.map((favorite) => (
          <div key={favorite.idDrink} className="cocktail-item">
            <img src={favorite.strDrinkThumb} alt={favorite.strDrink} />
            <h5 className="fav-drink">{favorite.strDrink}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
