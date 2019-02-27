var connection = require('./connection.js');

var orm = {
    selectAll: function (tableInput, colToSearch) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput, colToSearch], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findWhoHasMost: function (whatToSelect, tableOne, tableTwo, onTableOneCol, OnTableTwoCol) {
        var queryString = "SELECT ?? FROM ?? AS tOne ";
        queryString += "LEFT JOIN ?? AS tTwo ";
        queryString += "ON tOne.?? = tTwo.??";

        connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, OnTableTwoCol],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;