import axios from 'axios'

const api = 'https://idontknow.com'

export const GET_TABLE = 'GET_TABLE'
export const GET_TABLES = 'GET_TABLES'
export const ADD_TABLE = 'ADD_TABLE'
export const REMOVE_TABLE = 'REMOVE_TABLE'
// export const 
// export const 
// export const 
// export const 
export const TABLE_SUCCESS = 'TABLE_SUCCESS'
export const TABLE_FAIL = 'TABLE_FAIL'

//not sure how this will work yet
export const get_table = id => dispatch => {
    dispatch({type: GET_TABLE})
    return axios
        .get(`${api}/${id}`)
        .then(res => dispatch({type: TABLE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: TABLE_FAIL, payload: err}))
}