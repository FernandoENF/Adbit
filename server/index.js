const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv-safe')

const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
}))

//Rotas
const rotas = require('./rotas')
app.use('/api',rotas)


app.use(express.static(__dirname+'/cliente'))

app.get("/", function(req,res){
    res.send("hello world")
})


dotenv.config()
app.listen(8081,function(){
    console.log("Servidor Rodando na url http://localhost:8081")
})