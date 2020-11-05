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
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees By Department", "View All Employees", "Add Employee", "Remove Employee", "Update Employee", "Update Employee Role", "Update Employee Manager", "View All Roles"]
    })
}


connection.end();