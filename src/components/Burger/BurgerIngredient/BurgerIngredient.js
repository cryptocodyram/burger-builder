import React,{Component} from 'react';
import PropTypes from 'prop-types';

import BurgerIngredientCss from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className = {BurgerIngredientCss.BreadBottom}> </div>;
                break;
            case ('bread-top'):
                ingredient = <div className={BurgerIngredientCss.BreadTop}>
                    <div className = {BurgerIngredientCss.seeds1}></div>
                    <div className = {BurgerIngredientCss.seeds2}></div>
                </div>;
                break;
            case ('meat'):
                ingredient = <div className={BurgerIngredientCss.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={BurgerIngredientCss.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={BurgerIngredientCss.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={BurgerIngredientCss.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
    


export default BurgerIngredient;