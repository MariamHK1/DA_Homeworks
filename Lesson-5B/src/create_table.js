const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "01072023Hello",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

   // const sql = "CREATE TABLE `products` (`ProductId` INT AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR(255), `price` INT NOT NULL)";
    const sql = "CREATE TABLE `customers` (`CustomerId` INT AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR(255), `address` VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        process.exit(0);
    });
})