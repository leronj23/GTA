// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("./allCharacters.js");

// ORM
// =============================================================

var tableName = "allcharacters";

var orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  allCharacters: function(callback) {

    Character.findAll({}).then(function(results) {
      // results are available to us inside the .then
      callback(results);

    // var s = "SELECT * FROM " + tableName;

    // connection.query(s, function(err, result) {
    //   callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // Again, we make use of the callback to grab a specific character from the database.
  searchCharacter: function(name, callback) {

    Character.findAll({
      where: {
        tableName: name
      }
    }).then(function(results) {
      callback(results);
    });
  },

  //   var s = "select * from " + tableName + " where routeName=?";

  //   connection.query(s, [name], function(err, result) {
  //     callback(result);
  //   });
  // },

  // Here our ORM is creating a simple method for adding characters to the database
  // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
  addCharacter: function(character, callback) {
    // Creating a routeName so its easy to search.

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();
    console.log(routeName);

    Character.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    }).then(function(results) {
      callback(results);
    });

    // routeName: Sequelize.STRING,
    // name: Sequelize.STRING,
    // role: Sequelize.STRING,
    // age: Sequelize.INTEGER,
    // forcePoints: Sequelize.INTEGER

    // var s = "INSERT INTO " + tableName + " (routeName, name, role, age, forcePoints) VALUES (?,?,?,?,?)";

    // connection.query(s, [routeName, character.name, character.role, character.age, character.forcePoints], function(
    //   err,
    //   result
    // ) {
    //   callback(result);
    // });
  }
};

module.exports = orm;
