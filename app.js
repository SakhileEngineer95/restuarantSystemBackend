const express = require('express')
const app = express()

//routes
const employees = require('./routes/employees')
const orders = require('./routes/orders')
const products = require('./routes/products')
const sales = require('./routes/sales')
const reports = require('./routes/reports')

app.use('/employees', employees)
app.use('/orders', orders)
app.use('/products',products)
app.use('/sales',sales)
app.use('/reports', reports)

//sessions
const sessions = []

module.exports = {
    "app": app,
    "sessions": sessions
}