const express = require('express')
const db = require('../database/db')
const bodyParser = require('body-parser')
const router = express.Router()

//all routes still need editing
router.use(bodyParser.json())

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('MySQL connected');
})

/* //create report data for client
router.get('/',(req, res, next) => {
    let sql = 'SELECT * FROM employee'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: result
        })
    })
}) */

module.exports = router