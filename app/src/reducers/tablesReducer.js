import {} from '../actions/tables'

const initState = {
    tables: [],
    fetching: false,
    error: null,
}

export const tablesReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    }
}