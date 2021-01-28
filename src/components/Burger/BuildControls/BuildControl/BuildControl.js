import React from "react";

import BuildControlCss from './BuildControl.module.css';

const buildControl = (props) =>{
    return (
        <div className={BuildControlCss.BuildControl}>
            <div className={BuildControlCss.Label}> {props.label}</div>
            <button 
                className={BuildControlCss.Less} 
                onClick = {props.removed}
                disabled={props.disabled}> Less</button>
            <button className={BuildControlCss.More} onClick={props.added}> more</button>
        </div>               
    )
}

export default buildControl;