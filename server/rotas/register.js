const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = mysql.createConnection({
    user: 'u265633137_adbit',
    host: '185.201.11.65',
    password: 'FERNANDO@adbit.777',
    database: 'u265633137_adbit',
});

router.post('/register', (req,res) => {

    const name = req.body.name
    const password = req.body.password
    const company = req.body.company
    const email = req.body.email
    
    
    db.query(
    "INSERT INTO usuarios (name, email, password, company) VALUES (?,?,?,?)",
    [name,email,password,company],
    (err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

module.exports = router