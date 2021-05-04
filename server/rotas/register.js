const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'adbit',
});


router.post('/register', function(req,res){

    const username = req.body.username
    const password = req.body.password
    
    db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username,password],
    function(err, result){
        console.log(err);
    })
})