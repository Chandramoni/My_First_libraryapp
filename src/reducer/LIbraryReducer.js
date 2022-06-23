import {
    GET_DRUG_INFO_SUCCESS,
    GET_DRUG_INFO_PENDING,
    GET_DRUG_INFO_FAILURE  } from '../actions/LibraryAction';
  
  const initialState = {
    loading: false,
    bookList: [],
    error: null
  };
  
  export default function libraryReducer(state = initialState, action) {
    switch (action.type) {
      case GET_DRUG_INFO_PENDING:
        return {
          ...state,
          loading: true
        };
      case GET_DRUG_INFO_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          bookList: action.payload.data.items
        };
      case GET_DRUG_INFO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }