//dependices
const mysql = require("mysql");
const inquirer = require("inquirer")


const { mainModule } = require("process");
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3002,
    user: "root",
    password: "Snakeeater1998",
    database: 'employee_db'
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected");
    main();
});

function main () {
    inquirer.prompt ({
        name: "postBid",
        type: "list",
        message: "Do you want to start a bid?",
        choices: ["post", "bid", "end"]
    })
}


connection.end();