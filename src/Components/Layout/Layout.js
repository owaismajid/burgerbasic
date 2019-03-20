import React from 'react';
import Style from './index.module.css'
const layout = ( props ) => (
    <React.Fragment>
        <div>TOOL BAR @TODO</div>
        <main className={ Style.content }>
            { props.children }
        </main>
    </React.Fragment>

)


export default layout;