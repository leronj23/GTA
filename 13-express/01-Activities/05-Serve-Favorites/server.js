var http = require('http');
var fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    console.log(path)

    switch (path) {

        case "/":
            return display(req, res);

        case "/food":
            return displayFood(req, res);

        case "/movies":
            return displayMovie(req, res);

        case "/css":
            return displayCSS(req, res);

        default:
            return display404(req, res);
    }
}

function display(req, res) {

    fs.readFile(__dirname + "/index.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFood(req, res) {

    fs.readFile(__dirname + "/food.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovie(req, res) {

    fs.readFile(__dirname + "/movies.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayCSS(req, res) {

    fs.readFile(__dirname + "/css.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(req, res) {

    fs.readFile(__dirname + "/error404.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});