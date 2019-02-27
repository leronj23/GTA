var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

app.get('/icecream/:name', (req, res) => {

    for (var i=0; i<icecreams.length; i++){
        if (icecreams[i].name === req.params.name){

            console.log(icecreams[i])
            return res.render("index", icecreams[i])
        }
    }
})




app.listen(PORT, ()=>{
    console.log("Server listening on: http://localhost:" + PORT);
})