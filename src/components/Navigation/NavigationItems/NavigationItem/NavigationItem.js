import React from 'react';

import NavigationItemCss from './NavigationItem.module.css'

const navigationItem = (props) => {
    return (
            <li className={NavigationItemCss.NavigationItem}>
                <a 
                    href={props.link}
                    className={props.active ? NavigationItemCss.active : null} >{props.children}</a>
            </li>
    )
}

export default navigationItem;