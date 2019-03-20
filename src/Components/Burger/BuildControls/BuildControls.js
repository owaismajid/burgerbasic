import  React  from 'react';
import Style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Meat", type:"meat" },
    { label: "Salad", type:"salad" },
    { label: "Bacon", type:"bacon" },
    { label: "Cheese", type:"cheese" },
]

const buildControls = (props) =>(
    <div className={ Style.BuildControls }>
        <h4>Total Price: { props.totalPrice } </h4>
        { controls.map(ctrl => 
            <BuildControl
                key={ ctrl.label }
                label={ ctrl.label }
                type={ ctrl.type }
                clickMore = { props.ingredientsAdded}
                clickLess = { props.ingredientsRemoved }
            />
        ) }
    </div>
)


export default buildControls;