import React, {Component} from 'react';
import {connect} from 'react-redux';
import Burger from '../../components/Burger/Burger'
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    };

    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls addIngredient={this.props.onIngredientAdd}/>
            </Auxiliary>
        );
    }
};

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdd: (ingredient) => dispatch({type: 'ADD', ingredient: ingredient, val: 1})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
