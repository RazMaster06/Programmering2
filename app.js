const express = require('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3000

app.use(express.static('public'))
app.set('view engine', 'pug')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'raz',
    password: 'qwe123!!',
    database: 'dbo1',
    multipleStatements : false
})

app.get('/', (req, res) => {
    connection
        .promise()
        .query('SELECT * FROM menu')
        .then(([rows, fields]) =>{
            console.log(rows)
            res.render('index', {title : "Max", "menu" : rows})    
        })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})