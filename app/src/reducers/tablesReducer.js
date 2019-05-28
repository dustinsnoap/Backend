import {
    GET_TABLE,
    GET_TABLES,
    GET_TABLE_SUCCESS,
    GET_TABLES_SUCCESS,
    TABLE_FAIL,
} from '../actions/tables'

const initState = {
    tables: [],
    table: [],
    current_table: '',
    fetching: false,
    error: null,
}

export const tablesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TABLE:
        case GET_TABLES:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case GET_TABLE_SUCCESS:
            return {
                ...state,
                error: null,
                table: action.payload,
                fetching: false,
            }
        case GET_TABLES_SUCCESS:
            return {
                ...state,
                error: null,
                tables: action.payload,
                // current_table: action.payload.current_table,
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