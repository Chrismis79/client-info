import axios from 'axios';

export const GET_CLIENT_INFO = 'GET_CLIENT_INFO';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const getClientInfo = () => dispatch => {
    dispatch({ type: GET_CLIENT_INFO })
    axios.get('https://localhost:5001/api/clients')
        .then(res => {
            console.log(res)
            return dispatch({ type: GET_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_FAIL, payload: err.response }))

}