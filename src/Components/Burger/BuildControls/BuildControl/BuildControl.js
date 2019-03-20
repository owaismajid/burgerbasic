import React  from 'react';
import Style from './BuildControl.module.css';


const buildControl = props =>(
    <div className={ Style.BuildControl }>
        <div className={ Style.Label }> { props.label } </div>
        <button className={ Style.More } onClick = { ()=> props.clickMore(props.type) }>MORE</button>
        <button className={ Style.Less } onClick = { ()=> props.clickLess(props.type) } >LESS</button>
    </div>
)

export default buildControl;