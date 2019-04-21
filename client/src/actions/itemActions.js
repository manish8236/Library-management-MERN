import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING,BORROW_ITEMS,RETURN_ITEMS} from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = item => (dispatch, getState) => {
  axios
    .post('/api/items', item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const borrowitems= (id,borrowed) =>(dispatch,getState)=> {
  axios
  .get(`/api/items/${borrowed}`,tokenConfig(getState))
  .then(res =>
    dispatch({
      type: BORROW_ITEMS,
      borrowed: true  })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );

  };

export const returnitems= (id,returned) => {
  return {
    type: RETURN_ITEMS,
    returned: true

  }

}


export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
