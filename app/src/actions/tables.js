import axios from 'axios'

const api = 'http://localhost:3333/tables'

export const GET_TABLE = 'GET_TABLE'
export const GET_TABLES = 'GET_TABLES'
export const ADD_TABLE = 'ADD_TABLE'
export const REMOVE_TABLE = 'REMOVE_TABLE'
export const GET_TABLE_SUCCESS = 'GET_TABLE_SUCCESS'
export const GET_TABLES_SUCCESS = 'GET_TABLES_SUCCESS'
export const TABLE_FAIL = 'TABLE_FAIL'

export const get_tables = () => dispatch => {
    dispatch({type: GET_TABLES})
    return axios
        .get(`${api}`)
        .then(res => dispatch({type: GET_TABLES_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: TABLE_FAIL, payload: err}))
}
export const get_table = table_name => dispatch => {
    dispatch({type: GET_TABLE})
    return axios
        .get(`${api}/${table_name}`)
        .then(res => dispatch({type: GET_TABLE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: TABLE_FAIL, payload: err}))
}