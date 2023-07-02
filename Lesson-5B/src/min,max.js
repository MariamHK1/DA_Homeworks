const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "01072023Hello",
    database: "mydb"
});


//const sql = "SELECT MIN(price) FROM Products";
const sql = "SELECT MAX(price) FROM Products";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    process.exit(0);
});
