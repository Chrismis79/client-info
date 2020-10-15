import axios from 'axios';

export const GET_CLIENT_INFO = 'GET_CLIENT_INFO';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const getClientInfo = () => {
    return dispatch => {
        axios.get('https://localhost:5001/api/clients')
            .then(res =>
                dispatch({
                    type: GET_CLIENT_INFO,
                    clients: res.data
                }))
            .catch(err => dispatch({ type: GET_FAIL, payload: err.response }))
    }
}

