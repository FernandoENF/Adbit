const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv-safe')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
dotenv.config()

const PORT = 8081

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser())

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

app.listen(process.env.PORT || PORT,function(){
    console.log("Servidor Rodando na url")
})