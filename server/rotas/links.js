const express = require('express')
const router = express.Router()
const pool = require('./connection')
const { validateToken } = require('../middleware/AuthMiddleware')

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 } 

router.get('/links', validateToken, (req, res) => {
    const id = req.user.id
    pool.getConnection((error,db) => {
        db.query(
            "SELECT id, uri, DATE(data) AS data FROM links WHERE idUsuario = ?; ",
            id,
            (err, result) => {
                if(err){
                    res.send('Não foi possível encontrar links deste usuário!')
                } else {
                    res.send(result)
                }
            }
        )
        db.release()
    })
})

router.post('/links/novoLink', validateToken, (req,res) => {
    const url = req.body.url
    const idUsuario = req.user.id;
    const uri = makeid(10);
    pool.getConnection((error,db) => {
        db.query(
            "INSERT INTO links (url, uri, idUsuario) VALUES (?,?,?);",
            [url,uri,idUsuario],
            (err, result) => {
                if(err){
                console.log(err)
                }
            }
        )
        db.release()
    })
    res.json({ message: uri })
})

router.get('/links/redirecionar', (req,res) => {
    const uri = req.body.uri
    pool.getConnection((error,db) => {
        db.query(
            "SELECT url, uri FROM links WHERE uri = ?;",
            uri,
            (err, result) => {
                if(err){
                    console.log(err)
                } else {
                    res.json({ url: result.url , uri: result.uri })
                }
            }
        )
        db.release()
    })
})

module.exports = router;