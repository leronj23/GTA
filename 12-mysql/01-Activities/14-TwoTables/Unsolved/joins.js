var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yourRootPassword",
  database: "great_bayDB"
});

connection.connect(function (err) {
  if (err) throw err;
  ready();
});


function ready() {

  connection.query("SELECT TopAlbums.Artist as Artist, Top5000.Song as Song, TopAlbums.Album as Album, TopAlbums.YearReleased as Year, " +
   "FROM TopAlbums INNER JOIN Top5000 ON (TopAlbums.YearReleased = Top5000.YearReleased)"
   , function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}