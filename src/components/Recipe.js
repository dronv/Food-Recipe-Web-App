import React from "react";

export function Recipe({title,image,ingredients}){
        return(
            <div className="Recipe-item"> 
            <div className="Recipe-title">{title}</div>
            <div className="Recipe-ingredients-title"> Ingredients:
            <div className="Ingredients-List">
            {ingredients}           
            </div>
            </div>
            <img src={image} alt={title} className="Recipe-image"/>
            </div>
            
        );
    }