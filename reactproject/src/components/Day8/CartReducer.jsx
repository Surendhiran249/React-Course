const initialState = {
    cart: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'REMOVE_ITEM':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
      case 'UPDATE_ITEM':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, ...action.payload } : item
          ),
        };
      default:
        return state;
    }
  };
  