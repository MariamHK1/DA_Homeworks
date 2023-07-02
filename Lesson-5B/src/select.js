const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "01072023Hello",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
   // con.query("SELECT * FROM products", function (err, result, fields) {
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});