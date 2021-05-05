const express = require('express');
const { getConnection } = require('./connection');
const router = express.Router()
const pool = require('./connection')

router.post('/register', (req,res) => {

    const name = req.body.name
    const password = req.body.password
    const company = req.body.company
    const email = req.body.email
    
    pool.getConnection((err, db) => {
        if(err) {
            res.send({ err: err })
        } else {
        db.query(
        "INSERT INTO usuarios (name, email, password, company) VALUES (?,?,?,?)",
        [name,email,password,company],
        (err, result) => {
            if(err){
                res.send({ err: err })
            } else{
                res.send(result)
            }
        })}
        db.release();
    })
    });

module.exports = router