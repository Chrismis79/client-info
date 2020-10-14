import { GET_CLIENT_INFO, GET_SUCCESS, GET_FAIL } from './actions';

const initialState = {
    clients: [],
    isLoading: false,
    error: null
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENT_INFO:
            return {
                ...state,
                clients: [],
                id: '',
                isLoading: true,
                error: null
            }
        case GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                clients: action.payload
            }
        case GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default clientReducer;