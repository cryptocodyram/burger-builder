import React from 'react';
import BurgerLogo from '../../Assets/burger-logo.png';
import LogoCss from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={LogoCss.Logo} >
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    )
}

export default logo;