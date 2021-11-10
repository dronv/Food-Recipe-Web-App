import React, {useEffect, useState} from 'react';
import {Recipe} from './components/Recipe.js'
import './App.css';

function App() {
  const [recipe, setRecipie] = useState([]);
  const [searchitem, setsearchitem] = useState("");
  const [searchQuery , setsearchQuery] = useState("Paneer")
  useEffect(() => {
    loadRecipies();
  },[searchQuery])
  const loadRecipies = async()=>{
   const response = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=Your_APP_ID&app_key=YOUR_APP_KEY`)
   const data = await response.json();
   setRecipie(data.hits);
  }

  const SearchItem = e => {
    setsearchitem(e.target.value);
  }

  const onClickSearch = ()=>{
    setsearchQuery(searchitem);
    setsearchitem("");
  }
  return (
    <div>
      <div className="header" >
      <h1>  I'M FOODIE </h1>
      </div>
      <div className="search-bar">
        <input className="search-input" value={searchitem} onChange={SearchItem} placeholder=" EG: Chicken, Rice, Strawberry"/>
        <button className="search-button" onClick={onClickSearch}>
        Search Food Recipes
          </button>
          
      </div>
    <div className="Recipie-item">
      {
        recipe.map(recipe=>
          <Recipe title={recipe.recipe.label} image ={recipe.recipe.image} ingredients={recipe.recipe.ingredientLines} />)
      }
    </div>
    <div className="footer">
      <p className="apiName">Recipies By: edamam.com</p>
       </div>
    </div>
  );
  }
export default App;
