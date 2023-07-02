const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "01072023Hello",
    database: "mydb"
});

//const name = 'Garage Corp';
//const adr = 'Number 5';
//const sql = `SELECT * FROM customers WHERE name = "${name}" OR address = "${adr}"`;

const name = 'Garage Corp';
const adr = 'Number 5';
const sql = `SELECT * FROM customers WHERE NOT name = "${name}"`;

//const name = 'Industry Org';
//const adr = 'Washington 45';
//const sql = `SELECT * FROM customers WHERE name = "${name}" AND address = "${adr}"`;
con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
    process.exit(0);
});

