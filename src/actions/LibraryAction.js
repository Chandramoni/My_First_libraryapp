import axios from "axios";
const API_URL = 'https://www.googleapis.com/books/v1/volumes'
const SCOPE = 'libraryAction/';
export const GET_DRUG_INFO_FAILURE = `${SCOPE}GET_DRUG_INFO_FAILURE`;
export const GET_DRUG_INFO_PENDING = `${SCOPE}GET_DRUG_INFO_PENDING`;
export const GET_DRUG_INFO_SUCCESS = `${SCOPE}GET_DRUG_INFO_SUCCESS`;



  export const getDrugInfo=(query)=>{
        return dispatch => {
            dispatch(getDrugInfoPending());
        
     axios.get(`${API_URL}?q=${query}`)
     .then(res => {
        dispatch(getDrugInfoSuccess(res));
      })
      .catch(err => {
        dispatch(getDrugInfoFailure(err.message));
      });
    };
  }
const getDrugInfoPending = () => ({
    type: GET_DRUG_INFO_PENDING
  });
  const getDrugInfoSuccess = (res) => ({
    type: GET_DRUG_INFO_SUCCESS,
    payload: {
      ...res
    }
  });

  
const getDrugInfoFailure = error => ({
    type: GET_DRUG_INFO_FAILURE,
    payload: {
      error
    }
  });

