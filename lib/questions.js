class Questions{
    get mainMenu(){
        let choices = ["View All Employees",
        "View Departments",
        "View Roles",
        "Update Employee Role",
        "View employees by Manager",
        "Add an Employee",
        "Add a Department",
        "Add a Role",
        "Quit"];
        return {
            type:"list",
            message:"Main Menu:",
            choices: choices,
            name:"choice",
            pageSize: choices.length 
        };
    }

    get addDepartment(){
        return {
            type: "input",
            name: "department",
            message: "What's the name of your department?"
        };
    }

    get addRole(){
        return [{
            type: "input",
            name: "title",
            message: "What's the role you'd like to add?"
        },
        {
            type: "number",
            name: "salary",
            message: "How much are we paying them?"
        },
        {
            type: "list",
            name: "department",
            message: "What department should this person be in?",
            choices:[]
        }];
    }

    get addEmployee(){
        return [{
            type: "input",
            name:"first_name",
            message: "We need a first name, what is it?"
        },
        {
            type:"input",
            name:"last_name",
            message:"We need a last name, what is it?"
            
        },
        {
            type:"list",
            name:"role", 
            message:"What's this person's role at the company?",
            choices:[]
        },
        {
            type:"list",
            name:"manager",
            message: "Whose their manager?",
            choices:[]
        }];
    }

    get deleteEmployee(){
        return {
            type: "list",
            name:"employee",
            message: "Who are we firing today?",
            choices:[]
            
        };
    }

    get deleteRole(){
        return {
            type: "list",
            name:"role",
            message: "Which department role are we killing off?",
            choices:[]
        };
    }

    get deleteDepartment(){
        return {
            type: "list",
            name:"department",
            message: "Are we firing an entire department today sir?",
            choices:[]
            
        };
    }

    get updateEmployeeRole(){
        return [{
            type: "list",
            name:"employee",
            message: "Who are we promoting today?",
            choices:[]
            
        },
        {
            type:"list",
            name:"role",
            message:"What role is this employee being thrown into?",
            choices:[]
            
        }];
    }
    get confirmInput(){
        return {
            type: "confirm",
            message: "",
            name:"confirm"
        }
    }
}
module.exports = Questions;