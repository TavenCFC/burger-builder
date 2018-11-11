const initialState = {
  ingredients: {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 1
  }
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          salad: state.ingredients[action.ingredient] + action.val
        }
      }
      break;
    case 'ADD_TODO_SUCCESS':
  
      console.log('123')


  }
  return state;
};

export default reducer;
