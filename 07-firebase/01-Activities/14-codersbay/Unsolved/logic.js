// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDweljNQoc83WRuxMyBe4OAUZMRfeJAkhg",
  authDomain: "demotest-ec6a9.firebaseapp.com",
  databaseURL: "https://demotest-ec6a9.firebaseio.com",
  projectId: "demotest-ec6a9",
  storageBucket: "demotest-ec6a9.appspot.com",
  messagingSenderId: "715174768018"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highBidder = snapshot.child("highBidder").val();
    highPrice = snapshot.child("highPrice").val();

    // Change the HTML to reflect the stored values
    $("#highest-price").text(highPrice);
    $("#highest-bidder").text(highBidder);

    // Print the data to the console.
    console.log("highBidder", highBidder);
    console.log("highPrice", highPrice);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-price").text(initialBidder);
    $("#highest-bidder").text(initialBid);

    // Print the data to the console.
    console.log("highBidder", initialBidder);
    console.log("highPrice", initialBid);

  }

  // If any errors are experienced, log them to console.
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  let bidderName = $("#bidder-name").val().trim();
  let bidderPrice = $("#bidder-price").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  if (parseInt(bidderPrice) > parseInt(highPrice)) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });

    // Log the new High Price
    console.log("highBidder", bidderName);
    console.log("highPrice", bidderPrice);

    // Store the new high price and bidder name as a local variable
    highBidder = bidderName;
    highPrice = bidderPrice;

    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text(highPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});