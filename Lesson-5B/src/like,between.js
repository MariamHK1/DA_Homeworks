const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "01072023Hello",
    database: "mydb"
});

//const sql = "SELECT * FROM products WHERE name like '%almond%'";
const sql = "SELECT * FROM products WHERE price between 300 AND 350";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    process.exit(0);
});
