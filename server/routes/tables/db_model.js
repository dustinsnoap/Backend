// const db = require('../../config/db')

const knex = require('knex')

const config = {
    client: 'sqlite3', //depends on the library we're using
    connection: {
        filename: './data/backend.sqlite3', //where the db file is relative to where this is exported to
    },
    useNullAsDefault: true, //sqlite3 specific
}

const db = knex(config)

// const get_tables = async () => {
//     try {
//         const tables = await db.raw(`select name from sqlite_master where type='table' and name<>'sqlite_sequence'`)
//         .then(resp => resp.map(table => table.name))
//         return tables
//     }
//     catch (err) {
//         return err
//     }
// }

const get_tables = async () => {
    try {
        const tables =  await db('sqlite_master')
            .where('type', 'table')
            .map(table => table.name)
            .filter(name => name !== 'sqlite_sequence')
        return tables
    }
    catch (err) {
        console.log(err)
        return err
    }
}
const get_table = async (table_name) => {
    try {
        return await(db(table_name))
    }
    catch (err) {
        return err
    }
}

module.exports = {
    get_tables,
    get_table,
}

const execute = async () => {
    console.log(await get_table('users'))
}

// execute()