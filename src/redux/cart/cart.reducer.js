import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hideCart: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hideCart: !state.hideCart
      }
    default:
      return state;
  }
}

export default cartReducer;