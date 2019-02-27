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
  database: "great_bayDB"
});

connection.connect(function (err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId);
});


inquirer.prompt([
  {
    type: "list",
    name: "choiceMade",
    message: "What would you like to do?",
    choices: ["Place a Bid?", "Sell an Item"]
  },

]).then(function (selected) {

  // If the user guesses the password...
  if (selected.choiceMade === "Place a Bid?") {

    placeABid();
  }
  else {

    sellAnItem();
  }
});


function sellAnItem() {

  inquirer.prompt([
    {
      type: "input",
      name: "item",
      message: "What is the item name?"
    },
    {
      type: "list",
      name: "choiceMade",
      message: "Select the category:",
      choices: ["Ectronics", "Cars", "Household"]
    },
    {
      type: "input",
      name: "price",
      message: "Price selling for?"
    },

  ]).then(function (sellingItem) {

    addProduct(sellingItem)
  })
    .catch(function (error) {
      console.log("error:", error);
    });
}

function addProduct(sellingItem) {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO items SET ?",
    {
      item_name: sellingItem.item,
      category: sellingItem.choiceMade,
      starting_bid: sellingItem.price
    },
    function (err, res) {
      console.log(res.affectedRows + " product add for sale!\n");
    }
  );

  connection.end();
}

function placeABid() {
  connection.query("SELECT * FROM items", function (err, res) {

    //console.log("res:", res);

    var items = [];
    res.forEach(element => {
      
      items.push(element.item_name);
    });

    if (err) throw err;

    inquirer.prompt([
      {
        type: "list",
        name: "choiceMade",
        message: "What would you like to bid on?",
        choices: items
      }

    ]).then(function (selected) {

      bidAmount(selected)

      //console.log(selected)
    })
    .catch(function (error) {
      console.log("error:", error);
    });
  })
}

function bidAmount(item) {

  inquirer.prompt([
    {
      type: "input",
      name: "item",
      message: "What is your bid amount?"
    },

  ]).then(function (selected) {

    bidAmount(selected)

    //console.log(selected)
  })
  .catch(function (error) {
    console.log("error:", error);
  });
}
