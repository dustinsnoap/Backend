const knex = require('knex')

const config = {
    client: 'sqlite3', //depends on the library we're using
    connection: {
        filename: './db.sqlite3' //where the db file is
    },
    useNullAsDefault: true, //sqlite3 specific
}

module.exports = knex(config)