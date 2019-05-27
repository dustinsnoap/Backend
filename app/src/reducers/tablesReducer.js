import {
    GET_TABLES,
    TABLE_SUCCESS,
    TABLE_FAIL,
} from '../actions/tables'

const initState = {
    tables: [],
    fetching: false,
    error: null,
}

export const tablesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TABLES:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case TABLE_SUCCESS:
            return {
                ...state,
                error: null,
                tables: action.payload,
                fetching: false,
            }
        case TABLE_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}