const knex = require('knex')

const config = {
    client: 'sqlite3', //depends on the library we're using
    connection: {
        filename: '../../data/backend.sqlite3', //where the db file is relative to where this is exported to
    },
    useNullAsDefault: true, //sqlite3 specific
}

module.exports = knex(config)