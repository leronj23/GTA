// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
<<<<<<< HEAD
var mysql = require("mysql");
=======
//var mysql = require("mysql");

// // Setting up our connection information
// var source = {
//   localhost: {
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "yourRootPassword",
//     database: "starwars"
//   }
// };


// // Creating our connection
// var connection = mysql.createConnection(source.localhost);


// // Connecting to the database.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Exporting our connection
// module.exports = connection;


// Dependencies
var Sequelize = require("sequelize");
>>>>>>> fd3e8b2655d417128de79e2127095dd4aa30c283

// Setting up our connection information
var source = {
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "starwars"
  }
};


// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

<<<<<<< HEAD
// Exporting our connection
module.exports = connection;
=======
// Exports the connection for other files to use
module.exports = connection;
>>>>>>> fd3e8b2655d417128de79e2127095dd4aa30c283
