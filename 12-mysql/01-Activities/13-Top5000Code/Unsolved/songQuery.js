var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yourRootPassword",
  database: "top_songsDB"
});

connection.connect(function (err) {
  if (err) throw err;
});

restart()

function restart() {
  inquirer.prompt([
    {
      type: "list",
      name: "choiceMade",
      message: "What would you like search?",
      choices: ["Song by a specific artist?", "All artist in the top 5000 more than once?", "Song in a specific date range?", "Seach for a specific song?"]
    },

  ]).then(function (selected) {

    switch (selected.choiceMade) {
      case "Song by a specific artist?":
        artistSearch();
        break;
      case "All artist in the top 5000 more than once?":
        topArtist();
        break;
      case "Song in a specific date range?":
        dateRange();
        break;
      case "Seach for a specific song?":
        specificSong();
        break;
    }
  });


  function artistSearch() {

    inquirer.prompt([
      {
        type: "input",
        name: "item",
        message: "What is the name of the song?"
      },

    ]).then(function (selected) {

      connection.query(
        `SELECT * FROM Top5000 WHERE SongName = '${selected.item}'`, function (err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res[0].Artist);
          console.log("========================");
          //connection.end();

          restart();
        });
    });
  };

  function topArtist() {

    connection.query(
      `SELECT Artist, COUNT(*) FROM Top5000 GROUP BY Artist HAVING COUNT(*) > 1`, function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        res.forEach(element => {

          console.log(element.Artist);
        });
        console.log("========================");
        //connection.end();

        restart();
      });
  }

  function dateRange() {
    inquirer.prompt([
      {
        type: "input",
        name: "start",
        message: "Beginning year?"
      },
      {
        type: "input",
        name: "end",
        message: "Ending year?"
      },

    ]).then(function (answer) {

      connection.query(
        `SELECT * FROM Top5000 WHERE YearReleased BETWEEN '${answer.start}' AND '${answer.end}'`, function (err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          res.forEach(element => {

            console.log(element.SongName);
          });
          console.log("========================");
          //connection.end();

          restart();
        });
    });
  }

  function specificSong() {

    inquirer.prompt([
      {
        type: "input",
        name: "item",
        message: "Song name?"
      },

    ]).then(function (selected) {

      connection.query(
        `SELECT * FROM Top5000 WHERE SongName = '${selected.item}'`, function (err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          res.forEach(element => {

            console.log(element);
          });
          console.log("========================");
          //connection.end();

          restart();
        });
    });
  }
}





