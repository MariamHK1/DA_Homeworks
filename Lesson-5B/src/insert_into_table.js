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

    /* Products table */
    //const sql = "INSERT INTO Products (name, price) VALUES ('Snickers Original', 250), ('Snickers Milk Chocolate', 270), ('Snickers Almond', 280), ('Snickers Ice Cream', 350), ('Snickers Ice Cream Bars', 450),  ('Snickers 100 Calories Chocolate', 330),  ('Snickers Peanut Butter', 290), ('Snickers White Chocolate', 270), ('Snickers Peanut Brownie', 290), ('Snickers Almond Brownie Dark Chocolate', 320), ('Snickers Creamy Peanut Butter', 330), ('Snickers Crunchy Peanut Butter', 340)";

    /* Customers table */
    const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37'), ('Industry Org', 'Washington 45'),('Garage Corp', 'Number 25'), ('Garage Corp', 'Number 20'), ('Garage Corp', 'Number 15'), ('Garage Corp', 'Number 10'), ('Garage Corp', 'Number 5') ";
   
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        process.exit(0);
    });
});