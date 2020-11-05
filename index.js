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

// function test() {
//     connection.end();
//     connection.query("SELECT * FROM employee", function (err, res) {
//         if (err) throw err;
//         res.forEach(function (i) {
//             console.log("\n--------- Employee Id: " + red(i.id) + " ------------")
//             console.log(green("First Name: ") + blue(i.first_name) + green("\nLast Name: $") + blue(i.last_name) + green("\nRole: ") + blue(i.role_id));
//         })
//     })
// }

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
        choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Depertment", "Add Role", "Update Employee Role"]
    }).then(answers => {
        switch (answers.choice) {
            case ("View All Employees"):
                viewAllEmployees();
                break;
            case ("View All Departments"):
                viewAllDepartments();
                break;
            case ("View All Roles"):
                viewAllRoles();
                break;
            case ("Add Employee"):
                addEmployee();
                break;
            case ("Add Department"):
                addDepartment();
                break;
            case ("Add Role"):
                addRole();
                break;
            case ("Update Employee Role"):
                updateEmployeeRole();
                break;
            case ("Exit"):
                connection.end();
                console.end();
                break;
        }
    })
}

function viewAllEmployees() {
    // console.table(res)
    connection.query("SELECT CONCAT_WS(', ', last_name, first_name) AS 'Name', roles.title AS 'Role' FROM employee LEFT OUTER JOIN roles ON employee.role_id = roles.id", (err, res) => {
        if (err) throw err;
        res.forEach(function (i) {
            console.table(i);
        })
    })
}

function viewAllDepartments() {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        res.forEach(function (i) {
            console.table(i);
        })
    })
}