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

/* //show list of products *still needs editing*
router.get('/',(req, res, next) => {
    let sql = 'SELECT * FROM sale'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: result
        })
    })
})

//show one specific product
router.get('/product',(req, res, next) => {
    let order = []
    let sql = 'SELECT * FROM product WHERE p_id = ?'
    db.query(sql, req.params.orderId, (err, result) => {
        if (err) throw err
        order.push(result)
    })
}) */

module.exports = router