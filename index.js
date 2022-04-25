const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'root',
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
                    "Add a Role to Department", 
                    "View all Departments", 
                    "Add a New Department", 
                    "Quit"]
            }
        ])
        .then(userChoice => {
            console.log(userChoice.userChoice)
            if(userChoice.userChoice === "Add Employee to Roster") {
                addEmployeeInfo()
            }
            else if(userChoice.userChoice === "View Employee Roster") {
                viewEmployees()
            }
            else if(userChoice.userChoice === "Update an Employee Role") {
                updateEmployees()
    
            }else if(userChoice.userChoice === "View all Roles in Department") {
                viewRoles()
                
            }else if(userChoice.userChoice === "Add a Role to Department") {
                addRole()
            }else if(userChoice.userChoice === "View all Departments") {
                function viewDepartment() {
                    db.query('SELECT * FROM department', function (err, results) {
                            console.log(results);
                            console.log(viewDepartment);
                            // defaultQuestions();
                        });
                    }
                viewDepartment()
            }else if(userChoice.userChoice === "Add a New Department") {
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
    
            }
            // {
            //     type: 'input',
            //     name: 'role_id',
            //     message: "What is the Employee role_id?"
    
            // },
            // {
            //     type: "list",
            //     name: 'manager_id',
            //     message: "Who is the Manager of the Employee?",
            //     choices: ["Rose Biggns", "Willow Colbert"]
    
            // }
        ])
        .then(info = () =>{
            console.log(info)
        }
        )
    }
    
    const addEmployeeRole = () => {
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
            // {
            //     type: 'input',
            //     name: 'roledept',
            //     message: "What is the department of the role"
    
            // },
            // {
            //     type: "list",
            //     name: 'manager_id',
            //     message: "Who is the Manager of the Employee?",
            //     choices: ["None",
            //         "Rose Biggins",
            //         "Willow Colbert"]
    
            // }
        ])
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