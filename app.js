var mysql = require('mysql');
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/form', (req, res) => {
    var email = req.body.email;
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'alumno',
      password : 'alumnoipm',
      database : 'serverNode'
    });
    connection.connect();
    
    connection.query(`insert into Usuario values(null, "${email}")`, function (error, results, fields) {
    if (error) throw error;
});

connection.end();
   })

 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
   })