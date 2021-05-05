const express = require('express')
const router = express.Router()
const pool = require('./connection')

router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    pool.getConnection((err, db) => {
        if(err){
            res.send({ err: err })
        } else {
        db.query (
            "SELECT * FROM usuarios WHERE email = ? AND password = ?",
            [email, password],
            (err,result) => {
                if(err) {
                    res.send({ err: err });
                }

                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "Combinação email/senha errada!" })
                }
            }
        )}
        db.release()
    });
});

module.exports = router