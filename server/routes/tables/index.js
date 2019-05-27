const express = require('express')
const router = express.Router()
const db_tables = require('./db_model')

//middlewarez

//C
//R
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
//U
//D

module.exports = router