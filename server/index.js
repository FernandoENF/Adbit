const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv-safe')

const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
dotenv.config()

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

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8081,function(){
    console.log("Servidor Rodando na url http://localhost:8081")
})