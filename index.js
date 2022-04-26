const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');
const consoleTable = require('console.table')

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'rootroot',
        database: 'green_thumbs'
    },
    console.log(`Connected to the database.`));
        
    const defaultQuestions = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "userChoice",
                message: "What would you like to do?",
                choices: ["View Employee Roster", 
                    "Add Employee to Roster", 
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
                addEmployeeRole();

                function addEmployeeInfo() {
                    db.query('INSERT INTO employee_role_data SET=? VALUE=?', function (err, results) {
                        console.log(results);
                        // res.json(results)
                        defaultQuestions();
                    });
                    }
                addEmployeeInfo()
            }
            else if(userChoice.userChoice === "View Employee Roster") {
                function viewEmployees() {
                    // var employRoster = "SELECT * FROM employee_role_data JOIN employee_info_data ON employee_role_data.employee_info_data = department.id"
                    
                    db.query('Select * from employee_role_data Join employee_info_data On employee_role_data.id = employee_info_data.role_id', function (err, results) {
                            console.log(results);
                            console.log(viewEmployees)
                            defaultQuestions();
                        });
                    }
                viewEmployees()
            }
            else if(userChoice.userChoice === "Update an Employee Role") {
                function updateEmployees() {
                    db.query('SELECT * FROM department', function (err, results) {
                            console.log(results);
                            
                            defaultQuestions();
                        });
                    }
                updateEmployees()
    
            }else if(userChoice.userChoice === "View all Roles in Department") {
                function viewRoles() {
                    db.query('SELECT * FROM employee_role_data', function (err, results) {
                            console.log(results);
                            defaultQuestions();
                        });
                    }
                viewRoles()
                
            }else if(userChoice.userChoice === "Add a Role") {
                function addRole() {

                    db.query('INSERT INTO employee_role_data SET=? VALUE=?', function (err, results) {
                            console.log(results);
                            addEmployeeRole();
                        });
                    }
                addRole()
            }else if(userChoice.userChoice === "View all Departments") {
                function viewDepartment() {
                    db.query('SELECT * FROM department', function (err, results) {
                            console.log(results);
                          
                            defaultQuestions();
                        });
                    }
                viewDepartment()
            }else if(userChoice.userChoice === "Add a New Department") {
                function addDepartment() {
                    db.query('INSERT INTO employee_role_data SET=? VALUE=?', function (err, results) {
                            console.log(results);
                            
                            defaultQuestions();
                        });
                    }
                addDepartment()
            }else(userChoice.userChoice === "Quit") 
                return
            
    
        })
    }
    
    const addDepartment = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'deptname',
                message: "What Department would you like to add?"
    
            }
        ])
    }
    
    const addEmployeeInfo = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What is the Employee first_name?"
    
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is the Employee last_name?"
    
            },
            {
                type: 'input',
                name: 'role_id',
                message: "What is the Employee role_id?"
    
            },
            {
                type: "list",
                name: 'manager_id',
                message: "Who is the Manager of the Employee?",
                choices: ["Rose Biggns", "Willow Colbert"]
    
            }
        ])
        .then(info = () =>{
            console.log(info)
        }
        )
    }
    
    const addEmployeeRole = (data) => {
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
                type: 'input',
                name: 'roledept',
                message: "What is the department of the role?"
    
            },
            {
                type: "list",
                name: 'manager_id',
                message: "Who is the Manager of the Employee?",
                choices: ["None",
                    "Rose Biggins",
                    "Willow Colbert"]
    
            }
        ])
        .then(info = () =>{
            console.log(info)
            return defaultQuestions()
        }
        )
      
    }
    
    defaultQuestions();

// );
// const opt = ["ALL_DEPT", "ALL_ROLES"];
// function startApp() {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "userview",
//             message: "What you want to see?",
//             choices: opt
//         }
//     ])
//         .then((ans) => {
//             console.log(ans);
//             switch (ans.userview) {
//                 case opt[0]:
//                     // queryFunctions.allDepts();
//                     allDepts();
//                     break;

//                 default:
//                     break;
//             }
//         })
// }

// startApp();

// function allDepts() {
//     db.query('SELECT * FROM department', function (err, results) {
//         console.log(results);
//         startApp();
//     });
// 