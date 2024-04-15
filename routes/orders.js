const express = require('express')
const bodyParser = require('body-parser')
const db = require('../database/db')
const router = express.Router()

router.use(bodyParser.json())

//all routes still need editing

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('MySQL connected');
})
// create an order
router.post('/createOrder',(req, res, next) => {
    let order = req.body
    let order_items = order.order_items

    //insert order row
    let sql = `INSERT INTO orderr (o_status, o_creation_date, o_comment) VALUES ("${order.o_status}", "${order.o_creation_date}", "${order.o_comment}")`
    db.query(sql, (err, result) => {
        let sql = `INSERT INTO orderr (o_status, o_creation_date, o_comment) VALUES ("${order.o_status}", "${order.o_creation_date}", "${order.o_comment}")`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.status(200).json({
                
            })
        })
    })
})

//insert rows in order_items
router.post('/createOrder',(req, res, next) => {
    let order = req.body
    let order_items = order.order_items

    order_items.forEach((item) => {
        let sql = `INSERT INTO order_items (order_id, product_id, quantity) VALUES ("${item.o_id}", "${item.p_id}", "${item.quantity}")`
        db.query(sql, (err, result) => {
            if (err) throw err
            res.status(200).json({
                inserted: item.o_id
            })
        })
    })
})

//show list of orders
router.get('/listOfOrders',(req, res, next) => {
    let sql = 'SELECT * FROM orderr'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: result
        })
    })
})

//show one specific order
router.get('/order',(req, res, next) => {
    let order = req.body
    let sql = 'SELECT * FROM orderr WHERE o_id = ?'
    const value = [order.o_id]
    db.query(sql, value, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: result
        })
    })
})

//cancel an order 
router.delete('/cancelOrder',(req, res, next) => {
    let order = req.body
    let sql = 'DELETE FROM orderr WHERE o_id = ?'
    const value = [order.o_id]
    db.query(sql, value, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: "Order record was successfully removed from the system permanently."
        })
    })
})

module.exports = router