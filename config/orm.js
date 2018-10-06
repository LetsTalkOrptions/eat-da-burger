// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function burgerArr(number) {
    var arr = [];

    for (var i = 0; i < number; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function for SQL syntax.
function properties(burgerprop) {
    var arr = [];

    for (var key in burgerprop) {
        if (Object.hasOwnProperty.call(burgerprop, key)) {
            arr.push(key + "=" + burgerprop[key]);
        }
    }

    return arr.toString();
}


// Object for all our SQL statement functions.
var orm = {
    all: function (tableInput, callback) {
        var burgerString = "SELECT * FROM " + tableInput + ";";
        connection.query(burgerString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    create: function (table, column, vals, callback) {
        var burgerString = "INSERT INTO " + table;

        burgerString += " (";
        burgerString += column.toString();
        burgerString += ") ";
        burgerString += "VALUES (";
        burgerString += burgerArr(vals.length);
        burgerString += ") ";

        console.log(burgerString);

        connection.query(burgerString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // An example of burgerData would be {name: panther, sleepy: true}
    update: function (table, burgerData, status, callback) {
        var burgerString = "UPDATE " + table;

        burgerString += " SET ";
        burgerString += properties(burgerData);
        burgerString += " WHERE ";
        burgerString += status;

        console.log(burgerString);
        connection.query(burgerString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },
    delete: function (table, status, callback) {
        var burgerString = "DELETE FROM " + table;
        burgerString += " WHERE ";
        burgerString += status;

        connection.query(burgerString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }
};
// Export the orm object for the model (cat.js).
module.exports = orm;