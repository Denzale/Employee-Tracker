//dependices
const mysql = require("mysql");
const inquirer = require("inquirer")
const chalk = require("chalk");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "Snakeeater1998",
    database: 'employee_db'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    main();
});

let blue = chalk.blue;
let green = chalk.green;
let red = chalk.red;
let productArr = [];
let line = chalk.gray("-------------------------")

function main() {
    inquirer.prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees By Department", "View All Employees", "Add Employee", "Remove Employee", "Update Employee", "Update Employee Role", "Update Employee Manager", "View All Roles"]
    }).then(answers => {
        switch (answers.choices) {
            case ("View All Employees"):
                viewAllEmployees();
                break;
            case ("View All Employees By Department"):

                break;
            case ("Add to Inventory"):

                break;
            case ("Add New Product"):

                break;
            case ("Exit"):
                console.end();
                break;
        }
    })
}

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", (err, data) => {
        if (err) throw err;
        data.forEach(function (i) {
            console.log("\n--------- Employee Id: " + red(i.id) + " ------------")
            console.log(green("First Name: ") + blue(i.first_name) + green("\nLast Name: $") + blue(i.last_name) + green("\nRole: ") + blue(i.role_id));
        })
    })
}

connection.end();