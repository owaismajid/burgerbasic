import React from 'react';
import Style from "./Burger.module.css";
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{

    const ingredientList = [...props.ingredients].map((item, index) => 
        <BurgerIngredient
            type={ item } 
            key={ "ingreadient-" + item + index} />
     )

    return (
        <div className={ Style.Burger }>
            <BurgerIngredient type={ "bread-top" } />
            { 
            ingredientList.length > 0 ?
            ingredientList :
            "Please Add ingreadient " 
            }
            <BurgerIngredient type={ "bread-bottom" } />

        </div>
    );
};



export default burger;