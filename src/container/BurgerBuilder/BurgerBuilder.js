import React,{ Component } from "react";
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Aux from '../../hoc/Aux';

const INGREDIENT_PRICES = {
    salad: 0.50,
    bacon: 0.70,
    cheese: 0.40,
    meat: 1.30
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4.0,
        purchasable:false,
        purchasing:false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.UpdatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceMinus = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceMinus;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.UpdatePurchaseState(updatedIngredients);
    }

    UpdatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                return sum+el;
            },0);
        this.setState({purchasable:sum>0})
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancellHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler =() => {
        alert("You continue!");
    }


    render() {
        const disabledInfo  = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price = {this.state.totalPrice}
                        puchaseCancelled={this.purchaseCancellHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/> 
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;