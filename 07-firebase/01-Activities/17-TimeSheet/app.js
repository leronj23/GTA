var config = {
    apiKey: "AIzaSyDweljNQoc83WRuxMyBe4OAUZMRfeJAkhg",
    authDomain: "demotest-ec6a9.firebaseapp.com",
    databaseURL: "https://demotest-ec6a9.firebaseio.com",
    projectId: "demotest-ec6a9",
    storageBucket: "demotest-ec6a9.appspot.com",
    messagingSenderId: "715174768018"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-employee-btn").on("click", function (event) {

    event.preventDefault();

    let employeeNameInput = $("#employee-name-input").val().trim();
    let roleInput = $("#role-input").val().trim();
    let startInput = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    let rateInput = $("#rate-input").val().trim();

    // Save the new price in Firebase
    database.ref().push({
        name: employeeNameInput,
        role: roleInput,
        startTime: startInput,
        rate: rateInput
    });
});

database.ref().on("child_added", function (snapshot) {

    // Store everything into a variable.
    var empName = snapshot.val().name;
    var empRole = snapshot.val().role;
    var empStart = snapshot.val().startTime;
    var empRate = snapshot.val().rate;

    console.log(snapshot.val());

    var empStartDisplay = moment.unix(empStart).format("MM/DD/YYYY");
    console.log("empStartDisplay", empStartDisplay);

    var empMonths = moment().diff(moment(empStartDisplay, "X"), "months");
    console.log("empMonths",empMonths);

    var empBilled = empMonths * empRate;
    console.log("empBilled",empBilled);

    var newRow = $("<tr>").append(
        $("<td>").text(empName),
        $("<td>").text(empRole),
        $("<td>").text(empStartDisplay),
        $("<td>").text(empMonths),
        $("<td>").text(empRate),
        $("<td>").text(empBilled)
    );

    $("#employee-table > tbody").append(newRow);

});
