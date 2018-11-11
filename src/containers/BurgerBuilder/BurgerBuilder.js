import React, {Component} from 'react';
import {connect} from 'react-redux';
import Burger from '../../components/Burger/Burger'
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import {testRequest} from '../../store/actions';
import Fetch from 'isomorphic-fetch';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    };

componentDidMount() {


}

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
    onIngredientAdd() {
     dispatch(testRequest());
   }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
