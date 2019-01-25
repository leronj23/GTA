var fs = require('fs');

var arg1 = process.argv[2];
var arg2 = process.argv[3];

var newTotal = () => {

    var p = new Promise(function (resolve, reject) {

        fs.readFile('bank.txt', 'utf8', function (error, data) {

            var dataRecived = data.split(",");

            var total = 0;
            for (var i in dataRecived) {
                total += parseFloat(dataRecived[i]);
            }

            //console.log("Total", total.toFixed(2));
            resolve(total);

        });
    }).catch(function (error) {
        console.log("error", error);
    });

    return total;
}

if (arg1 === 'total') {

    //newTotal();

    console.log("Total", newTotal());

    // fs.readFile('bank.txt', 'utf8', function (error, data) {

    //     var dataRecived = data.split(",");

    //     var total = 0.0;
    //     for (var i in dataRecived) {
    //         total += parseFloat(dataRecived[i]); 
    //     }

    //     console.log("Total", total.toFixed(2));
    // })
}
else if (arg1 === 'withdrawl') {

    let amount = ',-' + arg2;

    fs.appendFile("bank.txt", amount, function (err) {
    })

    fs.readFile('bank.txt', 'utf8', function (error, data) {

        var dataRecived = data.split(",");

        var total = 0.0;
        for (var i in dataRecived) {
            total += parseFloat(dataRecived[i]);
        }

        console.log("Total", total.toFixed(2));
    })
}
else if (arg1 === 'deposit') {
    let amount = ',' + arg2;

    fs.appendFile("bank.txt", amount, function (err) {
    })

    fs.readFile('bank.txt', 'utf8', function (error, data) {

        var dataRecived = data.split(",");

        var total = 0.0;
        for (var i in dataRecived) {
            total += parseFloat(dataRecived[i]);
        }

        console.log("Total", total.toFixed(2));
    })
}
else if (arg1 === 'lotto') {

    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

    var lotto = (Math.random() * 10 * plusOrMinus).toFixed(2);

    let amount = ', ' + lotto;

    console.log("lotto", amount);

    fs.appendFile("bank.txt", amount, function (err) {
    })

    fs.readFile('bank.txt', 'utf8', function (error, data) {

        var dataRecived = data.split(",");

        var total = 0.0;
        for (var i in dataRecived) {
            total += parseFloat(dataRecived[i]);
        }

        console.log("Total", total.toFixed(2));
    })
}

