import axios from 'axios'

const api = 'http://localhost:3333/tables'

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

export const get_tables = () => dispatch => {
    dispatch({type: GET_TABLES})
    return axios
        .get(`${api}`)
        .then(res => dispatch({type: TABLE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: TABLE_FAIL, payload: err}))
}
export const get_table = table_name => dispatch => {
    dispatch({type: GET_TABLE})
    return axios
        .get(`${api}/${table_name}`)
        .then(res => dispatch({type: TABLE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: TABLE_FAIL, payload: err}))
}