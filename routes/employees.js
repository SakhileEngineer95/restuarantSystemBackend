const express = require('express')
const db = require('../database/db')
const bodyParser = require('body-parser')
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

//create new employee *still needs editing*
router.post('/createEmployee',(req, res, next) => {
    let employee = req.body
    let sql = `INSERT INTO employee (e_first_name, e_last_name, e_birthday, e_gender, e_phys_address, e_phone_number, e_ID_Passport_number, e_job_position, e_date_of_employment) VALUES ("${employee.e_first_name}", "${employee.e_last_name}", "${employee.e_birthday}", "${employee.e_gender}", "${employee.e_phys_address}", "${employee.e_phone_number}", "${employee.e_ID_Passport_number}", "${employee.e_job_position}", "${employee.e_date_of_employment}")`
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: "Employee was successfully created"
        })
    })
})

//edit existing employee *still needs editing*
router.post('/updateEmployee',(req, res, next) => {
    let employee = req.body
    let sql = 'UPDATE employee SET e_first_name = ?, e_last_name = ?, e_birthday = ?, e_gender = ?, e_phys_address = ?, e_phone_number = ?, e_ID_Passport_number = ?, e_job_position = ?, e_date_of_employment = ? WHERE e_id = ?'
    const values = [employee.e_first_name, employee.e_last_name, employee.e_birthday, employee.e_gender, employee.e_phys_address, employee.e_phone_number, employee.e_ID_Passport_number, employee.e_job_position, employee.e_date_of_employment, employee.e_id]
    db.query(sql, values, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: "Employee was successfully updated"
        })
    })
})

//show list of employees *still needs editing*
router.get('/listOfEmployees',(req, res, next) => {
    let sql = 'SELECT * FROM employee'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: result
        })
    })
})

//show one specific employee
router.get('/employee',(req, res, next) => {
    let employee = req.body
    let sql = 'SELECT * FROM employee WHERE e_id = ?'
    const value = [employee.e_id]
    db.query(sql, value, (err, result) => {
        res.status(200).json({
            results: result
        })
    })
})

//delete an employee *still needs editing*
router.delete('/removeEmployee',(req, res, next) => {
    let employee = req.body
    let sql = 'DELETE FROM employee WHERE e_id = ?'
    const value = [employee.e_id]
    db.query(sql, value, (err, result) => {
        if (err) throw err
        res.status(200).json({
            results: "Employee record was successfully removed from the system permanently."
        })
    })
})

module.exports = router