const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

//Rotas
    const rotas = require('./rotas')
    app.use('/api',rotas)


app.use(express.static(__dirname+'/cliente'))

app.get("/", function(req,res){
    res.send("hello world")
})


app.listen(8081,function(){
    console.log("Servidor Rodando na url http://localhost:8081")
})