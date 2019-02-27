var express = require('express');
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:'root',
    password:'yourRootPassword',
    database: 'seinfeld_db'
})

connection.connect(function(err){
    if(err){
        console.error('error connecting: ', err.stack);
        return;
    }
    console.log('connected as id ', connection.threadId);
})

app.get("/cast",(req, res) => {

    connection.query('SELECT * FROM actors ORDER BY id', (err, results)=>{

        var html = "<h1> Actors </h>";
        html += "<ul>";

        for (var i = 0; i < results.length; i++){
            html += `<li><p> Id: ${results[i].id}</p>`;
            html += `<p> Name: ${results[i].name}</p>`;
            html += `<p> Coolness Points: ${results[i].coolness_points}</p>`;
            html += `<p> Attitude: ${results[i].attitude}</p>`;
        }

        html += "</ul>";
        res.send(html); 
    })
})

app.get("/coolness-chart",(req, res) => {

    connection.query('SELECT * FROM actors ORDER BY coolness_points DESC', (err, results)=>{

        var html = "<h1> Actors </h>";
        html += "<ul>";

        for (var i = 0; i < results.length; i++){
            html += `<li><p> Id: ${results[i].id}</p>`;
            html += `<p> Name: ${results[i].name}</p>`;
            html += `<p> Coolness Points: ${results[i].coolness_points}</p>`;
            html += `<p> Attitude: ${results[i].attitude}</p>`;
        }

        html += "</ul>";
        res.send(html); 
    })
})

app.get("/attitude-chart/:att",(req, res) => {

    connection.query('SELECT * FROM actors WHERE attitude = ?', [req.params.att], (err, results) => {

        var html = "<h1> Actorss with an Attitude </h>";
        html += "<ul>";

        for (var i = 0; i < results.length; i++){
            html += `<li><p> Id: ${results[i].id}</p>`;
            html += `<p> Name: ${results[i].name}</p>`;
            html += `<p> Coolness Points: ${results[i].coolness_points}</p>`;
            html += `<p> Attitude: ${results[i].attitude}</p>`;
        }

        html += "</ul>";
        res.send(html); 
    })
})

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });