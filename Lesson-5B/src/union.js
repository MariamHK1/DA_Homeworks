const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "01072023Hello",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    const sql = "SELECT ProductId, name from Products Union Select CustomerId, name from Customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});