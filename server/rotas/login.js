const express = require('express')
const router = express.Router()
const pool = require('./connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const verifyJWT = (req, res, next) => {
    const token = req.headers['adbit-acess-token']

    if(!token) {
        res.send("Vc nao tem um token!")
    } else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                res.json({ auth: false, message: "Falhou em se autenticar" })
            } else {
                req.userId = decoded.id
                next();
            }
        })
    }
}

router.get('/isUserAuth', verifyJWT, (req, res)=> {
    res.send()
})

router.get('/login', (req, res)=> {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user})
    } else {
        res.send({ loggedIn: false })
    }
})

router.post('/login', (req, res) => {

    const email = req.body.email
    const password = req.body.password

    pool.getConnection((errr, db) => {
        if(errr){
            console.log(errr)
        }
        db.query (
            "SELECT * FROM usuarios WHERE email = ?;",
            email,
            (err,result) => {
                
                if(err) {
                    res.send({ err: err })
                }

                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if(response) {
                            const id = result[0].id
                            const token = jwt.sign({id}, process.env.SECRET, {
                                expiresIn: 300,
                            })
                            req.session.user = result
                            res.json({ auth: true, token: token })
                        } else {
                            res.json({ auth: false, message: "combinacao email/senha errada!" })
                        }
                    })
                } else {
                    res.send({  auth: false, message: "Essa conta nao existe!" })
                }
            }
        )
        db.release()
    });
});

module.exports = router