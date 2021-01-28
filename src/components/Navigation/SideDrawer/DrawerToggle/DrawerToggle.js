import React from 'react';
import DrawerToggleCss from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    return (
        <div className={DrawerToggleCss.DrawerToggle} onClick={props.clicked}> 
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default drawerToggle;