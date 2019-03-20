import React from 'react';
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

import Style from "./BurgerBuilder.module.css"

const INGREDIENT_PRICES = {
    salad: 1,
    bacon: 5,
    meat: 2,
    cheese: 4
}
class BurgerBuilder
extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ingredients: [
            ],
            totalPrice: 4
        }
        this.onClickLessHandler.bind(this);
        this.onClickMoreHandler.bind(this);
    }

    
    onClickMoreHandler = (type)=>{
        this.setState({
            ingredients: [type, ...this.state.ingredients],
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        });
       
    }
    onClickLessHandler = (type)=>{
        var tempIngredients = [...this.state.ingredients];
        // debugger;
        var index = tempIngredients.indexOf(type);
        if(index < 0) return;
        tempIngredients.splice(index,1)
        this.setState({
            ingredients: tempIngredients,
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]

        })         
    }

    render(){
        return(
            <React.Fragment>
                <Burger ingredients={ [...this.state.ingredients]}/>
                <BuildControls 
                    totalPrice = { this.state.totalPrice }
                    ingredientsAdded={ this.onClickMoreHandler }
                    ingredientsRemoved={ this.onClickLessHandler }
                />
                <button
                className={ Style.OrderButton }
                disabled = { this.state.ingredients.length <= 0 ? true: false }>
                    Order Now
                </button>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;