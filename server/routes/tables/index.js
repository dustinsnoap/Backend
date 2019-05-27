const express = require('express')
const router = express.Router()
const db_tables = require('./db_model')

//middlewarez

//C
//R
//'/uid/' 
router.get('/', async (req, res) => {
    try {
        const tables = await db_tables.get_tables()
        tables.length > 0
        ?   res.status(200).json(tables)
        :   res.status(404).json({message: `No tables found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//'/uid/:tablename'
router.get('/:table_name', async (req, res) => {
    try {
        const table = await db_tables.get_table(req.params.table_name)
        console.log(table)
        table
        ?   res.status(200).json(table)
        :   res.status(404).json({message: `Couldn't find table ${req.params.table_name}`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//D

module.exports = router