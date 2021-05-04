const express = require('express')
const app = express()

//Rotas
    const rotas = require('./rotas')
    app.use('/api',rotas)


app.get("/", function(req,res){
    res.send("hello world")
})


app.listen(8081,function(){
    console.log("Servidor Rodando na url http://localhost:8081")
})