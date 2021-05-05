const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit: 5,
    user: 'u265633137_adbit',
    host: '185.201.11.65',
    password: 'FERNANDO@adbit.777',
    database: 'u265633137_adbit',
});

module.exports = pool