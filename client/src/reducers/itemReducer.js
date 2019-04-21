import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  BORROW_ITEMS,
  RETURN_ITEMS
} from '../actions/types';

const initialState = {
  items: [],
  loading: false,
  borrowed:false,
  returned:false
};

export default function(state = initialState, action) {
  switch (action.type) {

    case BORROW_ITEMS:
      return{
        ...state,
        borrowed:true
      };
    case RETURN_ITEMS:
            return{
              ...state,
              returned:true
            };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
