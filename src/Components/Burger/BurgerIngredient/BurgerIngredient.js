import React from 'react';
import PropTypes from 'prop-types';

import Style from './BurgerIngredient.module.css'

class BurgerIngredient
extends React.Component{
    
    render(){
        return this.renderIngredient(this.props.type)
    }
    
    renderIngredient (type) {
        switch (type){
            case ("bread-bottom"):
                return <div className={ Style.BreadBottom }></div>
            case ("bread-top"):
                return (
                    <div className={ Style.BreadTop }>
                        <div className={ Style.Seeds1 }></div>
                        <div className={ Style.Seeds2 }></div>
                    </div>
                );
            case ("meat"):
                return <div className={ Style.Meat }></div>
            case ("cheese"):
                return <div className={ Style.Cheese }></div>
            case ("salad"):
                return <div className={ Style.Salad }></div>
            case ("bacon"):
                return <div className={ Style.Bacon }></div>
            default:
                    return null;
        }
    }
}

BurgerIngredient.protoType = {
    type: PropTypes.string,
}
export default BurgerIngredient