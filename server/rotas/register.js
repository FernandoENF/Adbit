const express = require('express');
const router = express.Router()
const pool = require('./connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

router.post('/register', (req,res) => {

    const name = req.body.name
    const password = req.body.password
    const company = req.body.company
    const email = req.body.email
    
    pool.getConnection((error, db) => {
        if(error) {
            console.log(error)
        } else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if(err) {
                console.log(err)
            }
            db.query(
            "INSERT INTO usuarios (name, email, password, company) VALUES (?,?,?,?)",
            [name,email,hash,company],
            (errr, result) => {
                console.log(errr)
            })
        })
        }
        db.release();
    })
});

module.exports = router