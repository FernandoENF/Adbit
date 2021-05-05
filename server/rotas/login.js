const express = require('express')
const router = express.Router()
const pool = require('./connection')
const bcrypt = require('bcrypt');

router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    pool.getConnection((errr, db) => {
        if(errr){
            console.log(errr)
        }
        db.query (
            "SELECT * FROM usuarios WHERE email = ?;",
            email,
            (err,result) => {
                
                if(err) {
                    res.send({ err: err });
                }

                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if(response) {
                            res.send(result)
                        } else {
                            res.send({ message: "Combinação email/senha errada!" })
                        }
                    })
                } else {
                    res.send({ message: "Essa conta não existe!" })
                }
            }
        )
        db.release()
    });
});

module.exports = router