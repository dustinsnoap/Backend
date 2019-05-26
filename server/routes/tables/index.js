const express = require('express')
const router = express.Router()
const db_tables = require('./db_model')

//middlewarez

//C
//R
router.get('/', async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//D

module.exports = router