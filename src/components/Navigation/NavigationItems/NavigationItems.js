import React from 'react';
import NavigationItemsCss from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className={NavigationItemsCss.NavigationItems}>
            <NavigationItem link="/" active> Burger Builder</NavigationItem>
            <NavigationItem > Checkout</NavigationItem>
        </ul>
    )
}

export default navigationItems;