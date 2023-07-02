const mysql2 = require('mysql2');

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "01072023Hello"
});

con.connect(function(err) {
    if (err) throw err;

    con.query("SHOW DATABASES", function (err, result) {
        if (err) throw err;
        console.log(result);
        process.exit(0);
    });
});