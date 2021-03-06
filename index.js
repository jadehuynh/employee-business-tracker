const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');
const consoleTable = require('console.table')
// const db = require('./unit12-hw/connection')
// const asciiart = require('asciiart');
// const logoText = asciiart({name: "Employee Manager"}).render();

function addDepartment (info) {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptname',
            message: "What Department would you like to add?"

        }
    
    ])
    .then(info => {
        console.log(info)
        db.query(`INSERT INTO department (department_name) VALUES(?)`,info.deptname, function (err, results) {
            console.log(results);
                return defaultQuestions();
    }
    )
})};


function addEmployeeInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the Employee's first name?"

        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the Employee's last name?"

        },
        {
            type: 'list',
            name: 'role_id',
            message: "What is the Employee's role id?",
            choices: [1, 2, 3, 4, 5, 6]

        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the manager id?"

        }
    ])
    .then(info => {
            db.query('INSERT INTO employee_info_data (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [info.first_name, info.last_name, info.role_id, info.manager_id], function (err, results) {
                console.table(results);
                    return defaultQuestions();
    })
  })};

function addEmployeeRole() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the Employee Role?"

        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary of the Employee Role?"

        },
           
        {
            type: 'list',
            name: 'dept_id',
            message: "What is the department of the role?",
            choices: [1, 2, 3, 4, 5]

        }
    ])
    .then(info  =>{
        console.log(info)
            db.query('INSERT INTO employee_role_data (title, salary, department_id) VALUE (?,?,?)', [info.title, info.salary, info.dept_id], function (err, results) {
                    console.log(results);
                        return defaultQuestions();
                });
            
    }
    )
};


    // console.log(logoText);

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'rootroot',
        database: 'green_thumbs'
    },
    console.log(`Connected to the database.`))
        
    function defaultQuestions (){
        return inquirer.prompt([
            {
                type: "list",
                name: "userChoice",
                message: "What would you like to do?",
                choices: ["View Employee Roster", 
                    "Add Employee to Roster",
                    "View Employee Information", 
                    "Update an Employee Role", 
                    "View all Roles in Department", 
                    "Add a Role", 
                    "View all Departments", 
                    "Add a New Department",
                    "Quit"]
            }
        ])
        .then(userChoice => {
            console.log(userChoice.userChoice)
            if(userChoice.userChoice === "Add Employee to Roster") {
                    addEmployeeInfo();
    
            }else if(userChoice.userChoice === "View Employee Information") {
                function viewEmployeeInformation() {
                    db.query('SELECT * FROM employee_info_data', function (err, results) {
                            console.table(results);
                            defaultQuestions();
                        });
                    }viewEmployeeInformation();
            }
            else if(userChoice.userChoice === "View Employee Roster") {
              viewEmployees()

            }else if(userChoice.userChoice === "Update an Employee Role") {
                     updateEmployeeRole();
    
             }else if(userChoice.userChoice === "View all Roles in Department") {
                function viewRoles() {
                    db.query('SELECT * FROM employee_role_data', function (err, results) {
                            console.table(results);
                            defaultQuestions();
                        });
                    }viewRoles()

            }else if(userChoice.userChoice === "Add a Role") {
                    addEmployeeRole();
            
            }else if(userChoice.userChoice === "View all Departments") {
                function viewDepartment() {
                    db.query('SELECT * FROM department', function (err, results) {
                            console.table(results);
                            defaultQuestions();
                        });
                    }viewDepartment()

            }else if(userChoice.userChoice === "Add a New Department") {
                addDepartment();

            }else(userChoice.userChoice === "Quit") 
                return
            
    
        })
    }
defaultQuestions();
function viewEmployees() {
    db.query('Select * from employee_role_data Join employee_info_data On employee_role_data.id = employee_info_data.role_id', function (err, results) {
            console.table(results);
            defaultQuestions();
        });
    }
    
    function updateEmployeeRole () {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID?'
            },
            {
                type: 'input',
                name: 'title',
                message: "What is the updated employee role?"
    
            },
            {
                type: 'input',
                name: 'salary',
                message: "What is the updated salary of the employee role?"
    
            }
        ])
        .then(info => {
            console.log(info)
                db.query('UPDATE employee_role_data SET title=?, salary=? WHERE id=?', [info.title, info.salary, info.id], function (err, results) {
                        console.log(results);
                            
                    });
                    return defaultQuestions();
        })
    };