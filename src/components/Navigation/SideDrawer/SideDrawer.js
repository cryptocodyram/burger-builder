import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerCss from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [SideDrawerCss.SideDrawer,SideDrawerCss.Close];
    if (props.open) {
        attachedClasses = [SideDrawerCss.SideDrawer, SideDrawerCss.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={SideDrawerCss.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
        
    )
}

export default sideDrawer;